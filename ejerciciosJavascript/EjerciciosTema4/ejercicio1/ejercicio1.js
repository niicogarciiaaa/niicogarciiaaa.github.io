// ejercicio1.js

import * as arrays from './arrays.js'; // Importar todas las funciones desde arrays.js

let paises = ["España", "Francia", "Italia", "Alemania", "Portugal"];

// Función para mostrar en el DOM
function mostrarResultado(texto) {
    document.getElementById('resultado').innerHTML = texto;
}

// Mostrar el número de países
function mostrarNumeroPaises() {
    const numero = arrays.mostrarNumeroElementos(paises);
    mostrarResultado(`Número de países: ${numero}`);
}

// Mostrar el listado de países
function mostrarPaises() {
    const orden = prompt("¿Cómo quieres mostrar los países? (1: Normal, 2: Inverso, 3: Alfabético)");
    let resultado;

    if (orden === '1') {
        resultado = arrays.mostrarElementos(paises);
    } else if (orden === '2') {
        resultado = arrays.mostrarElementosInverso(paises);
    } else if (orden === '3') {
        resultado = arrays.mostrarElementosOrdenados(paises);
    } else {
        resultado = "Opción no válida.";
    }
    mostrarResultado(`Listado de países: ${resultado.join(", ")}`);
}

// Añadir un país
function añadirPais() {
    const pais = prompt("Introduce el nombre del país a añadir:");
    const lugar = prompt("¿Dónde quieres añadir el país? (1: Principio, 2: Final)");

    if (lugar === '1') {
        arrays.añadirElementoPrincipio(paises, pais);
    } else if (lugar === '2') {
        arrays.añadirElementoFinal(paises, pais);
    } else {
        mostrarResultado("Opción no válida.");
        return;
    }

    mostrarResultado(`País añadido: ${pais}.<br/> Lista actual: ${paises.join(", ")}`);
}

// Borrar un país
function borrarPais() {
    const lugar = prompt("¿Dónde quieres borrar el país? (1: Principio, 2: Final)");

    let borrado;
    if (lugar === '1') {
        const resultado = arrays.borrarElementoPrincipio(paises);
        
        paises = resultado.array; // Actualiza el array
        borrado = resultado.elementoBorrado;
    } else if (lugar === '2') {
        const resultado = arrays.borrarElementoFinal(paises);
        paises = resultado.array; // Actualiza el array
        borrado = resultado.elementoBorrado;
    } else {
        mostrarResultado("Opción no válida.");
        return;
    }

    mostrarResultado(`País borrado: ${borrado}.<br/> Lista actual: ${paises.join(", ")}`);
}

// Consultar un país
function consultarPais() {
    const tipoConsulta = prompt("¿Cómo quieres consultar? (1: Por posición, 2: Por nombre)");

    if (tipoConsulta === '1') {
        const posicion = prompt("Introduce la posición del país (empezando desde 0):");
        const pais = arrays.mostrarElementoPorPosicion(paises, posicion);
        mostrarResultado(`El país en la posición ${posicion} es: ${pais}`);
    } else if (tipoConsulta === '2') {
        const nombre = prompt("Introduce el nombre del país:");
        const posicion = arrays.mostrarPosicionPorElemento(paises, nombre);
        mostrarResultado(`El país ${nombre} está en la posición: ${posicion}`);
    } else {
        mostrarResultado("Opción no válida.");
    }
}

// Añadir funciones al objeto window para hacerlas accesibles desde el HTML
window.mostrarNumeroPaises = mostrarNumeroPaises;
window.mostrarPaises = mostrarPaises;
window.añadirPais = añadirPais;
window.borrarPais = borrarPais;
window.consultarPais = consultarPais;
