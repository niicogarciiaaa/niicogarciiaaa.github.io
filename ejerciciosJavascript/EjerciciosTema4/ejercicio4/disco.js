export class Disco {
    constructor (nombre, grupoCantante, anho, tipoMusica, localizacion = 0, prestado = false, caratula = "imagen.jpg") {
        this.nombre = nombre;
        this.grupoCantante = grupoCantante;
        this.anho = anho;
        this.tipoMusica = tipoMusica;
        this.localizacion = localizacion;
        this.prestado = prestado ===true ;
        this.caratula = caratula;
    }

    cambiarEstanteria(numero) {
        this.localizacion = numero;
    }

    cambiarPrestado(nuevoPrestado) {
        this.prestado = nuevoPrestado;
    }

    mostrarInformacion() {
        document.getElementById('resultado').innerHTML = `El nombre del disco es ${this.nombre}, el grupo o cantante es ${this.grupoCantante}, 
                                                          el año de publicación es ${this.anho}, el tipo de música es ${this.tipoMusica}, 
                                                          la localización es ${this.localizacion}, el disco está prestado: ${this.prestado}, 
                                                           y la carátula es ${this.caratula}.`;
    }
}
