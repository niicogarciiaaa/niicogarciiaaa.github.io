class Edificio {
    constructor(calle, numero, cp) {
      this.calle = calle;
      this.numero = numero;
      this.cp = cp;
      this.planta = [];

      this.puerta;
      document.getElementById(
        "resultado"
      ).innerHTML += `Construido un edificio en calle:${this.calle},nº${this.numero},CP:${this.cp}<br/><br/>`;
    }

    agregarPlantasYPuertas(planta, puertas) {
      for (let i = this.planta.length; i < planta; i++) {
        let planta = [];
        for (let j = 0; j < puertas; j++) {
          planta.push(null); // Inicialmente no hay propietarios en las puertas.
        }
        this.planta.push(planta);
      }
    }
    modificarNumero(numero) {
      this.numero = numero;
    }
    modificarCalle(calle) {
      this.calle = calle;
    }
    modificarCodigoPostal(codigo) {
      this.cp = codigo;
    }
    imprimeCalle() {
      return this.calle;
    }
    imprimeNumero() {
      return this.numero;
    }
    imprimeCodigoPostal() {
      return this.cp;
    }

    agregarPropietario(nombre, planta, puerta) {
      // Ajustar los índices para que 1,1 se almacene en la posición [0][0]
      const adjustedPlanta = planta - 1; // Convierte 1 a 0
      const adjustedPuerta = puerta - 1; // Convierte 1 a 0

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

      if (nombre) {
        // Mostramos el mensaje solo si se ha asignado un propietario válido
        document.getElementById(
          "resultado"
        ).innerHTML += `${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.<br/>`;
      }
    }

    imprimePlantas() {
      document.getElementById(
        "resultado"
      ).innerHTML += `<br/><strong>Listado de propietarios del edificio en calle ${this.calle}, número ${this.numero}:</strong><br>`;

      for (let i = 0; i < this.planta.length; i++) {
        const puertas = this.planta[i];

        for (let j = 0; j < puertas.length; j++) {
          const propietario = puertas[j];
          const prop = propietario ? propietario : "";
          document.getElementById(
            "resultado"
          ).innerHTML += `Propietario del piso ${j + 1} de la planta ${
            i + 1
          }: ${prop}<br>`;
        }
      }
    }
  }



let EdificioA = new Edificio("Garcia Prieto","58","15706");
let EdificioB = new Edificio("Camino Caneiro","29","32004");
let EdificioC = new Edificio("San Clemente","s/n","15705");

EdificioA.agregarPlantasYPuertas("2","3");

document.getElementById("resultado").innerHTML += `El codigo postal del edificioA es:${EdificioA.imprimeCodigoPostal()}<br/>`;
document.getElementById("resultado").innerHTML += `La calle del edicicio C es: ${EdificioC.imprimeCalle()}<br/>`;
document.getElementById("resultado").innerHTML += `La calle del edicicio B es:${EdificioB.imprimeCalle()} y el numero es:${EdificioB.imprimeNumero()}  <br/>`;

//planta puerta
EdificioA.agregarPropietario("Jose Antonio Lopez",1,1);
EdificioA.agregarPropietario("Luisa Martínez",1,2);
EdificioA.agregarPropietario("Marta Castellón",1,3);
EdificioA.agregarPropietario("",2,1);
EdificioA.agregarPropietario("Antonio Pereira",2,2);
EdificioA.imprimePlantas();

EdificioA.agregarPlantasYPuertas(1, 3);
EdificioA.agregarPropietario("Pedro Meijide", 3, 2);
EdificioA.imprimePlantas();