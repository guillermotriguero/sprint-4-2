// POR REVISAR LAS FUNCIONES


// 1

// function multiply(num1, num2) {
//     return num1 * num2;
// }

const multiply = (num1, num2) => {
    return num1 * num2;
}


// 2) function toCelsius(fahrenheit) {
//     return (5 / 9) * (fahrenheit - 32);
// }

const toCelsius = (fahrenheit) => {
    return (5 / 9) * (fahrenheit - 32);
}


// 3) This function returns a string padded with leading zeros
// function padZeros(num, totalLen) {
//     var numStr = num.toString();
//     var numZeros = totalLen - numStr.length;
//     for (var i = 1; i <= numZeros; i++) {
//         numStr = "0" + numStr;
//     }
//     return numStr;
// }

const padZeros = (num, TotalLen) => {
    var numStr = num.toString();
    var numZeros = TotalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}


// 4) function power(base, exponent) {
//     var result = 1;
//     for (var i = 0; i < exponent; i++) {
//         result *= base;
//     }
//     return result;
// }

const power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// 5) function greet(who) {
//     console.log("Hello " + who);
// }

const greet = (who) => {
    console.log("Hello " + who);

}