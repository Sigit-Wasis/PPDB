import React from 'react'
import { Save, School, Calendar, Lock, Bell, Plus, Trash2, ShieldCheck, Monitor, Mail, MessageSquare, Globe } from 'lucide-react'

const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'profil' | 'jadwal' | 'keamanan' | 'notifikasi'>('profil');

  return (
    <div className="settings-view">
      <div className="dashboard-grid" style={{ gridTemplateColumns: '1fr 2fr', alignItems: 'start' }}>
        {/* Navigation / Info */}
        <div className="table-container" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '20px' }}>Kategori Pengaturan</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div 
              className={`nav-item ${activeTab === 'profil' ? 'active' : ''}`} 
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveTab('profil')}
            >
              <School size={18} /> Profil Sekolah
            </div>
            <div 
              className={`nav-item ${activeTab === 'jadwal' ? 'active' : ''}`} 
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveTab('jadwal')}
            >
              <Calendar size={18} /> Jadwal & Kuota
            </div>
            <div 
              className={`nav-item ${activeTab === 'keamanan' ? 'active' : ''}`} 
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveTab('keamanan')}
            >
              <Lock size={18} /> Keamanan Akun
            </div>
            <div 
              className={`nav-item ${activeTab === 'notifikasi' ? 'active' : ''}`} 
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveTab('notifikasi')}
            >
              <Bell size={18} /> Notifikasi Sistem
            </div>
          </div>
        </div>

        {/* Settings Forms */}
        <div className="table-container" style={{ padding: '32px' }}>
          {activeTab === 'profil' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Profil Sekolah</h2>
                <button className="btn btn-primary">
                  <Save size={18} /> Simpan Perubahan
                </button>
              </div>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Nama Sekolah</label>
                    <input type="text" className="search-input" defaultValue="SMK Negeri 1 Jakarta" />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>NPSN</label>
                    <input type="text" className="search-input" defaultValue="20103456" />
                  </div>
                </div>

                <div className="form-group">
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Alamat Sekolah</label>
                  <textarea className="search-input" style={{ minHeight: '80px', resize: 'vertical' }} defaultValue="Jl. Budi Utomo No.7, Sawah Besar, Jakarta Pusat"></textarea>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Tahun Ajaran Aktif</label>
                    <select className="select-filter" style={{ width: '100%' }}>
                      <option>2024/2025</option>
                      <option>2023/2024</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Status Pendaftaran</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                        <input type="radio" name="status" defaultChecked /> Buka
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', cursor: 'pointer' }}>
                        <input type="radio" name="status" /> Tutup
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </>
          )}

          {activeTab === 'jadwal' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Jadwal & Kuota</h2>
                <button className="btn btn-primary">
                  <Save size={18} /> Simpan Jadwal
                </button>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--primary)' }}>Periode Pendaftaran</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Tanggal Mulai</label>
                    <input type="date" className="search-input" defaultValue="2024-06-01" />
                  </div>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Tanggal Selesai</label>
                    <input type="date" className="search-input" defaultValue="2024-07-15" />
                  </div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '16px', color: 'var(--primary)' }}>Kuota Siswa Per Jalur</h3>
                  <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                    <Plus size={14} /> Tambah Jalur
                  </button>
                </div>
                
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ textAlign: 'left', background: '#f8fafc' }}>
                      <th style={{ padding: '12px', fontSize: '13px' }}>Nama Jalur</th>
                      <th style={{ padding: '12px', fontSize: '13px' }}>Persentase</th>
                      <th style={{ padding: '12px', fontSize: '13px' }}>Kapasitas</th>
                      <th style={{ padding: '12px', fontSize: '13px' }}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Prestasi Akademik', pct: '25%', cap: 90 },
                      { name: 'Zonasi Radius', pct: '50%', cap: 180 },
                      { name: 'Afirmasi / Kurang Mampu', pct: '15%', cap: 54 },
                      { name: 'Perpindahan Orang Tua', pct: '10%', cap: 36 },
                    ].map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '12px', fontSize: '14px' }}>{row.name}</td>
                        <td style={{ padding: '12px', fontSize: '14px' }}>{row.pct}</td>
                        <td style={{ padding: '12px', fontSize: '14px' }}>{row.cap} Siswa</td>
                        <td style={{ padding: '12px' }}>
                          <button style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer' }}>
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === 'keamanan' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Keamanan Akun</h2>
                <button className="btn btn-primary">
                  <Save size={18} /> Update Keamanan
                </button>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--primary)' }}>Ganti Password</h3>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Password Saat Ini</label>
                    <input type="password" className="search-input" placeholder="••••••••" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Password Baru</label>
                      <input type="password" className="search-input" placeholder="Minimal 8 karakter" />
                    </div>
                    <div className="form-group">
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-muted)' }}>Konfirmasi Password Baru</label>
                      <input type="password" className="search-input" placeholder="Ulangi password baru" />
                    </div>
                  </div>
                </form>
              </div>

              <div style={{ padding: '20px', background: '#f0f9ff', borderRadius: '12px', border: '1px solid #bae6fd', display: 'flex', gap: '16px', marginBottom: '32px' }}>
                <div style={{ color: '#0284c7' }}>
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '4px', color: '#0369a1' }}>Two-Factor Authentication (2FA)</h4>
                  <p style={{ fontSize: '13px', color: '#0c4a6e', marginBottom: '12px' }}>Tambahkan lapisan keamanan ekstra ke akun Anda. Kode verifikasi akan dikirim ke email terdaftar.</p>
                  <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px', borderColor: '#0284c7', color: '#0284c7' }}>Aktifkan 2FA</button>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--primary)' }}>Sesi Login Terakhir</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { device: 'Chrome on MacOS', time: 'Aktif Sekarang', ip: '192.168.1.1' },
                    { device: 'Safari on iPhone', time: '2 jam yang lalu', ip: '110.138.x.x' },
                  ].map((session, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1px solid var(--border)', borderRadius: '10px' }}>
                      <Monitor size={20} color="var(--text-muted)" />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: '600' }}>{session.device}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{session.ip} • {session.time}</div>
                      </div>
                      {i === 0 ? (
                        <span style={{ fontSize: '11px', fontWeight: '700', color: '#16a34a', background: '#f0fdf4', padding: '2px 8px', borderRadius: '10px' }}>SESI INI</span>
                      ) : (
                        <button style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '12px', cursor: 'pointer' }}>Logout</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'notifikasi' && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700' }}>Notifikasi Sistem</h2>
                <button className="btn btn-primary">
                  <Save size={18} /> Simpan Pengaturan
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Email Notifications */}
                <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: '#eff6ff', color: '#2563eb', padding: '8px', borderRadius: '8px' }}>
                      <Mail size={20} />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Notifikasi Email</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      { label: 'Pendaftar Baru', desc: 'Terima email setiap ada siswa baru yang mendaftar' },
                      { label: 'Berkas Masuk', desc: 'Notifikasi saat pendaftar mengunggah berkas baru' },
                      { label: 'Laporan Mingguan', desc: 'Kirim ringkasan pendaftaran setiap akhir minggu' }
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</div>
                          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</div>
                        </div>
                        <input type="checkbox" defaultChecked={i < 2} style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Notifications */}
                <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: '#f0fdf4', color: '#16a34a', padding: '8px', borderRadius: '8px' }}>
                      <MessageSquare size={20} />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Notifikasi WhatsApp</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {[
                      { label: 'Konfirmasi Pendaftaran', desc: 'Kirim nomor registrasi otomatis ke pendaftar' },
                      { label: 'Pengumuman Kelulusan', desc: 'Kirim hasil seleksi langsung ke nomor WhatsApp' }
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: '600' }}>{item.label}</div>
                          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</div>
                        </div>
                        <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Global System Alerts */}
                <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ background: '#fffbeb', color: '#ca8a04', padding: '8px', borderRadius: '8px' }}>
                      <Globe size={20} />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '700' }}>Alert Browser</h3>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600' }}>Push Notifications</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Tampilkan notifikasi di browser saat admin sedang online</div>
                    </div>
                    <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
