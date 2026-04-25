# 🚀 PPDB Management System

A modern, high-performance Student Admissions Management System (PPDB) built with speed, scalability, and **Vibe Coding** principles.

## ✨ Vibe Coding Origin
This project was architected and developed using **Antigravity**, a state-of-the-art agentic AI coding assistant. By focusing on intent and high-level architecture ("The Vibe"), we've accelerated the development of a robust, production-ready system.

## 🏗️ Tech Stack

### Backend (`/back-ppdb`)
- **Language**: Go 1.25+
- **Framework**: [Fiber v2](https://gofiber.io/) (High-performance web framework)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (External/Local install)
- **Object Storage**: [Minio](https://min.io/) (For student documents)
- **ORM**: [GORM](https://gorm.io/)
- **Documentation**: [Swagger UI](http://localhost:8100/swagger/index.html)
- **Authentication**: JWT (JSON Web Tokens)

### Frontend (`/front-ppdb`)
- **Framework**: [Vite](https://vitejs.dev/) + [React/Vue]
- **Language**: TypeScript
- **Styling**: Modern, responsive UI

## 📁 Project Structure
```text
app-ppdb/
├── back-ppdb/    # Go Fiber Backend API
├── front-ppdb/   # Vite-powered Frontend
└── README.md     # This file
```

## 🚀 Getting Started

### 1. Prerequisite
- Docker (for Minio)
- PostgreSQL installed locally
- Go 1.25+
- Node.js & npm/pnpm

### 2. Backend Setup
```bash
cd back-ppdb
# Set up .env based on your local Postgres/Minio
go run cmd/api/main.go
```

### 3. Frontend Setup
```bash
cd front-ppdb
npm install
npm run dev
```

---
*Built with ❤️ and AI-driven precision.*
