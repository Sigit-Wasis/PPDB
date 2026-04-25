import React from 'react'
import { User, Lock, Save } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const SettingsView: React.FC = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
        {/* Update Profile */}
        <Card title="Update Profil" icon={<User size={20} />}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '10px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '700', border: '2px solid var(--border)' }}>
                BS
              </div>
              <Button variant="outline" size="sm">Ubah Foto</Button>
            </div>
            
            <div className="form-group">
              <label className="label-text">Nama Lengkap</label>
              <input type="text" className="search-input" defaultValue="Budi Santoso" />
            </div>
            
            <div className="form-group">
              <label className="label-text">Email</label>
              <input type="email" className="search-input" defaultValue="budi.santoso@email.com" />
            </div>
            
            <div className="form-group">
              <label className="label-text">Nomor WhatsApp</label>
              <input type="tel" className="search-input" defaultValue="081234567890" />
            </div>
            
            <Button variant="primary" icon={<Save size={18} />}>Simpan Perubahan</Button>
          </div>
        </Card>

        {/* Update Password */}
        <Card title="Keamanan Akun" icon={<Lock size={20} />}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '10px' }}>
              Gunakan kombinasi kata sandi yang kuat untuk menjaga keamanan akun Anda.
            </p>
            
            <div className="form-group">
              <label className="label-text">Kata Sandi Saat Ini</label>
              <input type="password" className="search-input" placeholder="••••••••" />
            </div>
            
            <div className="form-group">
              <label className="label-text">Kata Sandi Baru</label>
              <input type="password" className="search-input" placeholder="Minimal 8 karakter" />
            </div>
            
            <div className="form-group">
              <label className="label-text">Konfirmasi Kata Sandi</label>
              <input type="password" className="search-input" placeholder="Ulangi kata sandi baru" />
            </div>
            
            <Button variant="primary" icon={<Lock size={18} />}>Update Password</Button>
          </div>
        </Card>
      </div>

      <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '16px', border: '1px solid var(--border)' }}>
        <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', color: '#64748b' }}>Log Aktivitas</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px' }}>
          <span style={{ color: 'var(--text-muted)' }}>Terakhir login dari perangkat Chrome - Windows 11</span>
          <span style={{ fontWeight: '600' }}>2 jam yang lalu</span>
        </div>
      </div>
    </div>
  )
}

export default SettingsView
