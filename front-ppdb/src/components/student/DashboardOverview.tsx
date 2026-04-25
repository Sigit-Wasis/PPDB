import React from 'react'
import { Clock, CheckCircle, User, FileText, ExternalLink } from 'lucide-react'
import Card from '../ui/Card'

const DashboardOverview: React.FC = () => {
  return (
    <>
      <div style={{ padding: '40px', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', borderRadius: '24px', color: 'white', boxShadow: '0 10px 25px rgba(37, 99, 235, 0.2)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '12px' }}>Halo, Budi Santoso! 👋</h2>
        <p style={{ opacity: 0.9, fontSize: '16px', maxWidth: '600px' }}>Selamat datang di Portal PPDB SMA Negeri 1. Segera lengkapi data Anda untuk tahap verifikasi berkas.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        <Card title="Status Pendaftaran">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'var(--status-pending-bg)', border: '1px solid #fde68a', borderRadius: '12px' }}>
            <Clock size={24} color="var(--status-pending-text)" />
            <div>
              <div style={{ fontWeight: '700', color: 'var(--status-pending-text)' }}>Belum Lengkap</div>
              <div style={{ fontSize: '13px', color: 'var(--status-pending-text)' }}>Silakan lengkapi Data Pribadi dan Unggah Berkas.</div>
            </div>
          </div>
        </Card>

        <Card title="Jalur Pilihan">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', background: 'var(--status-accepted-bg)', border: '1px solid #bbf7d0', borderRadius: '12px' }}>
            <CheckCircle size={24} color="var(--status-accepted-text)" />
            <div>
              <div style={{ fontWeight: '700', color: 'var(--status-accepted-text)' }}>Zonasi Radius</div>
              <div style={{ fontSize: '13px', color: 'var(--status-accepted-text)' }}>Status: Memenuhi Syarat</div>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Alur Pendaftaran Saya">
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0' }}>
          {['Registrasi Akun', 'Pengisian Data', 'Verifikasi Berkas', 'Hasil Seleksi'].map((task, i) => (
            <div key={i} style={{ textAlign: 'center', flex: 1, position: 'relative' }}>
              <div style={{ width: '36px', height: '36px', background: i === 0 ? 'var(--status-accepted-text)' : 'var(--bg-main)', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i === 0 ? 'white' : 'var(--text-muted)', border: '2px solid var(--border)' }}>
                {i === 0 ? <CheckCircle size={18} /> : i + 1}
              </div>
              <span style={{ fontSize: '13px', fontWeight: '600', color: i === 0 ? 'var(--primary)' : 'var(--text-muted)' }}>{task}</span>
            </div>
          ))}
        </div>
      </Card>
    </>
  )
}

export default DashboardOverview
