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
    return matriksStr.trim().split("\n").map(function(baris) {
      return baris.trim().split(/\s+/).map(function(angka) {
        return parseFloat(angka);
      });
    });
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
  return matriksA.map(function(barisA) {
    return matriksB[0].map(function(_, j) {
      return barisA.reduce(function(sum, _, k) {
        return sum + matriksA[j][k] * matriksB[k][j];
      }, 0);
    });
  });
}

function tampilkanHasil(matriks) {
  var hasilStr = matriks.map(function(baris) {
    return baris.join(" ");
  }).join("\n");
  document.getElementById("hasil").value = hasilStr;
}

function hapusInput() {
  document.getElementById("matriksA").value = "";
  document.getElementById("matriksB").value = "";
  document.getElementById("hasil").value = "";
}
