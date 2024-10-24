function jugadoresComunes(convocatorias) {
    let jugadoresComunes = convocatorias[0].split(',');

    for (let i = 1; i < convocatorias.length; i++) {
        let jugadoresActuales = convocatorias[i].split(','); //convocatoria actual

        let jugadoresTemporal = [];

        for (let j = 0; j < jugadoresComunes.length; j++) { // compara los jugadores de las 2 convocatorias
            let jugador = jugadoresComunes[j];

            if (jugadoresActuales.includes(jugador)) {
                jugadoresTemporal.push(jugador);
            }
        }

        jugadoresComunes = jugadoresTemporal;
    }

    return jugadoresComunes.join(','); // devuelves los jugadores comunes separados por comas
}

const convocatorias = ["Marcos,Luis,Pepe,Manuel,Lolo", "Marcos,Luis,Pepe,David,Antonio,Pedro"];



document.getElementById("resultado").innerHTML = `Los jugadores que fueron convocados a todos los partidos son: ${jugadoresComunes(convocatorias)}`; 