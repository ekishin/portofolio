# PRD: Portfolio Website (Full-Stack Internship)

- **Tanggal:** 17 November 2026
- **Status:** Siap dibangun (Fase 1 hari ini), sebagian aset masih menyusul
- **Batas waktu:** Web harus live hari ini, 17 November 2026, karena batas lamaran Otopprentice IT / Intern (Astra Otoparts) jatuh hari ini

---

## 1. Ringkasan

Web portofolio berbahasa Inggris untuk memperkenalkan pemilik sebagai kandidat magang **full-stack developer**. Tujuan utamanya: recruiter dan tech lead menekan **Read my CV** atau menghubungi pemilik dalam 2-5 menit kunjungan.

- **Masalah:** CV satu halaman tidak cukup memperlihatkan kualitas proyek. Recruiter butuh bukti cepat (proyek, arsitektur, demo) dan jalur kontak yang jelas.
- **Solusi:** Website multi-page (Home, About, Projects, detail proyek) dengan CV yang bisa dilihat dan diunduh, serta kontak lewat email, Instagram, dan LinkedIn.
- **Satu versi untuk semua lamaran.** Proyek unggulan dipilih agar sekaligus cocok untuk lowongan Astra Otoparts yang sedang dilamar (lihat bagian 6).
- **Referensi gaya:** [ryhar.my.id](https://ryhar.my.id/). Diambil: hero dengan tombol CV dan sosmed, tech stack, kartu proyek, foto diri, gaya visual secara umum. Tidak diambil: dark mode, chatbot AI, peta lokasi, form kontak, dan struktur satu halaman panjang.

## 2. Tujuan dan metrik sukses

| Tingkat | Metrik | Target | Cara ukur |
| --- | --- | --- | --- |
| Primary (konversi) | Klik **Read my CV** dan klik kontak (email, Instagram, LinkedIn) | ≥ 25% dari pengunjung unik | Tidak diukur hari ini (tanpa analytics), arah saja |
| Engagement (kualitas konten) | Pengunjung membuka halaman detail proyek | Minimal 1-2 studi kasus per kunjungan | Tidak diukur hari ini (tanpa analytics), arah saja |
| Ultimate (dampak karier) | Undangan wawancara magang setelah link web dicantumkan di CV dan LinkedIn | Jumlah undangan, tanpa angka target | Dicatat manual |

**Keputusan:** Tanpa analytics hari ini, jadi dua metrik pertama berstatus arah, bukan angka yang diukur. Analytics ringan bisa ditambahkan di Fase 3 bila angkanya diinginkan (cek dulu apakah paket gratis Vercel mendukung pelacakan klik tombol).

## 3. Pengunjung

Dua tipe pengunjung, keduanya membaca cepat (2-5 menit) dan kemungkinan besar dari ponsel atau laptop.

| Pengunjung | Yang dicari | Yang harus ketemu dalam menit pertama |
| --- | --- | --- |
| Recruiter / HRD | Kandidat cocok untuk posisi, kontak, CV | Headline "Aspiring Full-Stack Developer", badge ketersediaan magang, tombol **Read my CV**, kontak |
| Tech lead | Bukti kemampuan teknis nyata | Proyek unggulan, tech stack, arsitektur sistem, demo atau repo yang bisa dibuka |

Konsekuensi desain: Home harus bisa dipahami tanpa scroll jauh, dan 4 proyek unggulan harus terlihat di Home tanpa klik tambahan.

## 4. Ruang lingkup

| Fase | Isi | Status |
| --- | --- | --- |
| 1. Live hari ini | Home, About (bio, experience, achievements, skills dan tech stack), Projects (daftar), CV view + download, kontak di footer semua halaman, badge ketersediaan, deploy di Vercel | Wajib |
| 2. Segera setelah live | Halaman detail untuk 4 proyek unggulan (masalah, solusi, peran, tech stack, arsitektur, mockup UI, hasil, link demo) | Wajib, boleh menyusul beberapa jam |
| 3. Menyusul | Halaman detail untuk 8 proyek lain, bukti foto achievements lengkap, analytics ringan (opsional) | Opsional |

**Di luar ruang lingkup:** dark mode, chatbot AI, peta lokasi, form kontak, kontak selain email/Instagram/LinkedIn, SEO, analytics (hari ini), CMS.

**Rekomendasi:** jangan membuat 12 halaman detail hari ini. Di halaman Projects, proyek tanpa halaman detail tampil sebagai kartu dengan link demo atau repo.

## 5. Halaman dan kebutuhan fungsional

Navigasi tetap di atas: Home, About, Projects, dan tombol **Read my CV**. Kontak ada di footer setiap halaman.

| Halaman | Tujuan | Isi utama | CTA utama |
| --- | --- | --- | --- |
| Home (`/`) | Merangkum semuanya dalam satu layar | Foto, headline "Aspiring Full-Stack Developer", badge "Available for internship · January 2027", ringkasan singkat, 4 proyek unggulan, cuplikan tech stack | Read my CV, View all projects |
| About (`/about`) | Siapa pemilik dan bukti pengalaman | Who Am I, My Approach, What I'm Looking For, pendidikan dan bahasa, experience (timeline, terbaru dulu), 3 achievements unggulan dengan bukti foto plus tombol "View all certificates" (galeri 11 sertifikat), skills dikelompokkan per kategori | Read my CV |
| Projects (`/projects`) | Katalog semua proyek | Kartu 12 proyek (gambar, judul, satu kalimat, tech stack), 4 proyek unggulan di atas | Buka detail atau demo |
| Project Detail (`/projects/[slug]`) | Meyakinkan tech lead | Masalah, solusi, peran, tech stack, arsitektur sistem, mockup UI, hasil, link demo dan repo | Live demo, kembali ke Projects |
| CV (`/cv`) | Melihat dan mengunduh CV | Tampilan PDF di halaman, tombol Download | Download CV |
| Footer kontak (semua halaman) | Jalur hubungi | Email, Instagram, LinkedIn | Klik kontak |

**Aturan khusus:**

- Badge ketersediaan ada di hero Home dan diulang di footer. Isinya status dan periode saja: **"Available for internship · January 2027"**. Lokasi dan remote tidak dicantumkan.
- Link email memakai `mailto:`. Instagram dan LinkedIn dibuka di tab baru.
- Proyek unggulan ditandai di data (`featured: true`).
- Tombol Download CV selalu tampil, walau tampilan PDF di ponsel gagal.
- Halaman atau proyek yang belum siap disembunyikan dari navigasi, bukan dibiarkan kosong.

## 6. Konten dan data terpusat

Semua teks, proyek, experience, dan achievements disimpan di satu file `portfolioData.js` di repository. Mengubah konten tidak perlu menyentuh komponen halaman.

```js
export const profile = {
  name, headline, tagline, photo, cvUrl,
  availability: { status, period },
  education: { school, program, level, graduation },
  languages: [{ name, level }],
  heroBio, whoAmI, approach, lookingFor
};
export const contacts = { email, instagram, linkedin };
export const experience = [{ role, org, period, description }];
export const achievements = [{ title, description, proofImage, featured }];  // 3 unggulan
export const certificates = [{ name, role, category, image }];               // galeri 11 sertifikat
export const skills = { frontend: [], backend: [], database: [], mobileAndGame: [], dataAndGis: [], designAndTools: [] };
export const projects = [{
  slug, title, summary, role, featured, order,
  problem, solution, techStack: [], architectureImage,
  mockups: [], results, demoUrl, repoUrl
}];
```

### Proyek unggulan (4 dari 12)

Dipilih satu per bidang yang disebut di lowongan Astra Otoparts (API, dashboard, AR/VR dan 3D, Flutter), sekaligus memperlihatkan kemampuan full-stack.

| Proyek | Bidang | Relevansi |
| --- | --- | --- |
| FamsPay | API / backend | Pengembangan API |
| Green Dashboard | Data analis / dashboard | Pembuatan dashboard |
| Technoplay | Unity | Pengembangan aplikasi Unity dan 3D |
| Jaga Senja | Flutter | Aplikasi mobile Flutter |

Usulan urutan di Home: FamsPay, Green Dashboard, Technoplay, Jaga Senja (API dan dashboard dulu karena target utama adalah full-stack). Urutan akhir ada di pemilik web.

### Aset yang masih menyusul dari pemilik

- [ ] Foto diri
- [ ] CV PDF final
- [ ] Link demo setiap proyek
- [ ] Screenshot, mockup UI, dan diagram arsitektur untuk 4 proyek unggulan
- [ ] Gambar 3 achievements unggulan, masing-masing satu file
- [ ] Gambar 11 sertifikat, masing-masing satu file terpisah (bukan satu screenshot berisi banyak sertifikat)
- [ ] Tugas di tiap peran organisasi dan periode social project
- [ ] Penjelasan proyek Boysan dan SIMDIK (kegunaan, pengguna, periode, tugas sebagai system analyst)
- [ ] Foto kegiatan organisasi (opsional)
- [ ] Alamat email, username Instagram, URL LinkedIn

## 7. Kebutuhan non-fungsional

| Aspek | Kebutuhan | Catatan |
| --- | --- | --- |
| Bahasa | Seluruh konten dalam bahasa Inggris | Tanpa tombol ganti bahasa |
| Gaya visual | Mirip [ryhar.my.id](https://ryhar.my.id/): hero dengan foto, kartu proyek, bagian tech stack berikon, tanpa dark mode | Terang saja |
| Responsif | Nyaman di ponsel, tablet, dan laptop, tanpa scroll horizontal | Banyak recruiter membuka dari ponsel |
| Kecepatan | Skor Lighthouse Performance ≥ 90 di mobile (target usulan) | Gambar dioptimalkan, animasi ringan |
| Keterbacaan | Kontras teks cukup, ukuran font nyaman, tombol mudah ditekan | |
| Aksesibilitas dasar | Teks alternatif di gambar, navigasi bisa dengan keyboard | |
| Keandalan | Semua link (demo, repo, CV, kontak) dicek sebelum dipublikasikan | Link mati merusak kesan pertama |
| Pemeliharaan | Konten diubah lewat `portfolioData.js` saja | Tanpa CMS |

## 8. Tech stack dan deployment

**Rekomendasi: Next.js (App Router) + Tailwind CSS, data dari `portfolioData.js`, deploy di Vercel (subdomain gratis `*.vercel.app`).**

| Kebutuhan | Pilihan | Alasan |
| --- | --- | --- |
| Framework | Next.js | Multi-page dan halaman detail dinamis `/projects/[slug]` dari satu file data |
| Styling | Tailwind CSS | Cepat dan konsisten untuk target hari ini |
| Data | `portfolioData.js` | Tanpa backend dan database |
| CV | PDF statis di `/public` + tampilan di halaman + tombol Download | Tidak butuh backend |
| Hosting dan domain | Vercel gratis, deploy otomatis dari GitHub, subdomain `*.vercel.app` | Keputusan pemilik |

Stack lain (Laravel, FastAPI, PostgreSQL, Unity, Flutter, dan seterusnya) tampil sebagai **skills dan tech stack di tiap proyek**, bukan sebagai teknologi yang menjalankan web ini.

## 9. Urutan kerja hari ini dan checklist peluncuran

1. Siapkan repo GitHub, scaffold Next.js + Tailwind, lalu deploy kerangka kosong ke Vercel (URL sudah hidup).
2. Isi `portfolioData.js` dengan profil, kontak, experience, achievements, skills, dan data 4 proyek unggulan (pakai placeholder untuk aset yang belum ada).
3. Bangun layout bersama: navbar, footer kontak, badge ketersediaan.
4. Bangun Home, About, dan Projects dari data.
5. Tambahkan CV (tampilan + tombol Download).
6. Bangun template Project Detail dan isi untuk 4 proyek unggulan.
7. Uji di ponsel dan laptop, cek semua link, lalu push ke produksi.
8. Cantumkan URL web di CV dan LinkedIn, baru kirim lamaran.

**Checklist sebelum link dicantumkan di CV:**

- [ ] Semua halaman terbuka tanpa error di ponsel dan laptop
- [ ] Tombol Read my CV dan Download berfungsi
- [ ] Link email, Instagram, LinkedIn benar
- [ ] Link demo dan repo proyek unggulan terbuka
- [ ] Tidak ada teks placeholder atau gambar rusak
- [ ] Badge menampilkan "January 2027"
- [ ] URL produksi sudah dicoba dari perangkat atau jaringan lain

## 10. Keputusan, risiko, dan open questions

### Sudah diputuskan

- Multi-page: Home, About (experience dan achievements digabung), Projects, dan halaman detail per proyek (bukan modal).
- Gaya visual mirip web referensi, tema terang saja.
- Bahasa Inggris. Hosting Vercel gratis dengan subdomain bawaan.
- Tanpa analytics, SEO, dark mode, chatbot AI, peta, form kontak, dan CMS.
- Kontak hanya email, Instagram, LinkedIn.
- Badge: status dan periode "January 2027", tanpa lokasi atau remote.
- Satu versi web untuk semua lamaran, termasuk lamaran Astra Otoparts saat ini.
- Proyek unggulan: FamsPay, Green Dashboard, Technoplay, Jaga Senja.
- Headline: "Aspiring Full-Stack Developer" (lebih jujur terhadap isi portofolio).
- Pendidikan ditulis "third-year student" dengan perkiraan lulus Juni 2028, tanpa nomor semester agar tetap benar di Januari 2027.
- Bahasa: Indonesian (Native), English (Intermediate).
- Gaya tulisan: santai seperti referensi, bahasa Inggris dengan tata bahasa yang baik.
- Achievements: 3 unggulan (Smart Data Accounting Competition 2026 Finalist, HAKI TechnoPlay No. 001297799, Google Certified Student for Gemini) plus galeri 11 sertifikat.
- TechnoPlay ditulis sebagai kekayaan intelektual terdaftar (HAKI), bukan aplikasi yang sudah dipublikasikan.

### Masih terbuka

- [ ] **Pratinjau saat link dibagikan.** Judul, deskripsi singkat, dan gambar pratinjau agar link di LinkedIn terlihat rapi. Murah dibuat walau SEO tidak dibutuhkan. Dimasukkan atau tidak?
- [ ] **Aset dan detail kontak.** Menyusul dari pemilik (lihat daftar di bagian 6).
- [ ] **Terjemahan "Sekben".** Ditulis Secretary-Treasurer. Perlu dikonfirmasi.
- [ ] **Nama lengkap organisasi** (KMHD IPB, KMHDI, SITE TPL 62) dan deskripsi tugas di tiap peran, saat ini masih "TODO" di data.
- [ ] **Skills inti.** 6-8 skill yang paling dikuasai, untuk ditandai "Core".

### Risiko

| Risiko | Dampak | Mitigasi |
| --- | --- | --- |
| Waktu sangat sempit (live hari ini) | Web belum lengkap saat lamaran dikirim | Kerjakan Fase 1 dulu, detail proyek menyusul, halaman belum siap disembunyikan |
| 12 halaman detail terlalu banyak | Kualitas turun, batas waktu terlewat | Detail hanya untuk 4 proyek unggulan |
| Aset belum lengkap (screenshot, demo, bukti foto) | Halaman terlihat kosong | Pakai placeholder, kumpulkan aset proyek unggulan lebih dulu |
| Target 25% tanpa data pembanding dan tanpa pengukuran | Tidak bisa dipastikan tercapai | Anggap sebagai arah, bukan syarat lolos |
| Tampilan PDF CV sering gagal di ponsel | Recruiter tidak bisa melihat CV | Tombol Download selalu tampil |
