function hitungLuasPersegiPanjang(panjang, lebar) {
    const hasil = panjang * lebar; // hasil tidak berubah, gunakan const
    let keterangan = "Luas persegi panjang adalah "; // bisa diubah jika perlu
    keterangan += hasil;
    return keterangan;
}

// Pemanggilan function berulang kali
console.log(hitungLuasPersegiPanjang(5, 3)); // Luas persegi panjang adalah 15
console.log(hitungLuasPersegiPanjang(7, 2)); // Luas persegi panjang adalah 14