const numeros = [1, 2, 3, 4, 5, 6];
const resultadoimperativo = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    resultadoimperativo.push(numeros[i] * 2);
  }
}

console.log(resultadoimperativo); // [4, 8, 12]