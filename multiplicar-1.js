// Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient).
// Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.

// Per exemple, si l'usuari introdueix 3 i 5:

// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9
// 3 X 4 = 12
// 3 X 5 = 15

const num1 = parseInt(prompt("Dime un nº"));
const num2 = parseInt(prompt("Dime otro nº")); 7

let tabla = "";

for (i = 1; num2 > i; i++) {
    let resultado = num1 * i;
    tabla += num1 + " x " + i + " = " + resultado + "\n";
}

console.log(tabla);

