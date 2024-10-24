// Clase Cliente
class Cliente {
    constructor(nombre, localidad, cuota) {
        this.nombre = nombre;
        this.localidad = localidad;
        this.cuota = cuota;
    }
}

// Array de clientes
const clientes = [
    new Cliente('Laura', 'Santander', 50),
    new Cliente('Álvaro', 'Castro', 50),
    new Cliente('Igor', 'Castro', 60),
    new Cliente('Ivan', 'Santander', 40),
    new Cliente('Mónica', 'Zamora', 30),
    new Cliente('Javi', 'Bilbao', 30),
    new Cliente('David', 'Bilbao', 50)
];

// Función para mostrar todos los clientes en una tabla
function mostrarTodosLosClientes() {
    const tabla = generarTabla(clientes);
    document.getElementById('resultado').innerHTML = tabla;
}

// Función para mostrar clientes por localidad
function mostrarClientesPorLocalidad() {
    const localidad = document.getElementById('localidadInput').value.trim();
    if (localidad === "") {
        alert("Por favor, introduce una localidad.");
        return;
    }

    const clientesPorLocalidad = clientes.filter(cliente => cliente.localidad.toLowerCase() === localidad.toLowerCase());
    
    if (clientesPorLocalidad.length > 0) {
        const tabla = generarTabla(clientesPorLocalidad);
        document.getElementById('resultado').innerHTML = tabla;
    } else {
        document.getElementById('resultado').innerHTML = `No hay clientes en la localidad de ${localidad}.`;
    }
}

// Función para mostrar clientes con cuota mayor que un valor
function mostrarClientesPorCuota() {
    const cuota = parseInt(document.getElementById('cuotaInput').value);
    if (isNaN(cuota)) {
        alert("Por favor, introduce una cuota válida.");
        return;
    }

    const clientesPorCuota = clientes.filter(cliente => cliente.cuota > cuota);
    
    if (clientesPorCuota.length > 0) {
        const tabla = generarTabla(clientesPorCuota);
        document.getElementById('resultado').innerHTML = tabla;
    } else {
        document.getElementById('resultado').innerHTML = `No hay clientes con una cuota superior a ${cuota}.`;
    }
}

// Función para generar una tabla a partir de un array de clientes
function generarTabla(arrayClientes) {
    let tabla = `<table>
                    <tr>
                        <th>Nombre</th>
                        <th>Localidad</th>
                        <th>Cuota</th>
                    </tr>`;

    for (let i = 0; i < arrayClientes.length; i++) {
        tabla += `<tr>
                    <td>${arrayClientes[i].nombre}</td>
                    <td>${arrayClientes[i].localidad}</td>
                    <td>${arrayClientes[i].cuota}</td>
                  </tr>`;
    }

    tabla += `</table>`;
    return tabla;
}

