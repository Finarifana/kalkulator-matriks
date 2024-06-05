function hitung(operation) {
  var matriksA = parseMatriks(document.getElementById("matriksA").value);
  var matriksB = parseMatriks(document.getElementById("matriksB").value);
  if (matriksA && matriksB) {
    switch (operation) {
      case 'tambah':
        tampilkanHasil(tambah(matriksA, matriksB));
        break;
      case 'kurang':
        tampilkanHasil(kurang(matriksA, matriksB));
        break;
      case 'kali':
        tampilkanHasil(kali(matriksA, matriksB));
        break;
      default:
        alert('Operasi tidak valid');
    }
  }
}

function parseMatriks(matriksStr) {
  try {
    var baris = matriksStr.trim().split("\n");
    var matriks = baris.map(function(baris) {
      return baris.trim().split(/\s+/).map(function(angka) {
        return parseFloat(angka);
      });
    });
    return matriks;
  } catch (error) {
    console.error("Kesalahan saat memparsing matriks:", error);
    return null;
  }
}

function tambah(matriksA, matriksB) {
  return matriksA.map(function(baris, i) {
    return baris.map(function(kolom, j) {
      return kolom + matriksB[i][j];
    });
  });
}

function kurang(matriksA, matriksB) {
  return matriksA.map(function(baris, i) {
    return baris.map(function(kolom, j) {
      return kolom - matriksB[i][j];
    });
  });
}

function kali(matriksA, matriksB) {
  var hasil = [];
  for (var i = 0; i < matriksA.length; i++) {
    hasil[i] = [];
    for (var j = 0; j < matriksB[0].length; j++) {
      var jumlah = 0;
      for (var k = 0; k < matriksA[0].length; k++) {
        jumlah += matriksA[i][k] * matriksB[k][j];
      }
      hasil[i][j] = jumlah;
    }
  }
  return hasil;
}

function tampilkanHasil(matriks) {
  var hasilStr = matriks.map(function(baris) {
    return baris.join(" ");
  }).join("\n");
  document.getElementById("hasil").value = hasilStr;
}
