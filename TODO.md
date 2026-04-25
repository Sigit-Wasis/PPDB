# 📋 PPDB Project Roadmap & TODO List

This document tracks the progress of the Student Admissions Management System (PPDB) development for both Backend and Frontend.

---

## ✅ Phase 1: Foundations & Authentication
- [x] **Backend**: Project structure and Go Fiber setup
- [x] **Backend**: PostgreSQL integration with GORM
- [x] **Backend**: Migration system (golang-migrate)
- [x] **Backend**: JWT Authentication (Register/Login)
- [x] **Backend**: Swagger API Documentation
- [x] **Backend**: Initial Database Seeder (Admin/Student)
- [x] **General**: Project `README.md` and root `.gitignore`

---

## 🛠️ Phase 2: Core Student Features (Backend)
- [ ] **Data Management**: API for Majors/Study Programs (CRUD)
- [ ] **Profile**: API for completing Student Personal Data
- [ ] **Family**: API for Parent/Guardian information
- [ ] **Academic**: API for Previous School & Academic Records
- [ ] **Registration**: Major selection logic and Registration Number generation
- [ ] **Storage**: Minio integration for Document Uploads (KK, Birth Certificate, etc.)
- [ ] **Middleware**: Role-based access control (RBAC) for Student vs Admin

---

## 🛡️ Phase 3: Administrative Control (Backend)
- [ ] **Verification**: API for Admins to Approve/Reject/Request revision on documents
- [ ] **Management**: List all registrations with advanced filtering (status, major, NISN)
- [ ] **Analytics**: Dashboard statistics (Total applicants, gender distribution, major popularity)
- [ ] **Export**: Feature to export student data to Excel/PDF for offline processing
- [ ] **Notifications**: (Optional) Email or WhatsApp notification on status change

---

## 🎨 Phase 4: Frontend Implementation (Vite + React/Vue)
- [ ] **Landing Page**: Information about the school, majors, and registration dates
- [ ] **Auth**: Login and Registration UI
- [ ] **Registration Flow**: Multi-step form for:
    - Personal Data
    - Parent Data
    - Academic History
    - Major Selection
    - Document Upload
- [ ] **Student Dashboard**:
    - View registration status
    - Download/Print Registration Card (PDF)
- [ ] **Admin Dashboard**:
    - Manage applications
    - Verify documents
    - System settings

---

## 🚀 Phase 5: Final Polish & Deployment
- [ ] **Security**: Input validation (frontend & backend)
- [ ] **Security**: Rate limiting for Auth endpoints
- [ ] **Performance**: Database indexing and query optimization
- [ ] **Deployment**: Dockerize both frontend and backend
- [ ] **Deployment**: CI/CD setup (optional)

---
*Last Updated: 2026-04-25*
