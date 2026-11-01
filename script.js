// script.js
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

tombolAksi.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// --- Ubah gaya ---
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// --- (4) Sembunyikan / tampilkan paragraf dengan class CSS ---
const tombolToggle = document.getElementById("tombolToggle");
const paragrafToggle = document.getElementById("paragrafToggle");
tombolToggle.addEventListener("click", function () {
    const tersembunyi = paragrafToggle.classList.toggle("tersembunyi");
    tombolToggle.textContent = tersembunyi ? "Tampilkan Paragraf" : "Sembunyikan Paragraf";
    tombolToggle.setAttribute("aria-expanded", String(!tersembunyi));
});

// --- Hitung karakter ---
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");
namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// --- (3) Event change pada dropdown sesi workshop ---
const sesiWorkshop = document.getElementById("sesiWorkshop");
const pesanSesi = document.getElementById("pesanSesi");
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        pesanSesi.textContent = "Belum ada sesi dipilih.";
    } else {
        pesanSesi.textContent = "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});

// --- Form pendaftaran ---
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (nama.length < 3) { // (2) minimal tiga karakter
        pesanForm.textContent = "Nama minimal terdiri dari 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
        pesanSesi.textContent = "Belum ada sesi dipilih.";
    }
});

// --- Daftar tugas ---
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();
    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button"); // (1) tombol hapus

    label.textContent = teks + " ";

    selesai.type = "button";
    selesai.textContent = "Tandai selesai";
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai" : "Tandai selesai";
    });

    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas \"" + teks + "\" dihapus.";
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});
