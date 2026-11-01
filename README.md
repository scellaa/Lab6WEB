## Nama: Mayscela Herliyawati
## NIM: 312510371

#### Praktikum ini bertujuan untuk:
1. Memahami cara memilih dan mengubah elemen HTML melalui DOM (getElementById, textContent, classList).
2. Menggunakan event listener (click, input, change, submit) untuk membuat halaman interaktif.
3. Membuat dan menghapus elemen secara dinamis (createElement, append, remove).
4. Menerapkan validasi form sederhana di sisi klien.
5. Memahami pengaruh posisi dan atribut defer pada pemuatan <script>.

#### Langkah Kerja
1. Menyiapkan struktur HTML. Elemen diberi id agar mudah dipilih lewat JavaScript. File CSS dan JS dihubungkan di <head>, dan script memakai defer.
2. Mengubah teks via DOM. judul.textContent dan pesan.textContent diubah saat halaman dimuat. Tombol "Klik Saya" menampilkan waktu klik.
3. Mengubah gaya dengan class. Tombol "Ubah Gaya" memakai classList.toggle untuk highlight dan teks-besar.
4. Menampilkan/menyembunyikan paragraf. Tombol memakai classList.toggle("tersembunyi"); CSS .tersembunyi { display: none; } yang menyembunyikan paragraf. Teks tombol dan atribut aria-expanded ikut diperbarui.
5. Menghitung karakter. Event input pada kolom nama memperbarui jumlah karakter secara langsung.
6. Validasi form. Event submit memanggil preventDefault(), lalu memeriksa:
          1) nama tidak kosong dan minimal 3 karakter,
          2) format email valid (regex),
          3) usia berupa bilangan bulat 17–100.
7. Dropdown sesi workshop. Event change pada <select> menampilkan sesi yang dipilih pada paragraf #pesanSesi.
8. To-do list. Tombol "Tambah" membuat <li> berisi teks, tombol Tandai selesai, dan tombol Hapus (item.remove()).
9. Eksperimen tanpa defer. Tag <script> diberi tanpa defer di <head> lalu console diamati (lihat bagian berikut).

#### Hasil Eksperimen: Script di <head> tanpa defer

Yang terjadi: Console menampilkan error seperti Uncaught TypeError: Cannot set properties of null (setting 'textContent'), dan seluruh fitur interaktif tidak berfungsi. <br>
Penyebab: Browser membaca HTML dari atas ke bawah. Script biasa di <head> langsung dieksekusi dan menghentikan proses parsing sampai selesai, padahal elemen di <body> belum dibuat. 
Akibatnya document.getElementById("judul") mengembalikan null. Baris judul.textContent = ... lalu melempar error, dan script berhenti sehingga event listener tidak pernah terpasang. <br>
Solusi:
Tambahkan atribut defer (script diunduh paralel, dieksekusi setelah HTML selesai di-parse), atau
letakkan <script> tepat sebelum </body>, atau
bungkus kode dalam document.addEventListener("DOMContentLoaded", ...). <br>

<img width="468" height="171" alt="image" src="https://github.com/user-attachments/assets/0a4cb19a-0ef9-45b6-8781-3866b2f4dc68" />
<img width="766" height="226" alt="image" src="https://github.com/user-attachments/assets/32302a14-94fa-49a5-8514-cbf1d388fa57" />
<img width="761" height="135" alt="image" src="https://github.com/user-attachments/assets/cd30f47f-772d-4af3-84bc-de1e575e73cd" />
<img width="505" height="114" alt="image" src="https://github.com/user-attachments/assets/e458fb39-7b32-4821-8056-3e8b7c58a352" />
<img width="383" height="120" alt="image" src="https://github.com/user-attachments/assets/0bc81cdb-4e8a-4fe9-b393-ce867687e69a" />
<img width="484" height="311" alt="image" src="https://github.com/user-attachments/assets/40e1b262-c342-45ce-aa08-a2104bd3fe5d" />
<img width="440" height="136" alt="image" src="https://github.com/user-attachments/assets/d0498977-262d-4030-a6d7-5760e93841f0" />

