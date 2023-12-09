function submitForm() {
    // Mengambil nilai input dari form
    var npm = document.getElementById('npm').value;
    var nama = document.getElementById('nama').value;
    var kelas = document.getElementById('kelas').value;
    var fakultas = document.getElementById('fakultas').value;
    var jurusan = document.getElementById('jurusan').value;

    // Menambahkan data ke tabel
    var table = document.getElementById('biodataTable').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cells = [npm, nama, kelas, fakultas, jurusan];

    for (var i = 0; i < cells.length; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = cells[i];
        Cell.innerHTML = " ";
    }

    // Menambahkan baris kosong
    var emptyRow = table.insertRow(table.rows.length);
    for (var j = 0; j < cells.length; j++) {
        var emptyCell = emptyRow.insertCell(j);
        emptyCell.innerHTML = " "; // Anda dapat menambahkan teks kosong atau elemen HTML lainnya jika diinginkan
    }

    // Mengosongkan form setelah submit
    document.getElementById('biodataForm').reset();
}
