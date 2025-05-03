import mysql from 'mysql2';

// Membuat koneksi ke database MySQL
const connection = mysql.createConnection({
  host: 'localhost',  // Ganti dengan host database Anda
  user: 'root',       // Ganti dengan username Anda
  password: '', // Ganti dengan password Anda
  database: 'data_mahasiswa', // Ganti dengan nama database Anda
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

export default connection;
