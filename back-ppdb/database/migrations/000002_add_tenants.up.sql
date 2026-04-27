-- Migration: Add Multi-tenancy Support
-- Date: 2026-04-27

-- 1. Create Tenants Table
CREATE TABLE tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    subdomain VARCHAR(100) UNIQUE NOT NULL,
    education_level VARCHAR(20) NOT NULL, -- SD, SMP, SMA, SMK, TK
    address TEXT,
    logo_url TEXT,
    config JSONB DEFAULT '{}', -- Store custom settings like 'has_majors', 'required_docs', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Add tenant_id to existing tables
ALTER TABLE users ADD COLUMN tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
ALTER TABLE students ADD COLUMN tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
ALTER TABLE majors ADD COLUMN tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;
ALTER TABLE registrations ADD COLUMN tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE;

-- 3. Create a Default Tenant for existing data (Optional but good for migration)
INSERT INTO tenants (id, name, subdomain, education_level) 
VALUES ('00000000-0000-0000-0000-000000000001', 'SMK Default', 'smk-default', 'SMK');

-- 4. Update existing records with default tenant_id
UPDATE users SET tenant_id = '00000000-0000-0000-0000-000000000001';
UPDATE students SET tenant_id = '00000000-0000-0000-0000-000000000001';
UPDATE majors SET tenant_id = '00000000-0000-0000-0000-000000000001';
UPDATE registrations SET tenant_id = '00000000-0000-0000-0000-000000000001';

-- 5. Add NOT NULL constraint after data migration
ALTER TABLE users ALTER COLUMN tenant_id SET NOT NULL;
ALTER TABLE students ALTER COLUMN tenant_id SET NOT NULL;
-- Majors and Registrations might be nullable if we want global majors, but usually school-specific
ALTER TABLE majors ALTER COLUMN tenant_id SET NOT NULL;
ALTER TABLE registrations ALTER COLUMN tenant_id SET NOT NULL;

-- 6. Update Unique Indexes to include tenant_id
-- NISN unique per tenant
ALTER TABLE students DROP CONSTRAINT IF EXISTS students_nisn_key;
ALTER TABLE students ADD CONSTRAINT students_nisn_tenant_unique UNIQUE (nisn, tenant_id);

-- Email unique per tenant (Allow same email in different schools if desired, OR keep global)
-- Let's keep email globally unique for now to avoid confusion, or make it unique per tenant.
-- Per-tenant uniqueness is better for SaaS.
ALTER TABLE users DROP CONSTRAINT IF EXISTS users_email_key;
ALTER TABLE users ADD CONSTRAINT users_email_tenant_unique UNIQUE (email, tenant_id);
