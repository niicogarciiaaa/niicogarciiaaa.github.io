function buscarDNIs() {
    const letra = document.getElementById('letraInput').value.toUpperCase();
        

    const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    const dnisConLetra = [];

    // Generar DNIs del 001 al 999
    for (let i = 1; i <= 999; i++) {
        const dniNumerico = String(i).padStart(3, '0'); // DNI numérico en formato de 3 cifras
        const letraDNI = letrasDNI[i % 23]; // Calcular la letra del DNI usando dni % 23
        const dniCompleto = dniNumerico + letraDNI; // Concatenar la letra al final
        dnisConLetra.push(dniCompleto); // Agregar el DNI completo al array
    }

    // Filtrar DNIs que contienen la letra especificada
    const dnisFiltrados = dnisConLetra.filter(dni => dni.endsWith(letra));

    // Mostrar resultados
    document.getElementById('resultado').innerHTML =
         `Hay ${dnisFiltrados.length} DNI(s) que contienen la letra "${letra}":<br>${dnisFiltrados}`
         
}
