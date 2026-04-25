import React from 'react'
import { LogOut } from 'lucide-react'

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarTitle: string;
  navItems: NavItem[];
  activeMenu: string;
  onMenuChange: (id: any) => void;
  onLogout: () => void;
  userName: string;
  userRole: string;
  userAvatar?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebarTitle,
  navItems,
  activeMenu,
  onMenuChange,
  onLogout,
  userName,
  userRole,
  userAvatar
}) => {
  return (
    <div className="admin-layout" style={{ width: '100%', display: 'flex' }}>
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-icon"></div>
          <span className="logo-text">{sidebarTitle}</span>
        </div>

        <ul className="nav-list">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => onMenuChange(item.id)}
            >
              {item.icon}
              {item.label}
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <div className="nav-item" onClick={onLogout} style={{ cursor: 'pointer', color: '#ef4444' }}>
            <LogOut size={20} />
            Keluar
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <h1 className="header-title">
            {navItems.find(i => i.id === activeMenu)?.label || 'Overview'}
          </h1>

          <div className="user-profile">
            <div className="user-info">
              <span className="user-name">{userName}</span>
              <span className="user-role">{userRole}</span>
            </div>
            <div className="user-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#cbd5e1', fontWeight: '700' }}>
              {userAvatar || userName.charAt(0)}
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
