import * as arrays from '../ejercicio1/arrays.js';
import  {Disco} from './disco.js'

const arraysDiscos = [
    new Disco("Disco1", "Grupo1", 1990, "Indie"),
    new Disco("Disco2", "Grupo2", 2000, "Rock"),
    
];


// numero discos
function mostrarNumeroDiscos() {
    document.getElementById('resultado').innerHTML = `El número de discos es ${arrays.mostrarNumeroElementos(arraysDiscos)}`;
}

// generar tabla y mostrar discos
function mostrarTablaDatos() {
    const opcion = prompt("¿Cómo quieres mostrar los discos? (1: Normal, 2: Inverso, 3: Alfabético)");
    if(opcion==1){
    document.getElementById('resultado').innerHTML += generarTabla(arraysDiscos);
    }if(opcion==2){
    //let discosOrdenados= arrays.mostrarElementosInverso(arraysDiscos);
    document.getElementById('resultado').innerHTML += generarTabla(arrays.mostrarElementosInverso(arraysDiscos));
    }if(opcion==3){
    //let discosAlfabetico=arrays.mostrarElementosOrdenados(arraysDiscos);
    document.getElementById("resultado").innerHTML+=generarTabla(arrays.mostrarElementosOrdenados(arraysDiscos))
        
        
        
    
    }
    
}
//generar tabla html
function generarTabla(arraysDiscos) {
    let tabla = `<table border="1" style="border-collapse:collapse"><tr><th>Nombre</th><th>Grupo o cantante</th><th>Año Publicación</th><th>Tipo de música</th><th>Localización</th><th>Prestado</th><th>Carátula</th></tr>`;

    for (let i = 0; i < arraysDiscos.length; i++) {
        let prestadoTexto = arraysDiscos[i].prestado ? 'Sí' : 'No'; // Muestra 'Sí' o 'No'
        tabla += `<tr><td>${arraysDiscos[i].nombre}</td><td>${arraysDiscos[i].grupoCantante}</td><td>${arraysDiscos[i].anho}</td><td>${arraysDiscos[i].tipoMusica}</td><td>${arraysDiscos[i].localizacion}</td><td>${prestadoTexto}</td><td>${arraysDiscos[i].caratula}</td></tr>`;
    }
    tabla += `</table>`;
    return tabla;
}
//funcion para añadir un disco al array
function anhadirdisco() {
    const opcion = prompt("¿Añadir disco por el principio (Opción 1) o añadir por el final (Opción 2)?");
    let nombre = prompt("Introduce el nombre del disco");
    let grupoCantante = prompt("Introduce el grupo/cantante del disco");
    let anho = prompt("Introduce el año del disco");
    let tipoMusica = prompt("Introduce el tipo del disco").toLowerCase();
    let localizacion = prompt("Localización?") || "0";
    let prestado = prompt("¿Está prestado? (Sí/No)")?.toLowerCase() === 'sí'; 
    let caratula = prompt("Carátula") || "imagen.jpg";  

    const tiposPermitidos = ["rock", "pop", "punk", "indie"];
    
    // Verificar el tipo de música antes de crear el disco
    if (!tiposPermitidos.includes(tipoMusica)) {
        document.getElementById("resultado").innerHTML+=`Tipo de música no válido. Debe ser 'rock', 'pop', 'punk' o 'indie'.`
        return; // Salir de la función si el tipo no es válido
    }
    const disconuevo = new Disco(nombre, grupoCantante, anho, tipoMusica, localizacion, prestado, caratula);
    // Añadir disco según la opción seleccionada
    if (opcion == 1) {
        arrays.añadirElementoPrincipio(arraysDiscos, disconuevo);
    } else if (opcion == 2) {
        arrays.añadirElementoFinal(arraysDiscos, disconuevo);
    } else {
        document.getElementById('resultado').innerHTML += "Opción no válida";
        return; // Salir si la opción no es válida
    }

    
}

function borrarDisco(){
    const opcion = prompt("Eliminar disco por el principio(Opción 1) o añadir por el final(Opción 2)");
    if(opcion==1){

        arrays.borrarElementoPrincipio(arraysDiscos);
        
    }else if(opcion==2){
        arrays.borrarElementoFinal(arraysDiscos);
        
    }else{
        document.getElementById('resultado').innerHTML += "Opción no valida";

    }
}

function consultarDisco() {
    const tipoConsulta = prompt("¿Cómo quieres consultar? (1: Por posición, 2: Por nombre)");

    if (tipoConsulta === '1') {
        const posicion = prompt("Introduce la posición del disco (empezando desde 0):");
        if (posicion >= 0 && posicion < arraysDiscos.length) {
            const disco = arrays.mostrarElementoPorPosicion(arraysDiscos, posicion);
            document.getElementById('resultado2').innerHTML += `El disco en la posición ${posicion} es: ${disco.nombre}`;
        } else {
            document.getElementById('resultado2').innerHTML += "Posición no válida.";
        }
    } else if (tipoConsulta === '2') {
        const nombre = prompt("Introduce el nombre del disco:");
        for(let i=0;i<arraysDiscos.length;i++){
            if(arraysDiscos[i].nombre=== nombre){
                
                document.getElementById('resultado2').innerHTML +=(`${nombre} esta en la posicion ${i}`);
                
            }
        }
    }else{
        document.getElementById('resultado2').innerHTML +=(`No se encontro el disco`);
    }
}
function MostrarDiscosIntervalos() {
    const anhominimo = parseInt(prompt("Año de comienzo del intervalo"), 10); 
    const anhomaximo = parseInt(prompt("Año de fin del intervalo"), 10);

    const discosFiltrados = arraysDiscos.filter(disco => disco.anho >= anhominimo && disco.anho <= anhomaximo);
    
    let resultado = discosFiltrados.length > 0 
        ? `<h3>Discos dentro del intervalo:</h3>
           <p><strong>Título</strong> | <strong>Cantante o Grupo</strong> | <strong>Año</strong> | <strong>Tipo Música</strong> | <strong>Localización</strong> | <strong>Prestado</strong> | <strong>Carátula</strong></p>
           <ul>${discosFiltrados.map(disco => 
             `<li>${disco.nombre} | ${disco.grupoCantante} | ${disco.anho} | ${disco.tipoMusica} | ${disco.localizacion} | ${disco.prestado ? "Sí" : "No"} | ${disco.caratula}</li>`
           ).join('')}</ul>` 
        : "No hay discos en el intervalo especificado.";

    document.getElementById('resultado').innerHTML = resultado;
}


//nombre, grupoCantante, anho, tipoMusica, localizacion = 0, prestado = false, caratula = "imagen.jpg"

window.mostrarNumeroDiscos=mostrarNumeroDiscos;
window.anhadirdisco=anhadirdisco;
window.borrarDisco=borrarDisco;
window.mostrarTablaDatos=mostrarTablaDatos;
window.consultarDisco=consultarDisco;
window.MostrarDiscosIntervalos=MostrarDiscosIntervalos
