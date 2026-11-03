# ServiConnect: Platform Ekosistem Service Agent Terintegrasi

## Latar Belakang & Alasan Pemilihan Proyek
Di era mobilitas dan digitalisasi saat ini, kebutuhan akan **Service Agent** (penyedia jasa/keahlian) sangat dibutuhkan di berbagai bidang—mulai dari perbaikan rumah, IT & desain, hingga tutor privat. Namun, pasar penyedia jasa saat ini masih sangat terfragmentasi. Membangun platform khusus yang menjembatani klien dengan penyedia jasa secara profesional adalah solusi krusial untuk menciptakan ekosistem *gig economy* yang aman, terpercaya, dan terstruktur.

## Masalah Utama (Problem Statement)
1. **Pencarian yang Terpecah (Fragmented Search):** Masyarakat sering kesulitan menemukan teknisi atau *freelancer* yang dapat dipercaya dengan cepat karena masih mengandalkan grup WhatsApp, Facebook, atau rekomendasi dari mulut ke mulut.
2. **Ketidakjelasan Harga & Standar:** Kurangnya transparansi tarif dan detail layanan sering memicu keraguan atau konflik harga di akhir pekerjaan.
3. **Krisis Kepercayaan & Keamanan:** Klien sulit memvalidasi keahlian penyedia jasa (ketiadaan portofolio/ulasan terpusat), dan sebaliknya, penyedia jasa sering menghadapi risiko klien fiktif atau gagal bayar.

## Target Pengguna
1. **Pencari Jasa (Klien / Konsumen):** Individu, rumah tangga, atau UMKM yang membutuhkan solusi/jasa cepat, spesifik, dan berkualitas.
2. **Penyedia Jasa (Service Agent / Mitra Pro):** Pekerja lepas (*freelancer*), teknisi, desainer, dan profesional independen yang ingin mengelola pesanan, memperluas jangkauan klien, dan membangun reputasi digital.

## Kebutuhan Pengguna (User Needs)
Berikut adalah minimal 5 kebutuhan utama dari target pengguna:
1. **Pencarian Cerdas & Spesifik:** Pengguna butuh mencari jasa berdasarkan lokasi terdekat, rating, dan ketersediaan waktu.
2. **Validasi Kredibilitas:** Pengguna butuh melihat portofolio visual, *badge* verifikasi, dan ulasan klien sebelumnya untuk membangun rasa percaya.
3. **Manajemen Proyek & Pendapatan:** *Service Agent* butuh *dashboard* khusus untuk memantau pesanan aktif, jadwal tenggat waktu, dan ringkasan pendapatan.
4. **Sistem *Bidding* (Permintaan Khusus):** Klien butuh menyiarkan masalah khusus (contoh: Pipa bocor malam hari) agar para penyedia jasa bisa langsung memberikan penawaran harga (*bidding*).
5. **Komunikasi yang Terkendali:** Kedua belah pihak butuh ruang *chat* terintegrasi di dalam aplikasi untuk bernegosiasi dan mengirim pembaruan proyek tanpa membagikan nomor pribadi.

## Pemetaan Kebutuhan ke Layar & Komponen
| Kebutuhan Pengguna | Layar (*Screen*) Terkait | Komponen UI Utama |
| :--- | :--- | :--- |
| **Pencarian Cerdas** | `explore.tsx` (Eksplor) | *Search Bar*, *Horizontal Scroll Filter Chips* (Terdekat, Rating 4.8+), *Grid* Kategori Populer. |
| **Validasi Kredibilitas** | `profile.tsx` (Profil) | *Avatar* Profil, *Badge* "Mitra Pro Terverifikasi", *Tabs* Portofolio & Ulasan, Status *Online/Off*. |
| **Manajemen Proyek** | `dashboard.tsx` (Beranda) | *Balance Card* (Saldo), *Stats Strip* (Total Proyek), *Urgent Order Spotlight* (Pesanan Mendesak), *Toggle* Terima Pesanan. |
| **Sistem *Bidding*** | `explore.tsx` (Eksplor) | Daftar *Card* "Permintaan Jasa Terbaru", Label *Budget*, Tombol "Kirim Penawaran". |
| **Komunikasi** | `feed.tsx` (Pesan/Chat) | Daftar Pesan Masuk, *Bubble Chat* Negosiasi, Indikator Notifikasi pada Header. |

##  Alasan Keputusan Desain (Design Rationale)
1. **Arsitektur Expo Router (Bottom Tabs):** Penggunaan *Route Groups* `(tabs)` dipilih agar baris navigasi bawah dirender sekali oleh sistem. Ini memastikan transisi perpindahan antar-layar (Beranda ↔ Profil) terjadi secara instan tanpa layar berkedip, memberikan pengalaman *native* yang mulus.
2. **Pendekatan *Card-Based UI*:** Mengingat tingginya kepadatan informasi (harga, lokasi, deskripsi, ulasan), desain dibungkus ke dalam kartu-kartu (*cards*) dengan *shadow* lembut dan sudut membulat (*rounded-xl*). Ini mencegah *cognitive overload* dan menjaga antarmuka tetap bersih.
3. **Warna Psikologis (Indigo & Teal):** Penggunaan warna utama *Indigo/Blue* (`#3525cd`) merepresentasikan kepercayaan, profesionalisme, dan teknologi. Warna sekunder hijau/teal (`#00687a` & `#005338`) digunakan pada elemen "Verifikasi" dan "Keberhasilan" untuk memberikan rasa aman.
4. **Indikator Ketersediaan (*Availability Toggle*):** Menempatkan tombol *toggle* "Terima Pesanan/Istirahat" secara menonjol di *Dashboard* dan *Profil* sangat krusial bagi pekerja lepas untuk mengatur batas waktu kerja (*work-life balance*).

## Rencana Pengembangan (Development Plan)
Pengembangan aplikasi ini dibagi menjadi beberapa fase (*Milestones*):
* **Fase 1: Slicing UI & Navigasi Dasar (Saat Ini)** 
  Konversi desain antarmuka ke React Native dengan NativeWind (Tailwind CSS) dan implementasi *routing* dasar (Expo Router).
* **Fase 2: Integrasi Autentikasi & State Management** 
  Menambahkan sistem Login/Daftar (Google/Apple Auth) dan manajemen status global menggunakan Redux atau Zustand.
* **Fase 3: Pengembangan Backend & REST API** 
  Pembuatan skema *database* (Supabase/Firebase atau Node.js/PostgreSQL) untuk entitas *Users*, *Services*, *Orders*, dan *Reviews*.
* **Fase 4: Transaksi & Real-Time Fitur** 
  Integrasi *Payment Gateway* (seperti Midtrans/Xendit) untuk pembayaran yang aman (sistem *escrow/rekber*) dan implementasi WebSockets (Socket.io) untuk *live chat* antar pengguna.
