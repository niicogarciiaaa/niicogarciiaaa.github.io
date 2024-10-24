// Creación de la clase Jugador
class Jugador {
    fuerza=1;
    constructor() {
        this.fuerza = 1;
    }
}

// Instanciamos un jugador
let jugador = new Jugador();

function incrementarFuerza() {
    jugador.fuerza += 1;
    document.getElementById("resultado").innerHTML = `La fuerza ha aumentado a: ${jugador.fuerza}`;
}

function consultarFuerza() {
    document.getElementById("resultado").innerHTML = `La fuerza de tu personaje es: ${jugador.fuerza}`;
}

