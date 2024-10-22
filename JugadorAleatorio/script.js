let players = [
    {
        name: "Diego Maradona",
        clues: [
            "Es un mediocampista argentino.",
            "Jugó en el Napoli y Barcelona.",
            "Es conocido por 'La Mano de Dios' y el 'Gol del Siglo'."
        ],
        team: "Napoli",
        status: "Retirado DEP",
        teamBadge: "./images/napoli.png"
    },
    {
        name: "Pelé",
        clues: [
            "Es un delantero brasileño.",
            "Jugó en el Santos y New York Cosmos.",
            "Ganó tres Copas del Mundo."
        ],
        team: "Santos",
        status: "Retirado DEP",
        teamBadge: "./images/santos.png"
    },
    {
        name: "Lionel Messi",
        clues: [
            "Es un delantero argentino.",
            "Juega en el Inter Miami.",
            "Es conocido por su habilidad de dribbling y capacidad goleadora."
        ],
        team: "Inter Miami",
        status: "Activo",
        teamBadge: "./images/InterMiami.png"
    },
    {
        name: "Cristiano Ronaldo",
        clues: [
            "Es un delantero portugués.",
            "Juega en el Al Nassr.",
            "Es conocido por su capacidad goleadora y habilidades físicas."
        ],
        team: "Al Nassr",
        status: "Activo",
        teamBadge: "./images/alnassr.png"
    },
    {
        name: "Neymar Jr.",
        clues: [
            "Es un delantero brasileño.",
            "Juega en el Al-Hilal.",
            "Es conocido por su habilidad de dribbling y capacidad de anotar goles."
        ],
        team: "Al-Hilal",
        status: "Activo",
        teamBadge: "./images/alhilal.png"
    },
    {
        name: "Ronaldinho",
        clues: [
            "Es un mediocampista ofensivo brasileño.",
            "Jugó en el Barcelona y AC Milan.",
            "Es conocido por su creatividad y habilidad para hacer trucos con el balón."
        ],
        team: "Fluminense",
        status: "Retirado",
        teamBadge: "./images/fluminense.png"
    },
    {
        name: "David Beckham",
        clues: [
            "Es un mediocampista inglés.",
            "Jugó en el Manchester United y LA Galaxy.",
            "Es conocido por su precisión en tiros libres."
        ],
        team: "PSG",
        status: "Retirado",
        teamBadge: "./images/psg.png"
    },
    {
        name: "Zinedine Zidane",
        clues: [
            "Es un mediocampista francés.",
            "Jugó en el Real Madrid y Juventus.",
            "Es conocido por su elegancia y control del balón."
        ],
        team: "Real Madrid",
        status: "Retirado",
        teamBadge: "./images/realMadrid.png"
    },
    {
        name: "Kylian Mbappé",
        clues: [
            "Es un delantero francés.",
            "Juega en el PSG.",
            "Es conocido por su velocidad y capacidad goleadora."
        ],
        team: "PSG",
        status: "Activo",
        teamBadge: "./images/madrid.png"
    },
    {
        name: "Luis Suárez",
        clues: [
            "Es un delantero uruguayo.",
            "Jugó en el Barcelona y Atlético de Madrid.",
            "Es conocido por su instinto goleador y su garra."
        ],
        team: "Inter Miami",
        status: "Activo",
        teamBadge: "./images/InterMiami.png"
    },
    {
        name: "Sergio Ramos",
        clues: [
            "Es un defensa español.",
            "Jugó en el Real Madrid y PSG.",
            "Es conocido por su liderazgo y capacidad para anotar goles decisivos."
        ],
        team: "Sevilla",
        status: "Activo",
        teamBadge: "./images/sevilla.png"
    },
    {
        name: "Andrés Iniesta",
        clues: [
            "Es un mediocampista español.",
            "Jugó en el Barcelona y Vissel Kobe.",
            "Es conocido por su visión de juego y técnica."
        ],
        team: "Vissel Kobe",
        status: "Retirado",
        teamBadge: "./images/viselKobe.png"
    },
    {
        name: "Xavi Hernández",
        clues: [
            "Es un mediocampista español.",
            "Jugó en el Barcelona y Al Sadd.",
            "Es conocido por su habilidad para controlar el ritmo del juego."
        ],
        team: "Al Sadd",
        status: "Retirado",
        teamBadge: "./images/alsaad.jpg"
    },
    {
        name: "Carlos Tevez",
        clues: [
            "Es un delantero argentino.",
            "Jugó en el Manchester United y Boca Juniors.",
            "Es conocido por su combatividad y capacidad goleadora."
        ],
        team: "Boca Juniors",
        status: "Retirado",
        teamBadge: "./images/bocaJuniors.png"
    },
    {
        name: "Didier Drogba",
        clues: [
            "Es un delantero marfileño.",
            "Jugó en el Chelsea y Phoenix Rising.",
            "Es conocido por su fuerza y habilidad para marcar goles en momentos cruciales."
        ],
        team: "Phoenix Rising",
        status: "Retirado",
        teamBadge: "./images/PhoenixRising.png"
    },
    {
        name: "Frank Lampard",
        clues: [
            "Es un mediocampista inglés.",
            "Jugó en el Chelsea y Manchester City.",
            "Es conocido por su capacidad para marcar goles desde el mediocampo."
        ],
        team: "New York City",
        status: "Retirado",
        teamBadge: "./images/newYorkCity.png"
    },
    {
        name: "Samuel Eto'o",
        clues: [
            "Es un delantero camerunés.",
            "Jugó en el Barcelona e Inter de Milán.",
            "Es conocido por su velocidad y capacidad goleadora."
        ],
        team: "Qatar SC",
        status: "Retirado",
        teamBadge: "./images/qatarsc.png"
    },
    {
        name: "Paolo Maldini",
        clues: [
            "Es un defensa italiano.",
            "Jugó toda su carrera en el AC Milan.",
            "Es conocido por su longevidad y liderazgo en defensa."
        ],
        team: "AC Milan",
        status: "Retirado",
        teamBadge: "./images/acmilan.png"
    },
    {
        name: "Lamine Yamal",
        clues: [
            " Es el debutante más joven del Barça.",
            "Titular más joven en la champions League",
            "Goleador más joven del Barça"
        ],
        team: "AC Barça",
        status: "Activo",
        teamBadge: "./images/barça.png"
    },
    // Agregar más jugadores según sea necesario...
    {
        name: "Robert Lewandoski",
        clues: [
            "Es un delantero Polaco",
            "Jugó en Borussia de Dormund y Bayern.",
            "Es conocido por su cantidad de goles  y liderazgo en la delantera."
        ],
        team: "Barça",
        status: "Activo",
        teamBadge: "./images/barça.png"
    },
    {
        name: "Carles Puyol",
        clues: [
            "Es un defensa Español.",
            "Jugó toda su carrera en el Barça",
            "Es conocido por su longevidad y liderazgo en defensa."
        ],
        team: "Barça",
        status: "Retirado",
        teamBadge: "./images/barça.png"
    },
    
];

let currentIndex = 0;
let correctGuesses = 0;

// Función para mezclar aleatoriamente el array de jugadores
function shufflePlayers() {
    for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [players[i], players[j]] = [players[j], players[i]];
    }
}

// Llamamos a la función de mezclado al cargar la página
shufflePlayers();

function displayClue() {
    const player = players[currentIndex];
    const clue = player.clues[Math.floor(Math.random() * player.clues.length)];
    document.getElementById('clue').textContent = clue;
    document.getElementById('team-badge').src = player.teamBadge;
    document.getElementById('team-name').textContent = `Equipo: ${player.team}`;
    document.getElementById('player-status').textContent = `Estado: ${player.status}`;
}

function suggestPlayers() {
    const input = document.getElementById('guess').value.toLowerCase();
    const suggestions = players
        .filter(player => player.name.toLowerCase().includes(input))
        .map(player => player.name);
    const suggestionsList = document.getElementById('suggestions');
    suggestionsList.innerHTML = '';
    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.onclick = () => {
            document.getElementById('guess').value = suggestion;
            suggestionsList.innerHTML = '';
        };
        suggestionsList.appendChild(li);
    });
}

function checkGuess() {
    const guess = document.getElementById('guess').value.trim().toLowerCase();
    const player = players[currentIndex];
    if (guess === player.name.toLowerCase()) {
        document.getElementById('message').textContent = '¡Correcto!';
        correctGuesses++;
        document.getElementById('counter').textContent = `Jugadores acertados: ${correctGuesses}`;
        currentIndex = (currentIndex + 1) % players.length;
        document.getElementById('guess').value = '';
        displayClue();
    } else {
        document.getElementById('message').textContent = 'Intenta de nuevo.';
    }
}

document.getElementById('guess').addEventListener('input', suggestPlayers);
document.getElementById('check-button').addEventListener('click', checkGuess);

window.onload = displayClue;