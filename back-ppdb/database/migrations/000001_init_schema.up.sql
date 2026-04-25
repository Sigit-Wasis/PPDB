-- Migration: Initial Schema for PPDB System
-- Date: 2026-04-24

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Users Table (Auth)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'student', -- admin, student
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Students Table (Profile & Address)
CREATE TABLE students (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    nisn VARCHAR(10) UNIQUE NOT NULL,
    nik VARCHAR(16) UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    gender VARCHAR(20),
    birth_place VARCHAR(100),
    birth_date DATE,
    religion VARCHAR(50),
    child_no INTEGER,
    siblings_count INTEGER,
    citizenship VARCHAR(50) DEFAULT 'WNI',
    child_status VARCHAR(50), -- Kandung, Tiri, Angkat
    height INTEGER,
    weight INTEGER,
    blood_type VARCHAR(5),
    phone VARCHAR(20),
    
    -- Address Fields
    address TEXT,
    dusun VARCHAR(100),
    rt VARCHAR(10),
    rw VARCHAR(10),
    village VARCHAR(100),
    district VARCHAR(100),
    city VARCHAR(100),
    province VARCHAR(100),
    postal_code VARCHAR(10),
    distance_to_school DECIMAL(5,2),
    transport_mode VARCHAR(50),

    -- Social Assistance
    kip_status BOOLEAN DEFAULT FALSE,
    kip_number VARCHAR(50),
    pkh_status BOOLEAN DEFAULT FALSE,
    pkh_number VARCHAR(50),
    kks_status BOOLEAN DEFAULT FALSE,
    kks_number VARCHAR(50),

    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Parents Table
CREATE TABLE parents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    relation_type VARCHAR(20) NOT NULL, -- Father, Mother, Guardian
    full_name VARCHAR(255) NOT NULL,
    nik VARCHAR(16),
    birth_year INTEGER,
    education VARCHAR(50),
    occupation VARCHAR(100),
    income VARCHAR(50),
    phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Academic Records Table
CREATE TABLE academic_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    previous_school_name VARCHAR(255) NOT NULL,
    npsn VARCHAR(10),
    school_address TEXT,
    graduation_year INTEGER,
    diploma_number VARCHAR(100),
    skhun_number VARCHAR(100),
    average_score DECIMAL(5,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Majors Table (Master Data)
CREATE TABLE majors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(10) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL
);

-- 6. Registrations Table (Choices & Status)
CREATE TABLE registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    major_1_id UUID REFERENCES majors(id),
    major_2_id UUID REFERENCES majors(id),
    registration_no VARCHAR(50) UNIQUE,
    status VARCHAR(50) DEFAULT 'pending', -- pending, verified, accepted, rejected
    selection_path VARCHAR(50), -- Zonasi, Prestasi, etc
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Documents Table
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    doc_type VARCHAR(50) NOT NULL, -- KK, Ijazah, Rapor, etc
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert Default Majors
INSERT INTO majors (code, name) VALUES 
('RPL', 'Rekayasa Perangkat Lunak'),
('TKJ', 'Teknik Komputer Jaringan'),
('AKL', 'Akuntansi'),
('BDP', 'Bisnis Digital'),
('OTKP', 'Perkantoran'),
('TKR', 'Teknik Kendaraan Ringan');
