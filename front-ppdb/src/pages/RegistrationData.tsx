import React from 'react'
import { 
  Search, 
  Filter, 
  Eye, 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Download,
  User,
  Users,
  FileText,
  MapPin
} from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

interface Student {
  id: string;
  name: string;
  nisn: string;
  gender: string;
  path: string;
  status: 'pending' | 'verified' | 'rejected' | 'accepted';
  date: string;
}

const students: Student[] = [
  { id: '1', name: 'Budi Santoso', nisn: '0098765432', gender: 'Laki-laki', path: 'Zonasi', status: 'pending', date: '20 Apr 2026' },
  { id: '2', name: 'Siti Aminah', nisn: '0012345678', gender: 'Perempuan', path: 'Prestasi', status: 'verified', date: '19 Apr 2026' },
  { id: '3', name: 'Rian Hidayat', nisn: '0087654321', gender: 'Laki-laki', path: 'Afirmasi', status: 'rejected', date: '18 Apr 2026' },
  { id: '4', name: 'Dewi Lestari', nisn: '0023456789', gender: 'Perempuan', path: 'Zonasi', status: 'accepted', date: '17 Apr 2026' },
  { id: '5', name: 'Eko Prasetyo', nisn: '0076543210', gender: 'Laki-laki', path: 'Prestasi', status: 'pending', date: '16 Apr 2026' },
];

const RegistrationData = () => {
  const [selectedStudent, setSelectedStudent] = React.useState<Student | null>(null);

  if (selectedStudent) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <Button variant="outline" size="sm" onClick={() => setSelectedStudent(null)} icon={<ArrowLeft size={16} />}>
            Kembali ke Daftar
          </Button>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px' }}>
            <Button variant="danger" outline icon={<XCircle size={18} />}>Tolak</Button>
            <Button variant="success" icon={<CheckCircle size={18} />}>Verifikasi & Terima</Button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '24px', alignItems: 'start' }}>
          {/* Sidebar Detail */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Card noPadding>
              <div style={{ padding: '32px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: '800', margin: '0 auto 16px' }}>
                  {selectedStudent.name.charAt(0)}
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '4px' }}>{selectedStudent.name}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>NISN: {selectedStudent.nisn}</p>
                <span className={`badge badge-${selectedStudent.status}`}>{selectedStudent.status}</span>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Jalur</span>
                  <span style={{ fontWeight: '600' }}>{selectedStudent.path}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Jenis Kelamin</span>
                  <span style={{ fontWeight: '600' }}>{selectedStudent.gender}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Tgl Daftar</span>
                  <span style={{ fontWeight: '600' }}>{selectedStudent.date}</span>
                </div>
              </div>
            </Card>

            <Card title="Dokumen Unggahan">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Kartu Keluarga', 'Akta Kelahiran', 'Ijazah / SKL'].map((doc) => (
                  <div key={doc} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', background: 'var(--bg-main)', borderRadius: '8px', fontSize: '13px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileText size={16} color="var(--text-muted)" />
                      <span>{doc}</span>
                    </div>
                    <Download size={16} style={{ cursor: 'pointer', color: 'var(--accent)' }} />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Detail Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Card title="Informasi Pribadi" icon={<User size={20} />}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>NIK</label>
                  <div style={{ fontWeight: '600' }}>3201234567890001</div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Tempat, Tgl Lahir</label>
                  <div style={{ fontWeight: '600' }}>Jakarta, 12 Mei 2011</div>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Alamat Lengkap</label>
                  <div style={{ fontWeight: '600', lineHeight: '1.6' }}>Jl. Kenanga No. 45, RT 04 RW 02, Kec. Kebayoran Baru, Jakarta Selatan</div>
                </div>
              </div>
            </Card>

            <Card title="Data Orang Tua" icon={<Users size={20} />}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Nama Ayah</label>
                  <div style={{ fontWeight: '600' }}>Herman Santoso</div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Pekerjaan Ayah</label>
                  <div style={{ fontWeight: '600' }}>Wiraswasta</div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Nama Ibu</label>
                  <div style={{ fontWeight: '600' }}>Siti Rohana</div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Pekerjaan Ibu</label>
                  <div style={{ fontWeight: '600' }}>Ibu Rumah Tangga</div>
                </div>
              </div>
            </Card>

            <Card title="Data Akademik & Jalur" icon={<FileText size={20} />}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Asal Sekolah</label>
                  <div style={{ fontWeight: '600' }}>SMP Negeri 1 Jakarta</div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Rata-rata Nilai Rapor</label>
                  <div style={{ fontWeight: '600' }}>89.50</div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Jalur Pendaftaran</label>
                  <div style={{ fontWeight: '600', color: 'var(--accent)' }}>Zonasi Radius</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="actions-bar">
        <div className="search-container">
          <Search className="search-icon" size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input type="text" className="search-input" placeholder="Cari nama atau NISN..." style={{ paddingLeft: '40px' }} />
        </div>
        
        <select className="select-filter">
          <option value="">Semua Jalur</option>
          <option value="zonasi">Zonasi</option>
          <option value="prestasi">Prestasi</option>
          <option value="afirmasi">Afirmasi</option>
        </select>

        <select className="select-filter">
          <option value="">Semua Status</option>
          <option value="pending">Pending</option>
          <option value="verified">Verified</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
        
        <Button variant="secondary" icon={<Filter size={18} />}>Filter</Button>
      </div>

      <Card noPadding>
        <table>
          <thead>
            <tr>
              <th>Nama Siswa</th>
              <th>NISN</th>
              <th>Jalur</th>
              <th>Status</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="student-info">
                    <span className="student-name">{student.name}</span>
                    <span className="student-gender">{student.gender}</span>
                  </div>
                </td>
                <td>{student.nisn}</td>
                <td>{student.path}</td>
                <td>
                  <span className={`badge badge-${student.status}`}>{student.status}</span>
                </td>
                <td>{student.date}</td>
                <td>
                  <Button variant="outline" size="sm" icon={<Eye size={16} />} onClick={() => setSelectedStudent(student)}>
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="pagination">
          <span className="page-info">Menampilkan 1 - 5 dari 128 pendaftar</span>
          <button className="page-btn">1</button>
          <button className="page-btn active">2</button>
          <button className="page-btn">3</button>
          <span style={{ color: 'var(--text-muted)' }}>...</span>
          <button className="page-btn">26</button>
        </div>
      </Card>
    </div>
  )
}

export default RegistrationData
