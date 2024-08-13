// Periksa status login saat halaman dimuat
window.onload = function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        // Jika tidak login, alihkan ke halaman login
        window.location.href = 'login.html';
    }
}

// Fungsi logout untuk menghapus status login
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}