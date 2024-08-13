function login() {
    // Mendapatkan nilai input
    let username = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;

    // Kredensial login statis
    const validUsername = 'honda';
    const validPassword = 'honda1';

    // Memeriksa kredensial
    if (username === validUsername && password === validPassword) {
        // Jika login berhasil, simpan status login ke local storage
        localStorage.setItem('isLoggedIn', 'true');
        // Alihkan ke halaman view.html
        window.location.href = 'view.html';
    } else {
        // Jika login gagal, beri tahu pengguna
        alert('Username atau Password salah!');
    }
}