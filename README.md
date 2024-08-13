# Documentation

Aplikasi arsip pemkot Dinas Perikanan Kota Semarang. Berbasis WEB Application, tujuan melalukan menejement arsip. <\br>

installasi VER 1.1.0 Alpha
-
1. Buat directory baru `YOURDIRECT`
2. Lakukan clone pada repo ini
3. Buka pada Directory BackendForGIT
4. Install virtual environtment untuk python
5. Install PIP yang dibutuhkan (Library/framework)
6. Rubah CORS untuk middleware pada file "main.py" 👉 `allow_origins` value sesuaikan dengan IP/ URI/ URL milik frontend 
7. Biarkan lain nya default tanpa perubahan (Kecuali paham konteks dan ini)
8. Download `credentialKey.json` di firebase dan simpan pada directory `BackendForGIT` lalu rename
9. sesuaikan lokasi credentialkey dalam file firestore.py di code ini 👉 `cred = credentials.Certificate(r"[LOKASI_CRED_MU]")`
10. pada selueruh file dengan ekstensi HTML dan JS serta directory bernama `src` masukan jadi satu di dalam directory baru bernama frontend
11. Jalankan server dengan perintah `fastapi dev main.py` atau `fastapi run`

fitur
-
1. Arsip masuk -> Landing page untuk melihat seluruh data arsip yang masuk
2. Arsip keluar -> Landing page untuk melihat seluruh data arsip yang keluar
3. Tambah Arsip masuk -> page untuk mencatat arsip yang masuk
4. Tambah Arsip Keluar -> page untuk mencatat arsip yang keluar
5. Edit arsip masuk -> melakuakn edit data arsip masuk berdasar nomor surat
6. Edit arsip keluar -> melakuakn edit data arsip keluar berdasar nomor surat
7. Cari arsip masuk -> mencari data arsip berdasar nomor surat
8. Cari arsip keluar -> mencari data arsip berdasar nomor surat
9. Log Out -> Keluar dari halaman
10. Log in -> masuk ke halaman sesuai User dan Password statis
