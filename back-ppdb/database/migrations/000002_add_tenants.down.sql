-- Rollback Multi-tenancy Support

-- 1. Remove NOT NULL constraints
ALTER TABLE registrations ALTER COLUMN tenant_id DROP NOT NULL;
ALTER TABLE majors ALTER COLUMN tenant_id DROP NOT NULL;
ALTER TABLE students ALTER COLUMN tenant_id DROP NOT NULL;
ALTER TABLE users ALTER COLUMN tenant_id DROP NOT NULL;

-- 2. Restore global unique constraints
ALTER TABLE users DROP CONSTRAINT IF EXISTS users_email_tenant_unique;
ALTER TABLE users ADD CONSTRAINT users_email_key UNIQUE (email);

ALTER TABLE students DROP CONSTRAINT IF EXISTS students_nisn_tenant_unique;
ALTER TABLE students ADD CONSTRAINT students_nisn_key UNIQUE (nisn);

-- 3. Remove columns
ALTER TABLE registrations DROP COLUMN IF EXISTS tenant_id;
ALTER TABLE majors DROP COLUMN IF EXISTS tenant_id;
ALTER TABLE students DROP COLUMN IF EXISTS tenant_id;
ALTER TABLE users DROP COLUMN IF EXISTS tenant_id;

-- 4. Drop tenants table
DROP TABLE IF EXISTS tenants;
