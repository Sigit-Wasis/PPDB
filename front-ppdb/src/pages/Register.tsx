import React from 'react'
import { User, Mail, Lock, School, GraduationCap, ArrowRight, ArrowLeft } from 'lucide-react'

interface RegisterProps {
  onGoToLogin: () => void;
  onGoBack: () => void;
}

const Register: React.FC<RegisterProps> = ({ onGoToLogin, onGoBack }) => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    nisn: '',
    school: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Registrasi berhasil! Silakan masuk dengan akun Anda.');
    onGoToLogin();
  };

  return (
    <div className="login-page">
      <div className="glass-card" style={{ maxWidth: '500px' }}>
        <button 
          onClick={onGoBack} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-muted)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            cursor: 'pointer',
            fontSize: '14px',
            marginBottom: '20px'
          }}
        >
          <ArrowLeft size={16} /> Kembali
        </button>

        <div className="login-header" style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '24px' }}>Daftar Akun Siswa</h1>
          <p>Lengkapi data di bawah untuk memulai pendaftaran PPDB</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="form-group">
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: 'var(--text-muted)' }}>Nama Lengkap</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
              <input type="text" className="glass-input" style={{ paddingLeft: '44px' }} placeholder="Masukkan nama sesuai ijazah" required />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: 'var(--text-muted)' }}>NISN</label>
              <div style={{ position: 'relative' }}>
                <GraduationCap size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                <input type="text" className="glass-input" style={{ paddingLeft: '44px' }} placeholder="10 Digit NISN" required />
              </div>
            </div>
            <div className="form-group">
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: 'var(--text-muted)' }}>Sekolah Asal</label>
              <div style={{ position: 'relative' }}>
                <School size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                <input type="text" className="glass-input" style={{ paddingLeft: '44px' }} placeholder="SMP Negeri..." required />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: 'var(--text-muted)' }}>Email Aktif</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
              <input type="email" className="glass-input" style={{ paddingLeft: '44px' }} placeholder="contoh@email.com" required />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: 'var(--text-muted)' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                <input type="password" className="glass-input" style={{ paddingLeft: '44px' }} placeholder="••••••••" required />
              </div>
            </div>
            <div className="form-group">
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '6px', color: 'var(--text-muted)' }}>Konfirmasi</label>
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                <input type="password" className="glass-input" style={{ paddingLeft: '44px' }} placeholder="••••••••" required />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '48px', justifyContent: 'center', marginTop: '12px' }}>
            Buat Akun Sekarang <ArrowRight size={18} />
          </button>
        </form>

        <div className="login-footer">
          Sudah punya akun? <span onClick={onGoToLogin} style={{ color: 'var(--accent)', fontWeight: '700', cursor: 'pointer' }}>Masuk di sini</span>
        </div>
      </div>
    </div>
  )
}

export default Register
