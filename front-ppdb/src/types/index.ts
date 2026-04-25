export interface Student {
  id: number;
  regNumber: string;
  name: string;
  gender: string;
  school: string;
  date: string;
  score: string;
  status: 'MENUNGGU' | 'TERVERIFIKASI' | 'DITOLAK' | 'DITERIMA';
}

export const mockStudents: Student[] = [
  { id: 1, regNumber: 'REG-2024-0001', name: 'Ahmad Rizky', gender: 'Laki-laki', school: 'SMPN 1 Jakarta', date: '20 Jun 2024', score: '88.50', status: 'MENUNGGU' },
  { id: 2, regNumber: 'REG-2024-0002', name: 'Siti Aminah', gender: 'Perempuan', school: 'MTS Al-Ikhlas', date: '21 Jun 2024', score: '90.25', status: 'TERVERIFIKASI' },
  { id: 3, regNumber: 'REG-2024-0003', name: 'Budi Santoso', gender: 'Laki-laki', school: 'SMPN 3 Bandung', date: '19 Jun 2024', score: '75.00', status: 'DITOLAK' },
  { id: 4, regNumber: 'REG-2024-0004', name: 'Dewi Kartika', gender: 'Perempuan', school: 'SMP Islam Terpadu', date: '22 Jun 2024', score: '92.10', status: 'DITERIMA' },
];
