import React from 'react'
import { FileText, Download, Eye } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const MyDocuments: React.FC = () => {
  const documents = [
    { id: 1, name: 'Kartu Keluarga', type: 'PDF', date: '22 April 2026', size: '1.2 MB', status: 'verified' },
    { id: 2, name: 'Akta Kelahiran', type: 'JPG', date: '22 April 2026', size: '850 KB', status: 'verified' },
    { id: 3, name: 'Ijazah SMP / SKL', type: 'PDF', date: '23 April 2026', size: '2.1 MB', status: 'pending' },
    { id: 4, name: 'Pas Foto 3x4', type: 'JPG', date: '23 April 2026', size: '450 KB', status: 'verified' },
    { id: 5, name: 'Rapor Semester 1-5', type: 'PDF', date: '23 April 2026', size: '4.5 MB', status: 'pending' },
    { id: 6, name: 'Sertifikat Lomba OSN', type: 'PDF', date: '24 April 2026', size: '1.5 MB', status: 'rejected' },
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '4px' }}>Arsip Dokumen Digital</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Daftar seluruh berkas pendaftaran yang telah Anda unggah ke sistem.</p>
        </div>
        <Button variant="outline" icon={<Download size={18} />}>Unduh Semua (ZIP)</Button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {documents.map((doc) => (
          <Card key={doc.id} padding="0">
            <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid var(--border)' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: doc.type === 'PDF' ? '#fee2e2' : '#e0e7ff', 
                color: doc.type === 'PDF' ? '#ef4444' : '#4f46e5',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: '12px'
              }}>
                {doc.type}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '2px' }}>{doc.name}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{doc.size} • Diunggah {doc.date}</p>
              </div>
              <div style={{ 
                padding: '4px 10px', 
                borderRadius: '20px', 
                fontSize: '11px', 
                fontWeight: '700',
                background: doc.status === 'verified' ? '#dcfce7' : doc.status === 'rejected' ? '#fee2e2' : '#fef9c3',
                color: doc.status === 'verified' ? '#16a34a' : doc.status === 'rejected' ? '#ef4444' : '#a16207'
              }}>
                {doc.status === 'verified' ? 'Terverifikasi' : doc.status === 'rejected' ? 'Ditolak' : 'Proses'}
              </div>
            </div>
            <div style={{ padding: '12px 20px', background: '#f8fafc', display: 'flex', gap: '10px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}>
              <Button variant="outline" size="sm" fullWidth icon={<Eye size={14} />}>Lihat</Button>
              <Button variant="outline" size="sm" fullWidth icon={<Download size={14} />}>Unduh</Button>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: '32px', padding: '24px', background: 'white', borderRadius: '20px', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{ padding: '12px', background: '#eff6ff', color: '#2563eb', borderRadius: '12px' }}>
          <FileText size={24} />
        </div>
        <div>
          <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Butuh bantuan terkait dokumen?</h4>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            Jika terdapat kesalahan unggah atau dokumen ditolak oleh admin, Anda dapat melakukan unggah ulang melalui menu <strong>Data Pendaftaran</strong> pada tahap akhir.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MyDocuments
