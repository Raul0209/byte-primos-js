console.log("Mostrando los 10 primeros numeros primos");

const divisor = 2;
var numero = 1;

for (let x = 1; x <= 10;) {
    if (numero % divisor != 0) {
        console.log(numero);
        numero += 2;
        x = x + 1
    } else {
        numero += 1;
    }
}