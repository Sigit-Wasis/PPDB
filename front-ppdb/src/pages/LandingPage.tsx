import React from 'react'
import {
  UserPlus,
  ClipboardCheck,
  UploadCloud,
  FileSearch,
  Megaphone,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight
} from 'lucide-react'
import '../landing.css'

interface LandingPageProps {
  onGoToLogin: () => void;
  onGoToRegister: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGoToLogin, onGoToRegister }) => {
  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="lp-navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--lp-primary)', borderRadius: '8px' }}></div>
          <div style={{ lineHeight: '1.2' }}>
            <div style={{ fontWeight: '800', color: 'var(--lp-primary)' }}>SMA NEGERI 1</div>
            <div style={{ fontSize: '10px', color: 'var(--lp-text)' }}>Berprestasi, Berkarakter, Berdaya Saing</div>
          </div>
        </div>

        <ul className="lp-nav-links">
          <li><a href="#beranda">Beranda</a></li>
          <li><a href="#tentang">Tentang Sekolah</a></li>
          <li><a href="#informasi">Informasi PPDB</a></li>
          <li><a href="#persyaratan">Persyaratan</a></li>
          <li><a href="#jadwal">Jadwal</a></li>
        </ul>

        <div className="lp-auth-btns">
          <button className="btn btn-secondary" onClick={onGoToLogin}>Masuk</button>
          <button className="btn btn-primary" style={{ background: 'var(--lp-accent)' }} onClick={onGoToRegister}>Daftar Sekarang</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="lp-hero" id="beranda">
        <div className="lp-hero-content">
          <span className="lp-hero-badge">PPDB 2025/2026</span>
          <h1>Pendaftaran Online<br />SMA NEGERI 1</h1>
          <p style={{ fontSize: '18px', color: 'var(--lp-text)', marginBottom: '32px', maxWidth: '500px' }}>
            Bergabunglah bersama kami dan wujudkan masa depan cerah melalui pendidikan berkualitas dan berkarakter.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn btn-primary" style={{ padding: '14px 28px' }} onClick={onGoToRegister}>
              <UserPlus size={20} /> Daftar Sekarang
            </button>
            <button className="btn btn-secondary" style={{ padding: '14px 28px' }}>
              Informasi PPDB
            </button>
          </div>
        </div>
        <div className="lp-hero-image">
          <img src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Gedung SMA Negeri 1" />
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section className="lp-section" id="tentang">
        <div style={{ display: 'flex', alignItems: 'center', gap: '80px', textAlign: 'left' }}>
          <div style={{ flex: 1, position: 'relative', height: '450px', display: 'flex', alignItems: 'flex-start' }}>
            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=600"
              alt="Fasilitas Sekolah"
              style={{ width: '85%', height: '400px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            />
            {/* Secondary Overlapping Image */}
            <img
              src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Aktivitas Siswa"
              style={{
                width: '55%',
                height: '280px',
                objectFit: 'cover',
                borderRadius: '20px',
                position: 'absolute',
                bottom: '0',
                right: '0',
                border: '10px solid white',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                zIndex: '2'
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h2 className="lp-section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Tentang Sekolah Kami</h2>
            <p style={{ marginBottom: '24px', fontSize: '17px', lineHeight: '1.8' }}>
              SMA Negeri 1 adalah institusi pendidikan menengah atas unggulan yang berfokus pada pengembangan potensi akademik dan karakter siswa. Dengan fasilitas modern dan tenaga pengajar profesional, kami berkomitmen mencetak generasi yang cerdas dan berintegritas.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--lp-accent)', borderRadius: '50%' }}></div>
                  <h4 style={{ color: 'var(--lp-primary)', fontWeight: '700' }}>Visi Sekolah</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--lp-text)', opacity: 0.8 }}>Menjadi pusat keunggulan pendidikan yang berwawasan global, religius, dan berbudaya lingkungan.</p>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--lp-accent)', borderRadius: '50%' }}></div>
                  <h4 style={{ color: 'var(--lp-primary)', fontWeight: '700' }}>Misi Utama</h4>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--lp-text)', opacity: 0.8 }}>Menyelenggarakan pembelajaran berbasis teknologi mutakhir dan penguatan nilai karakter integritas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className="lp-section" id="fasilitas" style={{ background: 'white', paddingTop: '0' }}>
        <h2 className="lp-section-title">Fasilitas Unggulan</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '20px' }}>
          {[
            { img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600', title: 'Laboratorium Sains' },
            { img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600', title: 'Lapangan Olahraga' },
            { img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600', title: 'Ruang Komputer' }
          ].map((item, i) => (
            <div key={i} className="lp-card" style={{ padding: '0', overflow: 'hidden', position: 'relative', border: 'none', borderRadius: '20px' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '250px', objectFit: 'cover', transition: 'transform 0.5s' }} />
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                padding: '24px 20px',
                color: 'white',
                textAlign: 'left'
              }}>
                <div style={{ fontWeight: '700', fontSize: '18px' }}>{item.title}</div>
                <div style={{ fontSize: '12px', opacity: '0.8', marginTop: '4px' }}>Fasilitas Modern & Lengkap</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alur Pendaftaran */}
      <section className="lp-section" id="alur" style={{ background: '#f8fafc' }}>
        <h2 className="lp-section-title">Alur Pendaftaran</h2>
        <div className="lp-steps">
          {[
            { icon: <UserPlus />, title: 'Buat Akun', desc: 'Registrasi akun menggunakan email aktif.' },
            { icon: <ClipboardCheck />, title: 'Lengkapi Data', desc: 'Isi data diri dan data orang tua/wali.' },
            { icon: <UploadCloud />, title: 'Unggah Berkas', desc: 'Unggah dokumen persyaratan sesuai ketentuan.' },
            { icon: <FileSearch />, title: 'Verifikasi', desc: 'Data akan diverifikasi oleh panitia PPDB.' },
            { icon: <Megaphone />, title: 'Pengumuman', desc: 'Cek hasil seleksi melalui akun Anda.' }
          ].map((step, i) => (
            <div key={i} className="lp-step-item">
              <div className="lp-step-number">{i + 1}</div>
              <div style={{ color: 'var(--lp-primary)', marginBottom: '12px' }}>{step.icon}</div>
              <div style={{ fontWeight: '700', marginBottom: '8px' }}>{step.title}</div>
              <p style={{ fontSize: '12px', color: 'var(--lp-text)', opacity: 0.8 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Persyaratan */}
      <section className="lp-section" id="persyaratan">
        <h2 className="lp-section-title">Persyaratan Pendaftaran</h2>
        <div className="lp-grid">
          {[
            'Fotokopi Kartu Keluarga (KK)',
            'Fotokopi Akta Kelahiran',
            'Pas Foto Terbaru (3x4)',
            'Fotokopi Rapor Semester 1-5',
            'Surat Keterangan Lulus',
            'Dokumen Pendukung (Jika Ada)'
          ].map((req, i) => (
            <div key={i} className="lp-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="var(--lp-accent)" />
                <span style={{ fontWeight: '600' }}>{req}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jadwal Penting */}
      <section className="lp-section" id="jadwal" style={{ background: '#f8fafc' }}>
        <h2 className="lp-section-title">Jadwal Penting PPDB 2025/2026</h2>
        <div className="lp-grid">
          {[
            { date: '1 - 20 Mei 2025', event: 'Pendaftaran Online', icon: <UserPlus /> },
            { date: '21 - 28 Mei 2025', event: 'Verifikasi Berkas', icon: <ClipboardCheck /> },
            { date: '29 Mei - 3 Juni 2025', event: 'Seleksi', icon: <FileSearch /> },
            { date: '10 Juni 2025', event: 'Pengumuman', icon: <Megaphone /> },
            { date: '11 - 13 Juni 2025', event: 'Daftar Ulang', icon: <CheckCircle2 /> }
          ].map((item, i) => (
            <div key={i} className="lp-card" style={{ textAlign: 'center' }}>
              <div style={{ color: 'var(--lp-primary)', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{item.icon}</div>
              <div style={{ color: 'var(--lp-accent)', fontWeight: '700', fontSize: '14px', marginBottom: '8px' }}>{item.date}</div>
              <div style={{ fontWeight: '800', fontSize: '18px' }}>{item.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="lp-footer">
        <div className="lp-footer-grid">
          <div>
            <div className="lp-footer-title">SMA NEGERI 1</div>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '20px' }}>
              SMA Negeri 1 berkomitmen untuk mewujudkan pendidikan berkualitas dalam lingkungan yang inspiratif, berkarakter, dan berdaya saing global.
            </p>
          </div>
          <div>
            <div className="lp-footer-title">Tautan Cepat</div>
            <ul className="lp-footer-links">
              <li>Beranda</li>
              <li>Tentang Sekolah</li>
              <li>Informasi PPDB</li>
              <li>Persyaratan</li>
              <li>Jadwal</li>
            </ul>
          </div>
          <div>
            <div className="lp-footer-title">Informasi Kontak</div>
            <ul className="lp-footer-links">
              <li style={{ display: 'flex', gap: '8px' }}><MapPin size={16} /> Jl. Pendidikan No. 1, Kota Sejahtera</li>
              <li style={{ display: 'flex', gap: '8px' }}><Phone size={16} /> (021) 1234 5678</li>
              <li style={{ display: 'flex', gap: '8px' }}><Mail size={16} /> info@sman1.sch.id</li>
            </ul>
          </div>
          <div>
            <div className="lp-footer-title">Jam Layanan</div>
            <ul className="lp-footer-links">
              <li style={{ display: 'flex', gap: '8px' }}><Clock size={16} /> Senin - Jumat: 08.00 - 15.00 WIB</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', opacity: 0.6 }}>
          <div>© 2025 SMA Negeri 1. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Kebijakan Privasi</span>
            <span>Syarat & Ketentuan</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
