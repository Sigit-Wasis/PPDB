import React from 'react'
import { CheckCircle } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const AnnouncementView: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', textAlign: 'center' }}>
      {/* Section: Hasil Seleksi */}
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <Card style={{ 
          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)', 
          color: 'white', 
          border: 'none',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Decorative elements */}
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '-40px', left: '-20px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>

          <div style={{ position: 'relative', zIndex: 1, padding: '20px 0' }}>
            <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 0 20px rgba(0,0,0,0.1)' }}>
              <CheckCircle size={48} />
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>SELAMAT! ANDA LULUS</h2>
            <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px', maxWidth: '500px', margin: '0 auto' }}>
              Berdasarkan hasil seleksi administrasi dan akademik, Anda dinyatakan **DITERIMA** di SMA Negeri 1 Jakarta.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '16px', marginBottom: '32px' }}>
              <div>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>No. Pendaftaran</div>
                <div style={{ fontSize: '18px', fontWeight: '700' }}>PPDB-2026-0422</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>Jalur Seleksi</div>
                <div style={{ fontSize: '18px', fontWeight: '700' }}>Zonasi Radius</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', opacity: 0.8 }}>Peringkat</div>
                <div style={{ fontSize: '18px', fontWeight: '700' }}>12 dari 120</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <Button variant="outline" style={{ background: 'white', color: '#059669', border: 'none' }}>
                Unduh Surat Kelulusan
              </Button>
              <Button variant="outline" style={{ borderColor: 'white', color: 'white' }}>
                Panduan Daftar Ulang
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Section: Countdown */}
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-muted)' }}>Waktu Tersisa Untuk Daftar Ulang</h3>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          {[
            { label: 'HARI', val: '02' },
            { label: 'JAM', val: '14' },
            { label: 'MENIT', val: '45' },
            { label: 'DETIK', val: '12' }
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ width: '80px', height: '80px', background: 'white', border: '1px solid var(--border)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '800', color: 'var(--primary)', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                {t.val}
              </div>
              <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '1px' }}>{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '20px', borderRadius: '12px', background: '#fffbeb', border: '1px solid #fde68a', color: '#92400e', fontSize: '14px', maxWidth: '600px' }}>
        <strong>Penting:</strong> Batas akhir pendaftaran ulang adalah tanggal 30 April 2026. Harap segera melengkapi berkas fisik di sekolah.
      </div>
    </div>
  )
}

export default AnnouncementView
