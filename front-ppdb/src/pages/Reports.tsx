import React from 'react'
import { FileText, Download, TrendingUp, Users, CheckCircle } from 'lucide-react'

const Reports: React.FC = () => {
  return (
    <div className="reports-view">
      <div className="dashboard-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#f0fdf4', color: '#16a34a' }}>
            <TrendingUp size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Conversion Rate</span>
            <span className="stat-value">68.4%</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
            <Users size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Rata-rata Pendaftar/Hari</span>
            <span className="stat-value">42</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: '#faf5ff', color: '#9333ea' }}>
            <CheckCircle size={24} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Kelengkapan Berkas</span>
            <span className="stat-value">92%</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
        {/* Main Chart Simulation */}
        <div className="table-container" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '18px' }}>Tren Pendaftaran (30 Hari Terakhir)</h3>
            <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Lihat Detail</button>
          </div>
          <div style={{ height: '240px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'flex-end', padding: '20px', gap: '8px' }}>
            {/* Simple CSS Bar Chart Simulation */}
            {[40, 60, 45, 90, 65, 80, 50, 100, 75, 85].map((height, i) => (
              <div key={i} style={{ flex: 1, height: `${height}%`, background: 'var(--accent)', borderRadius: '4px 4px 0 0', opacity: 0.8 }}></div>
            ))}
          </div>
        </div>

        {/* Report List */}
        <div className="table-container" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Laporan Siap Unduh</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { title: 'Laporan Mingguan - S1', size: '2.4 MB' },
              { title: 'Laporan Jalur Prestasi', size: '1.8 MB' },
              { title: 'Data Statistik Gender', size: '0.9 MB' },
              { title: 'Rekapitulasi Verifikasi', size: '3.1 MB' }
            ].map((report, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                <div style={{ background: '#fff', padding: '8px', borderRadius: '6px', border: '1px solid var(--border)' }}>
                  <FileText size={18} color="var(--accent)" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: '600' }}>{report.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{report.size}</div>
                </div>
                <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports
