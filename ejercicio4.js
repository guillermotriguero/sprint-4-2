// HECHO
// Crear una funció que accepti un string i retornada aquest string revertit.
// Nota: Usar funció fletxa(arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()

const stringInicial = "Éste es el string inicial";

const reverseFunction = (string) => {
    const stringNuevo = [...string];
    const stringReversed = stringNuevo.reverse();
    return stringReversed
}

console.log(reverseFunction(stringInicial));