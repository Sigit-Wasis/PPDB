import React from 'react'
import { User, MapPin, Users, FileText, CheckCircle, ArrowLeft, ArrowRight, Save } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

const RegistrationForm: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const steps = [
    { id: 1, label: 'Identitas', icon: <User size={18} /> },
    { id: 2, label: 'Alamat', icon: <MapPin size={18} /> },
    { id: 3, label: 'Orang Tua', icon: <Users size={18} /> },
    { id: 4, label: 'Sekolah', icon: <FileText size={18} /> },
    { id: 5, label: 'Berkas', icon: <CheckCircle size={18} /> }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      {/* Stepper */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '48px', position: 'relative', padding: '0 40px' }}>
        <div style={{ position: 'absolute', top: '20px', left: '80px', right: '80px', height: '2px', background: '#e2e8f0', zIndex: '1' }}></div>
        <div style={{ position: 'absolute', top: '20px', left: '80px', width: `${((step - 1) / 4) * (100 - (160 / 1000 * 100))}%`, height: '2px', background: 'var(--accent)', zIndex: '1', transition: 'width 0.4s ease' }}></div>

        {steps.map((s) => (
          <div key={s.id} style={{ textAlign: 'center', flex: 1, zIndex: '2', position: 'relative' }}>
            <div style={{ width: '42px', height: '42px', background: step >= s.id ? 'var(--accent)' : 'white', color: step >= s.id ? 'white' : '#94a3b8', border: '2px solid', borderColor: step >= s.id ? 'var(--accent)' : '#e2e8f0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', boxShadow: step === s.id ? '0 0 0 4px rgba(37, 99, 235, 0.15)' : 'none', transition: 'all 0.3s' }}>
              {s.icon}
            </div>
            <span style={{ fontSize: '12px', fontWeight: step >= s.id ? '700' : '500', color: step >= s.id ? 'var(--primary)' : '#94a3b8' }}>{s.label}</span>
          </div>
        ))}
      </div>

      <Card padding="40px">
        {step === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <section>
              <h3 style={{ marginBottom: '20px', color: 'var(--accent)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}><User size={20}/> 1. Data Identitas & Kontak</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div className="form-group"><label className="label-text">NISN</label><input type="text" className="search-input" placeholder="10 digit NISN" /></div>
                <div className="form-group"><label className="label-text">Nama Lengkap</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">NIK / No. KTP</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">No. Akta Kelahiran</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Jenis Kelamin</label><select className="select-filter" style={{width:'100%'}}><option>Laki-laki</option><option>Perempuan</option></select></div>
                <div className="form-group"><label className="label-text">Agama</label><select className="select-filter" style={{width:'100%'}}><option>Islam</option><option>Kristen</option><option>Katolik</option><option>Hindu</option><option>Budha</option><option>Khonghucu</option></select></div>
                <div className="form-group"><label className="label-text">Tempat Lahir</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Tanggal Lahir</label><input type="date" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Anak Ke-</label><input type="number" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Jumlah Saudara</label><input type="number" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Kewarganegaraan</label><input type="text" className="search-input" defaultValue="WNI" /></div>
                <div className="form-group"><label className="label-text">Status Anak</label><select className="select-filter" style={{width:'100%'}}><option>Kandung</option><option>Tiri</option><option>Angkat</option></select></div>
                <div className="form-group"><label className="label-text">Tinggi Badan (cm)</label><input type="number" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Berat Badan (kg)</label><input type="number" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Golongan Darah</label><select className="select-filter" style={{width:'100%'}}><option>A</option><option>B</option><option>AB</option><option>O</option><option>Tidak Tahu</option></select></div>
                <div className="form-group"><label className="label-text">Nomor HP Siswa</label><input type="tel" className="search-input" placeholder="08..." /></div>
                <div className="form-group"><label className="label-text">Email Siswa</label><input type="email" className="search-input" /></div>
              </div>
            </section>
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <section>
              <h3 style={{ marginBottom: '20px', color: 'var(--accent)', fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={20}/> 2. Data Alamat & Bantuan Sosial</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}><label className="label-text">Alamat Lengkap</label><textarea className="search-input" style={{minHeight:'80px'}} placeholder="Nama Jalan, No Rumah"></textarea></div>
                <div className="form-group"><label className="label-text">Dusun / Lingkungan</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">RT</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">RW</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Desa / Kelurahan</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Kecamatan</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Kabupaten / Kota</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Provinsi</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Kode Pos</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Transportasi ke Sekolah</label><select className="select-filter" style={{width:'100%'}}><option>Jalan Kaki</option><option>Motor</option><option>Mobil</option><option>Angkutan Umum</option></select></div>
                <div className="form-group"><label className="label-text">Jarak ke Sekolah (km)</label><input type="number" className="search-input" /></div>
              </div>
            </section>
            <section style={{ padding: '24px', background: 'var(--bg-main)', borderRadius: '16px' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '700' }}>Integrasi Bantuan Sosial</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                <div className="form-group"><label className="label-text">Penerima KIP?</label><select className="select-filter" style={{width:'100%'}}><option>Tidak</option><option>Ya</option></select></div>
                <div className="form-group"><label className="label-text">Nomor KIP</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Penerima PKH?</label><select className="select-filter" style={{width:'100%'}}><option>Tidak</option><option>Ya</option></select></div>
                <div className="form-group"><label className="label-text">Nomor PKH</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Penerima KKS?</label><select className="select-filter" style={{width:'100%'}}><option>Tidak</option><option>Ya</option></select></div>
                <div className="form-group"><label className="label-text">Nomor KKS</label><input type="text" className="search-input" /></div>
              </div>
            </section>
          </div>
        )}

        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <section>
              <h3 style={{ marginBottom: '20px', color: 'var(--accent)', fontSize: '18px' }}>3. Data Orang Tua</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* Ayah */}
                <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '16px' }}>
                  <h4 style={{ marginBottom: '16px', fontWeight: '700', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>Data Ayah</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="form-group"><label className="label-text">Nama Ayah</label><input type="text" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">NIK Ayah</label><input type="text" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">Tahun Lahir</label><input type="number" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">Pendidikan</label><select className="select-filter" style={{width:'100%'}}><option>SD</option><option>SMP</option><option>SMA/SMK</option><option>D3/S1</option></select></div>
                    <div className="form-group"><label className="label-text">Pekerjaan</label><input type="text" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">Penghasilan</label><select className="select-filter" style={{width:'100%'}}><option>Di bawah 2jt</option><option>2jt - 5jt</option><option>Diatas 5jt</option></select></div>
                    <div className="form-group"><label className="label-text">No HP Ayah</label><input type="tel" className="search-input" /></div>
                  </div>
                </div>
                {/* Ibu */}
                <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '16px' }}>
                  <h4 style={{ marginBottom: '16px', fontWeight: '700', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>Data Ibu</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="form-group"><label className="label-text">Nama Ibu</label><input type="text" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">NIK Ibu</label><input type="text" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">Tahun Lahir</label><input type="number" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">Pendidikan</label><select className="select-filter" style={{width:'100%'}}><option>SD</option><option>SMP</option><option>SMA/SMK</option><option>D3/S1</option></select></div>
                    <div className="form-group"><label className="label-text">Pekerjaan</label><input type="text" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">Penghasilan</label><select className="select-filter" style={{width:'100%'}}><option>Di bawah 2jt</option><option>2jt - 5jt</option><option>Diatas 5jt</option></select></div>
                    <div className="form-group"><label className="label-text">No HP Ibu</label><input type="tel" className="search-input" /></div>
                  </div>
                </div>
                {/* Wali */}
                <div style={{ padding: '20px', border: '1px solid var(--border)', borderRadius: '16px' }}>
                  <h4 style={{ marginBottom: '16px', fontWeight: '700', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>Data Wali (Opsional)</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="form-group"><label className="label-text">Nama Wali</label><input type="text" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">Hubungan</label><input type="text" className="search-input" placeholder="Contoh: Paman/Kakak" /></div>
                    <div className="form-group"><label className="label-text">Pendidikan</label><select className="select-filter" style={{width:'100%'}}><option>SD</option><option>SMP</option><option>SMA/SMK</option><option>D3/S1</option></select></div>
                    <div className="form-group"><label className="label-text">Pekerjaan</label><input type="text" className="search-input" /></div>
                    <div className="form-group"><label className="label-text">No HP Wali</label><input type="tel" className="search-input" /></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {step === 4 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <section>
              <h3 style={{ marginBottom: '20px', color: 'var(--accent)', fontSize: '18px' }}>4. Data Sekolah Asal & Jurusan</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div className="form-group"><label className="label-text">Nama Sekolah Asal</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">NPSN Sekolah Asal</label><input type="text" className="search-input" /></div>
                <div className="form-group" style={{gridColumn:'1 / -1'}}><label className="label-text">Alamat Sekolah Asal</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Tahun Lulus</label><input type="number" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Nomor Ijazah</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Nomor SKHUN</label><input type="text" className="search-input" /></div>
                <div className="form-group"><label className="label-text">Nilai Rata-rata</label><input type="number" step="0.01" className="search-input" /></div>
              </div>
            </section>
            <section style={{ padding: '24px', background: 'rgba(37, 99, 235, 0.05)', borderRadius: '16px', border: '1px solid rgba(37, 99, 235, 0.1)' }}>
              <h4 style={{ marginBottom: '16px', fontWeight: '700', color: 'var(--accent)' }}>Pilihan Jurusan SMK</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group"><label className="label-text">Pilihan Jurusan 1</label><select className="select-filter" style={{width:'100%'}}><option>RPL (Rekayasa Perangkat Lunak)</option><option>TKJ (Teknik Komputer Jaringan)</option><option>AKL (Akuntansi)</option><option>BDP (Pemasaran)</option><option>OTKP (Perkantoran)</option><option>TKR (Teknik Kendaraan Ringan)</option></select></div>
                <div className="form-group"><label className="label-text">Pilihan Jurusan 2</label><select className="select-filter" style={{width:'100%'}}><option>TKJ (Teknik Komputer Jaringan)</option><option>RPL (Rekayasa Perangkat Lunak)</option><option>AKL (Akuntansi)</option><option>BDP (Pemasaran)</option><option>OTKP (Perkantoran)</option><option>TKR (Teknik Kendaraan Ringan)</option></select></div>
              </div>
            </section>
          </div>
        )}

        {step === 5 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <h3 style={{ marginBottom: '8px', color: 'var(--accent)', fontSize: '18px' }}>5. Upload Dokumen Digital</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>Pastikan dokumen terbaca dengan jelas (Format JPG/PDF, Maks 2MB)</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              {[
                {name: 'Scan KK', req: true}, {name: 'Scan Akta Lahir', req: true}, 
                {name: 'Scan Ijazah / SKL', req: true}, {name: 'Pas Foto 3x4', req: true}, 
                {name: 'Scan Rapor Sem 1-5', req: true}, {name: 'KIP / PKH / KKS', req: false}, 
                {name: 'Piagam Prestasi', req: false}
              ].map(d => (
                <div key={d.name} style={{ padding: '24px', border: '2px dashed var(--border)', textAlign: 'center', borderRadius: '16px', background: 'var(--bg-main)' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>{d.name}</div>
                  <div style={{ fontSize: '11px', color: d.req ? '#ef4444' : 'var(--text-muted)', marginBottom: '16px' }}>{d.req ? '* Wajib Diunggah' : '(Opsional)'}</div>
                  <Button variant="secondary" size="sm">Pilih File</Button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '30px' }}>
          {step > 1 ? (
            <Button variant="outline" onClick={prevStep} icon={<ArrowLeft size={18} />}>Kembali</Button>
          ) : <div />}
          
          {step < 5 ? (
            <Button onClick={nextStep}>Lanjutkan <ArrowRight size={18} /></Button>
          ) : (
            <Button variant="success" icon={<Save size={18} />} onClick={() => alert('Pendaftaran Berhasil Dikirim!')}>Simpan & Kirim Pendaftaran</Button>
          )}
        </div>
      </Card>
    </div>
  )
}

export default RegistrationForm
