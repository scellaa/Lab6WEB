#### Nama: Mayscela Herliyawati
#### NIM: 312510371

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
          3) usia berupa bilangan bulat 17–100. <br>
7. Dropdown sesi workshop. Event change pada <select> menampilkan sesi yang dipilih pada paragraf #pesanSesi. <br>
8. To-do list. Tombol "Tambah" membuat <li> berisi teks, tombol Tandai selesai, dan tombol Hapus (item.remove()). <br>
9. Eksperimen tanpa defer. Tag <script> diberi tanpa defer di <head> lalu console diamati (lihat bagian berikut). <br>
<br>

#### Hasil screenshot setiap perubahan
<img width="468" height="171" alt="Screenshot 2026-11-01 110100" src="https://github.com/user-attachments/assets/e6eafea0-17db-4ad1-8893-e03953d3037b" />
<img width="766" height="226" alt="Screenshot 2026-11-01 110301" src="https://github.com/user-attachments/assets/d9d2a55a-b2fa-49b2-8616-1e8b52a74645" />
<img width="761" height="135" alt="Screenshot 2026-11-01 110317" src="https://github.com/user-attachments/assets/b22bf01c-fb40-4cf0-8838-960abb63dd6c" />
<img width="505" height="114" alt="Screenshot 2026-11-01 110333" src="https://github.com/user-attachments/assets/68fc02c3-ea0b-435e-a57b-0d00ea0399ee" />
<img width="383" height="120" alt="Screenshot 2026-11-01 110406" src="https://github.com/user-attachments/assets/44387000-ddae-4b07-809d-da0a401204c9" />
<img width="484" height="311" alt="Screenshot 2026-11-01 110441" src="https://github.com/user-attachments/assets/01c2b6c5-85b4-4f5b-889f-1df2ef6666ec" />
<img width="440" height="136" alt="Screenshot 2026-11-01 110506" src="https://github.com/user-attachments/assets/1595e44f-b8de-4985-bd8a-03cfd29f3b70" />


