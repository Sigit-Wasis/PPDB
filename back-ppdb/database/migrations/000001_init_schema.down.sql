-- Migration: Drop Initial Schema
-- Date: 2026-04-24

DROP TABLE IF EXISTS documents;
DROP TABLE IF EXISTS registrations;
DROP TABLE IF EXISTS majors;
DROP TABLE IF EXISTS academic_records;
DROP TABLE IF EXISTS parents;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS users;

DROP EXTENSION IF EXISTS "uuid-ossp";
