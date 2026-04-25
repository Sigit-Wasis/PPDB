import React from 'react'
import { CheckCircle, XCircle, Search, FileCheck, Eye } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

interface VerificationStudent {
  id: number;
  name: string;
  docs: {
    ijazah: boolean;
    kk: boolean;
    akta: boolean;
    skhun: boolean;
  };
  status: 'BELUM LENGKAP' | 'LENGKAP' | 'TERVERIFIKASI';
}

const Verification: React.FC = () => {
  const [students, setStudents] = React.useState<VerificationStudent[]>([
    { id: 1, name: 'Ahmad Rizky', docs: { ijazah: true, kk: true, akta: true, skhun: true }, status: 'LENGKAP' },
    { id: 2, name: 'Siti Aminah', docs: { ijazah: false, kk: true, akta: true, skhun: true }, status: 'BELUM LENGKAP' },
    { id: 3, name: 'Budi Santoso', docs: { ijazah: true, kk: true, akta: true, skhun: false }, status: 'BELUM LENGKAP' },
    { id: 4, name: 'Dewi Kartika', docs: { ijazah: true, kk: true, akta: true, skhun: true }, status: 'LENGKAP' },
  ]);

  const [showToast, setShowToast] = React.useState(false);
  const [viewingStudent, setViewingStudent] = React.useState<VerificationStudent | null>(null);

  const handleVerify = (id: number) => {
    setStudents(prev => prev.map(student => {
      if (student.id === id) {
        return { ...student, status: 'TERVERIFIKASI' };
      }
      return student;
    }));

    setShowToast(true);
    setViewingStudent(null);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Toast Notification */}
      {showToast && (
        <div style={{ position: 'fixed', top: '24px', right: '24px', background: '#16a34a', color: 'white', padding: '16px 24px', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '12px', animation: 'slideIn 0.3s ease-out' }}>
          <CheckCircle size={20} />
          <span style={{ fontWeight: '600' }}>Berkas Berhasil Diverifikasi!</span>
        </div>
      )}

      <div className="actions-bar">
        <div className="search-container">
          <Search className="search-icon" size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input type="text" className="search-input" placeholder="Cari nama siswa..." style={{ paddingLeft: '40px' }} />
        </div>
        <select className="select-filter">
          <option>Semua Kelengkapan</option>
          <option>Lengkap</option>
          <option>Belum Lengkap</option>
        </select>
        <Button variant="secondary" icon={<FileCheck size={18} />}>Cek Massal</Button>
      </div>

      <Card noPadding>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Siswa</th>
              <th>Ijazah</th>
              <th>KK</th>
              <th>Akta</th>
              <th>SKHUN</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                <td>
                  <div style={{ fontWeight: '600' }}>{student.name}</div>
                </td>
                <td style={{ textAlign: 'center' }}>{student.docs.ijazah ? '✅' : '❌'}</td>
                <td style={{ textAlign: 'center' }}>{student.docs.kk ? '✅' : '❌'}</td>
                <td style={{ textAlign: 'center' }}>{student.docs.akta ? '✅' : '❌'}</td>
                <td style={{ textAlign: 'center' }}>{student.docs.skhun ? '✅' : '❌'}</td>
                <td>
                  <span className={`badge ${
                    student.status === 'TERVERIFIKASI' ? 'badge-accepted' : 
                    student.status === 'LENGKAP' ? 'badge-verified' : 'badge-pending'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="outline" size="sm" icon={<Eye size={14} />} onClick={() => setViewingStudent(student)}>Cek</Button>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      disabled={student.status === 'TERVERIFIKASI' || student.status === 'BELUM LENGKAP'}
                      onClick={() => handleVerify(student.id)}
                      style={{ 
                        opacity: (student.status === 'TERVERIFIKASI' || student.status === 'BELUM LENGKAP') ? 0.5 : 1,
                        cursor: (student.status === 'TERVERIFIKASI' || student.status === 'BELUM LENGKAP') ? 'not-allowed' : 'pointer'
                      }}
                    >
                      {student.status === 'TERVERIFIKASI' ? 'Sudah Verifikasi' : 'Verifikasi'}
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* DOCUMENT PREVIEW MODAL */}
      {viewingStudent && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '600px', textAlign: 'left' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800' }}>Pratinjau Berkas: {viewingStudent.name}</h3>
              <button onClick={() => setViewingStudent(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                <XCircle size={24} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'Ijazah / SKL', status: viewingStudent.docs.ijazah },
                { name: 'Kartu Keluarga', status: viewingStudent.docs.kk },
                { name: 'Akta Kelahiran', status: viewingStudent.docs.akta },
                { name: 'SKHUN / Nilai Rapor', status: viewingStudent.docs.skhun },
              ].map((doc, i) => (
                <div key={i} style={{ padding: '16px', background: 'var(--bg-main)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                      <FileCheck size={20} />
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', fontSize: '14px' }}>{doc.name}</div>
                      <div style={{ fontSize: '12px', color: doc.status ? '#16a34a' : '#ef4444' }}>{doc.status ? 'Berkas Terlampir' : 'Berkas Kosong'}</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Lihat Berkas</Button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
              <Button variant="secondary" fullWidth onClick={() => setViewingStudent(null)}>Tutup</Button>
              <Button 
                variant="primary" 
                fullWidth 
                disabled={viewingStudent.status === 'TERVERIFIKASI' || viewingStudent.status === 'BELUM LENGKAP'}
                onClick={() => handleVerify(viewingStudent.id)}
              >
                Verifikasi Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default Verification
