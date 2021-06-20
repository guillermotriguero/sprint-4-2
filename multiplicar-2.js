// Modificar l'exercici anterior perquè els números s'introdueixin a través d'un formulari (amb validacions), i que la taula de multiplicar la mostri en una taula HTML

// const num1 = parseInt(prompt("Dime un nº"));
// const num2 = parseInt(prompt("Dime otro nº")); 7

let tabla = "";

function tablaMultiplicar() {

    let acumErrores = 0;

    // Estas variables cogen el valor (el nº)

    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);

    // Estas variables cogen el campo, para darle la clase is-invalid si hace falta

    let number1 = document.getElementById("num1");
    let number2 = document.getElementById("num2");

    if (isNaN(n1)) {
        number1.classList.add("is-invalid");
        document.getElementById("errorNum1").innerHTML = "Esto no es un número";
        acumErrores++;

    } if (isNaN(n2)) {
        number2.classList.add("is-invalid");
        document.getElementById("errorNum2").innerHTML = "Esto no es un número";
        acumErrores++;

    } if (acumErrores > 0) {
        return false;
    } else {
        document.getElementById("tablaFinal").innerHTML = generarMultiplicacion(n1, n2);
    }
}


function generarMultiplicacion(num1, num2) {

    tabla += '<table class="table-dark d-flex striped table"><tbody>';

    // La única forma que he encontrado de que la tabla no ocupe todo el ancho, sino el espacio que ocupan las operaciones, es añadiendo un d-flex en table class

    for (i = 1; num2 >= i; i++) {
        let resultado = num1 * i;
        tabla += " <tr> <th>" + num1 + " x " + i + " = " + resultado + "</th> </tr>";
    }

    tabla += "</tbody></table>";

    console.log(tabla);

    return tabla

}




