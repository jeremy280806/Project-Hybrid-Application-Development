# ServiConnect: Platform Ekosistem Agen Layanan Terintegrasi

## Latar Belakang & Alasan Pemilihan Proyek
Di zaman mobilitas dan digitalisasi saat ini, permintaan akan **Agen Layanan** (penyedia jasa/keahlian) sangat tinggi di berbagai sektor—mulai dari perbaikan rumah, IT & desain, hingga pengajaran privat. Namun, pasar penyedia jasa saat ini masih sangat terfragmentasi. Membangun platform khusus yang menghubungkan klien dengan penyedia jasa secara profesional adalah solusi penting untuk menciptakan ekosistem *gig economy* yang aman, terpercaya, dan terstruktur.

## Masalah Utama (Pernyataan Masalah)
1. **Pencarian yang Terpecah (Pencarian Terfragmentasi):** Masyarakat sering mengalami kesulitan dalam menemukan teknisi atau *freelancer* yang dapat diandalkan dengan cepat karena masih bergantung pada grup WhatsApp, Facebook, atau rekomendasi dari mulut ke mulut.
2. **Ketidakjelasan Harga & Standar:** Kurangnya transparansi dalam tarif dan rincian layanan sering kali menimbulkan keraguan atau konflik harga di akhir pekerjaan.
3. **Krisis Kepercayaan & Keamanan:** Klien sulit untuk memvalidasi keahlian penyedia jasa (ketiadaan portofolio/ulasan terpusat), dan sebaliknya, penyedia jasa sering menghadapi risiko klien fiktif atau gagal bayar.

## Target Pengguna
1. **Pencari Jasa (Klien / Konsumen):** Individu, rumah tangga, atau UMKM yang memerlukan solusi/jasa yang cepat, spesifik, dan berkualitas.
2. **Penyedia Jasa (Agen Layanan / Mitra Pro):** Pekerja lepas (*freelancer*), teknisi, desainer, dan profesional independen yang ingin mengelola pesanan, memperluas jangkauan klien, dan membangun reputasi digital.

## Kebutuhan Pengguna (User Needs)
Berikut adalah lima kebutuhan utama dari target pengguna:
1. **Pencarian Cerdas & Spesifik:** Pengguna memerlukan kemampuan untuk mencari jasa berdasarkan lokasi terdekat, rating, dan ketersediaan waktu.
2. **Validasi Kredibilitas:** Pengguna ingin melihat portofolio visual, *badge* verifikasi, dan ulasan dari klien sebelumnya untuk membangun rasa percaya.
3. **Manajemen Proyek & Pendapatan:** *Service Agent* memerlukan *dashboard* khusus untuk memantau pesanan aktif, jadwal tenggat waktu, dan ringkasan pendapatan.
4. **Sistem *Bidding* (Permintaan Khusus):** Klien perlu menyiarkan masalah khusus (contoh: Pipa bocor malam hari) agar penyedia jasa dapat memberikan penawaran harga (*bidding*) secara langsung.
5. **Komunikasi yang Terkendali:** Kedua belah pihak memerlukan ruang *chat* terintegrasi dalam aplikasi untuk bernegosiasi dan mengirim pembaruan proyek tanpa harus membagikan nomor pribadi.

## Pemetaan Kebutuhan ke Layar & Komponen
| Kebutuhan Pengguna | Layar (*Screen*) Terkait | Komponen UI Utama |
| :--- | :--- | :--- |
| **Pencarian Cerdas** | `explore.tsx` (Eksplor) | *Search Bar*, *Horizontal Scroll Filter Chips* (Terdekat, Rating 4.8+), *Grid* Kategori Populer. |
| **Validasi Kredibilitas** | `profile.tsx` (Profil) | *Avatar* Profil, *Badge* "Mitra Pro Terverifikasi", *Tabs* Portofolio & Ulasan, Status *Online/Off*. |
| **Manajemen Proyek** | `dashboard.tsx` (Beranda) | *Balance Card* (Saldo), *Stats Strip* (Total Proyek), *Urgent Order Spotlight* (Pesanan Mendesak), *Toggle* Terima Pesanan. |
| **Sistem *Bidding*** | `explore.tsx` (Eksplor) | Daftar *Card* "Permintaan Jasa Terbaru", Label *Budget*, Tombol "Kirim Penawaran". |
| **Komunikasi** | `message.tsx` (Pesan/Chat) | Daftar Pesan Masuk, *Bubble Chat* Negosiasi, Indikator Notifikasi pada Header. |

## Alasan Keputusan Desain (Design Rationale)
1. **Arsitektur Expo Router (Bottom Tabs):** Pemilihan *Route Groups* `(tabs)` dilakukan agar bar navigasi bawah hanya dirender sekali oleh sistem. Hal ini menjamin transisi antar-layar (Beranda ↔ Profil) berlangsung secara instan tanpa adanya kedipan layar, sehingga memberikan pengalaman *native* yang lebih lancar.
2. **Pendekatan *Card-Based UI*:** Dengan mempertimbangkan tingginya kepadatan informasi (harga, lokasi, deskripsi, ulasan), desain disusun dalam bentuk kartu-kartu (*cards*) yang dilengkapi dengan *shadow* lembut dan sudut membulat (*rounded-xl*). Ini bertujuan untuk menghindari *cognitive overload* dan menjaga antarmuka tetap rapi.
3. **Warna Psikologis (Indigo & Teal):** Penggunaan warna utama *Indigo/Biru* (`#3525cd`) melambangkan kepercayaan, profesionalisme, dan teknologi. Warna sekunder hijau/teal (`#00687a` & `#005338`) diterapkan pada elemen "Verifikasi" dan "Keberhasilan" untuk menciptakan rasa aman.
4. **Indikator Ketersediaan (*Availability Toggle*):** Penempatan tombol *toggle* "Terima Pesanan/Istirahat" secara mencolok di *Dashboard* dan *Profil* sangat penting bagi pekerja lepas untuk mengatur keseimbangan antara pekerjaan dan kehidupan pribadi (*work-life balance*).

Rencana Pengembangan Aplikasi ini terbagi menjadi beberapa fase (*Milestones*):
* **Fase 1: Pemotongan UI & Navigasi Dasar (Saat Ini)** 
  Mengonversi desain antarmuka ke dalam React Native menggunakan NativeWind (Tailwind CSS) serta menerapkan *routing* dasar (Expo Router).
* **Fase 2: Integrasi Autentikasi & Manajemen Status** 
  Menambahkan sistem Login/Daftar (Google/Apple Auth) dan pengelolaan status global dengan menggunakan Redux atau Zustand.
* **Fase 3: Pengembangan Backend & REST API** 
  Membuat skema *database* (Supabase/Firebase atau Node.js/PostgreSQL) untuk entitas *Users*, *Services*, *Orders*, dan *Reviews*.
* **Fase 4: Transaksi & Fitur Real-Time** 
  Mengintegrasikan *Payment Gateway* (seperti Midtrans/Xendit) untuk pembayaran yang aman (sistem *escrow/rekber*) dan menerapkan WebSockets (Socket.io) untuk *live chat* antar pengguna.
