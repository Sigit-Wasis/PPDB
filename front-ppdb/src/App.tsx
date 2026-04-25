import React from 'react'
import Dashboard from './pages/Dashboard'
import RegistrationData from './pages/RegistrationData'
import Verification from './pages/Verification'
import Reports from './pages/Reports'
import SettingsPage from './pages/Settings'
import Login from './pages/Login'
import Register from './pages/Register'
import LandingPage from './pages/LandingPage'
import StudentDashboard from './pages/StudentDashboard'
import DashboardLayout from './layouts/DashboardLayout'
import { 
  AlertCircle, 
  LayoutDashboard, 
  Users, 
  FileCheck, 
  BarChart3, 
  Settings, 
  Megaphone, 
  User, 
  LogOut,
  FileText
} from 'lucide-react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [userRole, setUserRole] = React.useState<'admin' | 'student' | null>(null);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const [isRegistering, setIsRegistering] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<any>('dashboard');
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);

  const handleLogin = (email: string) => {
    setIsAuthenticated(true);
    const role = email.includes('admin') ? 'admin' : 'student';
    setUserRole(role);
    setIsLoggingIn(false);
    setActiveMenu('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setShowLogoutModal(false);
    setIsLoggingIn(false);
    setIsRegistering(false);
    setActiveMenu('dashboard');
  };

  if (!isAuthenticated && !isLoggingIn && !isRegistering) {
    return <LandingPage onGoToLogin={() => setIsLoggingIn(true)} onGoToRegister={() => setIsRegistering(true)} />;
  }

  if (!isAuthenticated && isRegistering) {
    return (
      <Register 
        onGoToLogin={() => { setIsRegistering(false); setIsLoggingIn(true); }} 
        onGoBack={() => setIsRegistering(false)} 
      />
    );
  }

  if (!isAuthenticated && isLoggingIn) {
    return (
      <Login 
        onLogin={handleLogin} 
        onGoToRegister={() => { setIsLoggingIn(false); setIsRegistering(true); }}
        onGoBack={() => setIsLoggingIn(false)}
      />
    );
  }

  const adminNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'pendaftaran', label: 'Data Pendaftaran', icon: <Users size={20} /> },
    { id: 'verifikasi', label: 'Verifikasi Berkas', icon: <FileCheck size={20} />, badge: 12 },
    { id: 'laporan', label: 'Laporan & Statistik', icon: <BarChart3 size={20} /> },
    { id: 'pengaturan', label: 'Pengaturan', icon: <Settings size={20} /> },
  ];

  const studentNavItems = [
    { id: 'dashboard', label: 'Beranda', icon: <LayoutDashboard size={20} /> },
    { id: 'data', label: 'Data Pribadi', icon: <User size={20} /> },
    { id: 'dokumen', label: 'Dokumen Saya', icon: <FileText size={20} /> },
    { id: 'pengumuman', label: 'Pengumuman', icon: <Megaphone size={20} /> },
    { id: 'pengaturan', label: 'Pengaturan', icon: <Settings size={20} /> },
  ];

  if (userRole === 'student') {
    return (
      <DashboardLayout
        sidebarTitle="Portal Siswa"
        navItems={studentNavItems}
        activeMenu={activeMenu}
        onMenuChange={setActiveMenu}
        onLogout={() => setShowLogoutModal(true)}
        userName="Budi Santoso"
        userRole="NISN: 0098765432"
      >
        <StudentDashboard activeMenu={activeMenu} onLogout={() => setShowLogoutModal(true)} />
        {showLogoutModal && (
          <LogoutModal onCancel={() => setShowLogoutModal(false)} onConfirm={handleLogout} />
        )}
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      sidebarTitle="PPDB Admin"
      navItems={adminNavItems}
      activeMenu={activeMenu}
      onMenuChange={setActiveMenu}
      onLogout={() => setShowLogoutModal(true)}
      userName="Admin Sekolah"
      userRole="Super Admin"
    >
      {activeMenu === 'dashboard' && <Dashboard />}
      {activeMenu === 'pendaftaran' && <RegistrationData />}
      {activeMenu === 'verifikasi' && <Verification />}
      {activeMenu === 'laporan' && <Reports />}
      {activeMenu === 'pengaturan' && <SettingsPage />}

      {showLogoutModal && (
        <LogoutModal onCancel={() => setShowLogoutModal(false)} onConfirm={handleLogout} />
      )}
    </DashboardLayout>
  );
}

const LogoutModal = ({ onCancel, onConfirm }: { onCancel: () => void, onConfirm: () => void }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-icon">
        <AlertCircle size={32} />
      </div>
      <h3 className="modal-title">Konfirmasi Keluar</h3>
      <p className="modal-desc">Apakah Anda yakin ingin keluar dari sistem? Anda harus masuk kembali untuk mengakses dashboard.</p>
      <div className="modal-actions">
        <button className="modal-btn modal-btn-cancel" onClick={onCancel}>Batal</button>
        <button className="modal-btn modal-btn-confirm" onClick={onConfirm}>Ya, Keluar</button>
      </div>
    </div>
  </div>
);

export default App
