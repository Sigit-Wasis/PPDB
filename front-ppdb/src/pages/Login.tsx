import React from 'react'
import { Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react'

interface LoginProps {
  onLogin: (email: string) => void;
  onGoToRegister: () => void;
  onGoBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onGoToRegister, onGoBack }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <div className="login-page">
      <div className="glass-card">
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

        <div className="login-logo">
          <div className="logo-icon"></div>
        </div>

        <div className="login-header">
          <h1>Selamat Datang</h1>
          <p>Masuk ke panel admin PPDB Online</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="form-group">
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#64748b' }} />
              <input
                type="email"
                className="glass-input"
                style={{ paddingLeft: '44px' }}
                placeholder="admin@sekolah.sch.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#64748b' }} />
              <input
                type="password"
                className="glass-input"
                style={{ paddingLeft: '44px' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', cursor: 'pointer' }}>
              <input type="checkbox" /> Ingat saya
            </label>
            <a href="#" style={{ fontSize: '13px', color: 'var(--accent)', textDecoration: 'none' }}>Lupa Password?</a>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '48px', justifyContent: 'center', marginTop: '12px' }}>
            Masuk Sekarang <ArrowRight size={18} />
          </button>
        </form>

        <div className="login-footer">
          Belum punya akses? <span onClick={onGoToRegister} style={{ color: 'var(--accent)', fontWeight: '700', cursor: 'pointer' }}>Daftar di sini</span>
        </div>
      </div>
    </div>
  )
}

export default Login
