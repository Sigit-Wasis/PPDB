import React from 'react'
import DashboardOverview from '../components/student/DashboardOverview'
import RegistrationForm from '../components/student/RegistrationForm'
import AnnouncementView from '../components/student/AnnouncementView'
import MyDocuments from '../components/student/MyDocuments'
import SettingsView from '../components/student/SettingsView'

interface StudentDashboardProps {
  activeMenu: 'dashboard' | 'data' | 'pengumuman' | 'pengaturan' | 'dokumen';
  onLogout: () => void;
}

const StudentDashboard: React.FC<StudentDashboardProps> = ({ activeMenu }) => {
  return (
    <div style={{ width: '100%' }}>
      {/* CONTENT: DASHBOARD OVERVIEW */}
      {activeMenu === 'dashboard' && <DashboardOverview />}

      {/* CONTENT: DATA Pendaftaran */}
      {activeMenu === 'data' && <RegistrationForm />}

      {/* CONTENT: DOKUMEN SAYA */}
      {activeMenu === 'dokumen' && <MyDocuments />}

      {/* CONTENT: PENGUMUMAN */}
      {activeMenu === 'pengumuman' && <AnnouncementView />}

      {/* CONTENT: PENGATURAN */}
      {activeMenu === 'pengaturan' && <SettingsView />}
    </div>
  )
}

export default StudentDashboard
