export class Edificio{
    constructor(calle,numero,cp){
        this.calle=calle;
        this.numero=numero;
        this.cp=cp;
        this.planta=[];
        
        this.puerta;
        document.getElementById("resultado").innerHTML+=`Construido un edificio en calle:${this.calle},nº${this.numero},CP:${this.cp}<br/><br/>`
    }

    agregarPlantasYPuertas(planta, puertas){
        for (let i =this.planta.length; i < planta; i++) {
            let planta = [];
            for (let j = 0; j < puertas; j++) {
                planta.push(null); // Inicialmente no hay propietarios en las puertas.
            }
            this.planta.push(planta);
        }
    }
    modificarNumero(numero){
        this.numero=numero;
    }
    modificarCalle(calle){
        this.calle=calle;
    }
    modificarCodigoPostal(codigo){
        this.cp=codigo
    }
    imprimeCalle(){
        return this.calle
    }
    imprimeNumero(){
        return this.numero
    }
    imprimeCodigoPostal(){
        return this.cp
    }

    agregarPropietario(nombre, planta, puerta) {
        // Ajustar los índices para que 1,1 se almacene en la posición [0][0]
        const adjustedPlanta = planta - 1; // Convierte 1 a 0
        const adjustedPuerta = puerta - 1;  // Convierte 1 a 0
    
        // Verificamos si la planta existe, si no, la inicializamos como un array vacío
        if (!this.planta[adjustedPlanta]) {
            this.planta[adjustedPlanta] = []; // Inicializa la planta si no existe
        }
    
        // Si la puerta no existe, la inicializamos como un string vacío
        if (!this.planta[adjustedPlanta][adjustedPuerta]) {
            this.planta[adjustedPlanta][adjustedPuerta] = ""; // Inicializa la puerta si no existe
        }
    
        // Asignamos el propietario a la puerta
        this.planta[adjustedPlanta][adjustedPuerta] = nombre;
        
        if(nombre){
        // Mostramos el mensaje solo si se ha asignado un propietario válido
        document.getElementById("resultado").innerHTML += `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.<br/>`;
    }
}
    
        
    
       
            
        imprimePlantas() {
            
            document.getElementById('resultado').innerHTML += `<br/><strong>Listado de propietarios del edificio en calle ${this.calle}, número ${this.numero}:</strong><br>`;
        
           
            for (let i = 0; i < this.planta.length; i++) {
                const puertas = this.planta[i]; 
        
                
                for (let j = 0; j < puertas.length; j++) {
                    const propietario = puertas[j]; 
                    const prop = propietario ? propietario : ""; 
                    document.getElementById('resultado').innerHTML += `Propietario del piso ${j+1} de la planta ${i+1}: ${prop}<br>`;
                }
            }
        }
        
}


