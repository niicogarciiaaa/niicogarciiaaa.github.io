// Datos de las casillas del tablero (30 casillas)
const boardData = [
    
    { resource: 'sheep', number: 3 },
    { resource: 'wheat', number: 4 },
    { resource: 'stone', number: 5 },
    { resource: 'wood', number: 9 },
    { resource: 'stone', number: 10 },
    { resource: 'brick', number: 11 },
    { resource: 'wheat', number: 12 },
    { resource: 'sheep', number: 2 },
    { resource: 'wood', number: 6 },
    { resource: 'stone', number: 8 },
    { resource: 'sheep', number: 3 },
    { resource: 'brick', number: 5 },
    { resource: 'wheat', number: 9 },
    { resource: 'stone', number: 4 },
    { resource: 'sheep', number: 11 },
    { resource: 'wood', number: 10 },
    { resource: 'wheat', number: 2 },
    { resource: 'wood', number: 5 },
    { resource: 'stone', number: 7 },
    { resource: 'wheat', number: 3 },
    { resource: 'brick', number: 4 },
    { resource: 'sheep', number: 9 },
    { resource: 'stone', number: 6 },
    { resource: 'wheat', number: 11 },
    { resource: 'sheep', number: 10 },
    { resource: 'wood', number: 7 },
    { resource: 'stone', number: 12 },
    { resource: 'wheat', number: 6 },
    { resource: 'desert', number: 0 }, // Desierto 1
    { resource: 'desert', number: 0 }  // Desierto 2
];

// Distribución de las posiciones de los hexágonos (en forma hexagonal)
const position = [
    { x: 80, y: 30 }, { x: 120, y: 30 }, { x: 160, y: 30 },
    { x: 100, y: 70 }, { x: 140, y: 70 }, { x: 180, y: 70 },
    { x: 60, y: 110 }, { x: 100, y: 110 }, { x: 140, y: 110 }, 
    { x: 180, y: 110 },{ x: 40, y: 150 }, { x: 80, y: 150 }, 
    { x: 120, y: 150 }, { x: 160, y: 150 },{ x: 100, y: 190 }, 
    { x: 140, y: 190 }, { x: 180, y: 190 },{ x: 120, y: 230 }, 
    { x: 160, y: 230 }, { x: 100, y: 270 }, { x: 140, y: 270 },
    { x: 80, y: 270 }, { x: 120, y: 310 }, { x: 160, y: 310 }, 
    { x: 200, y: 310 },{ x: 60, y: 270 }, { x: 40, y: 230 },
    { x: 180, y: 270 }, { x: 60, y: 190 },{ x: 40, y: 110 }
];

// Lista de jugadores
let players = [];

// Inicialización del tablero
function generateBoard() {
    const boardContainer = document.getElementById('boardContainer');
    boardContainer.innerHTML = ''; // Limpiar cualquier contenido previo

    // Verificar que las longitudes de los datos y las posiciones coincidan
    if (boardData.length !== position.length) {
        console.error("El número de casillas (boardData) no coincide con el número de posiciones (position).");
        return;
    }

    // Crear los hexágonos
    boardData.forEach((tile, index) => {
        const hex = document.createElement('div');
        hex.classList.add('hex', tile.resource);
        hex.style.left = `${position[index].x}px`;
        hex.style.top = `${position[index].y}px`;

        // Añadir el emoticono de recurso
        const emoji = document.createElement('div');
        emoji.textContent = resourceEmojis[tile.resource];
        emoji.style.fontSize = '14px'; // Tamaño del emoticono ajustado
        hex.appendChild(emoji);

        // Añadir el número en la parte superior
        if (tile.resource !== 'desert') {
            const number = document.createElement('div');
            number.classList.add('number');
            number.textContent = tile.number;
            hex.appendChild(number);
        }

        boardContainer.appendChild(hex);
    });
}

// Mapeo de recursos a emoticonos
const resourceEmojis = {
    wood: '🌳',
    brick: '🧱',
    sheep: '🐑',
    wheat: '🌾',
    stone: '🪨',
    desert: '🏜️'
};

// Generar el tablero al cargar la página
generateBoard();
