function calculate(operation) {
  var matrixA = parseMatrix(document.getElementById("matrixA").value);
  var matrixB = parseMatrix(document.getElementById("matrixB").value);
  if (matrixA && matrixB) {
    switch (operation) {
      case 'add':
        displayResult(add(matrixA, matrixB));
        break;
      case 'subtract':
        displayResult(subtract(matrixA, matrixB));
        break;
      case 'multiply':
        displayResult(multiply(matrixA, matrixB));
        break;
      default:
        alert('Invalid operation');
    }
  }
}

function parseMatrix(matrixStr) {
  try {
    var rows = matrixStr.trim().split("\n");
    var matrix = rows.map(function(row) {
      return row.trim().split(/\s+/).map(function(num) {
        return parseFloat(num);
      });
    });
    return matrix;
  } catch (error) {
    console.error("Error parsing matrix:", error);
    return null;
  }
}

function add(matrixA, matrixB) {
  return matrixA.map(function(row, i) {
    return row.map(function(col, j) {
      return col + matrixB[i][j];
    });
  });
}

function subtract(matrixA, matrixB) {
  return matrixA.map(function(row, i) {
    return row.map(function(col, j) {
      return col - matrixB[i][j];
    });
  });
}

function multiply(matrixA, matrixB) {
  var result = [];
  for (var i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (var j = 0; j < matrixB[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < matrixA[0].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function displayResult(matrix) {
  var resultStr = matrix.map(function(row) {
    return row.join(" ");
  }).join("\n");
  document.getElementById("result").value = resultStr;
}
