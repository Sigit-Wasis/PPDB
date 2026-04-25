import React from 'react'
import { Users, FileCheck, BarChart3, LogOut } from 'lucide-react'

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-view">
      <div className="welcome-section">
        <h2 className="welcome-title">Selamat Datang, Admin!</h2>
        <p className="welcome-subtitle">Pantau progres penerimaan siswa baru tahun ajaran 2024/2025 secara real-time.</p>
      </div>

      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
            <Users size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Total Pendaftar</span>
            <span className="stat-value">1,245</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
            <FileCheck size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Terverifikasi</span>
            <span className="stat-value">856</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#fffbeb', color: '#ca8a04' }}>
            <BarChart3 size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Menunggu</span>
            <span className="stat-value">312</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#fef2f2', color: '#dc2626' }}>
            <LogOut size={24} style={{ transform: 'rotate(180deg)' }} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Ditolak</span>
            <span className="stat-value">77</span>
          </div>
        </div>
      </div>

      <div className="table-container" style={{ padding: '24px' }}>
        <h3 style={{ marginBottom: '16px' }}>Grafik & Aktivitas Terbaru</h3>
        <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', borderRadius: '8px', color: '#64748b' }}>
          [ Area Visualisasi Grafik ]
        </div>
      </div>
    </div>
  )
}

export default Dashboard
