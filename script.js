const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

function ObtenerMenores (arreglos) {
    return arreglos.filter(num=>num<8);
}

function ObtenerMayoresIguales (arreglos) {
    return arreglos.filter(num=>num>=8);
}

function contarElementos (arreglos) {
    return arreglos.length;
}

const Menores = ObtenerMenores(fibonacci);
const Mayores = ObtenerMayoresIguales(fibonacci);

const divMenores = document.getElementById("Menores");
const divMayores = document.getElementById("Mayores");

const ElementosMenores = contarElementos(Menores);
const ElementosMayores = contarElementos(Mayores);

divMenores.textContent = "Existe {contarElementos(Menores)} numeros que " + ElementosMenores;
divMayores.textContent = "Existe {contarElementos(Mayores)} numeros que " + ElementosMayores;