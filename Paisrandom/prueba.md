Pasos a Seguir
Configura Firebase y Firestore: Asegúrate de haber configurado tu proyecto de Firebase y creado la colección countries como se describió anteriormente.

Estructura de los Documentos: Asegúrate de que cada documento en Firestore tenga la siguiente estructura:

json
Copiar código
{
    "name": "España",
    "capital": "Madrid",
    "vertical_position": "centro",
    "horizontal_position": "centro"
}
Código del Juego: Aquí tienes un ejemplo completo que integra el juego de adivinanzas con la obtención de datos de Firestore.

Ejemplo de Código Completo
html
Copiar código
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adivina el País</title>
    <script src="https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #F9F5EB;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            background: #D5CBAF;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        input {
            padding: 10px;
            margin: 10px 0;
            width: 80%;
            border: 1px solid #393E46;
            border-radius: 4px;
        }
        button {
            padding: 10px 20px;
            background-color: #08D9D6;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        #result {
            margin-top: 10px;
            color: #FF2E63;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Adivina el País</h1>
        <input type="text" id="country-input" placeholder="Escribe el país...">
        <button id="guess-button">Adivinar</button>
        <div id="result"></div>
    </div>

    <script>
        // Configuración de Firebase
        const firebaseConfig = {
            apiKey: "TU_API_KEY",
            authDomain: "TU_AUTH_DOMAIN",
            projectId: "TU_PROJECT_ID",
            storageBucket: "TU_STORAGE_BUCKET",
            messagingSenderId: "TU_MESSAGING_SENDER_ID",
            appId: "TU_APP_ID",
        };

        // Inicializa Firebase
        const app = firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();

        let countries = [];
        let currentCountry;

        // Función para obtener los países de Firestore
        async function fetchCountries() {
            try {
                const snapshot = await db.collection('countries').get();
                countries = snapshot.docs.map(doc => doc.data());
                startNewGame();
            } catch (error) {
                console.error('Error al obtener los países:', error);
            }
        }

        // Función para comenzar un nuevo juego
        function startNewGame() {
            currentCountry = countries[Math.floor(Math.random() * countries.length)];
            document.getElementById('result').textContent = '';
            document.getElementById('country-input').value = '';
        }

        // Evento de adivinanza
        document.getElementById('guess-button').addEventListener('click', () => {
            const userGuess = document.getElementById('country-input').value.trim();
            if (userGuess.toLowerCase() === currentCountry.name.toLowerCase()) {
                document.getElementById('result').textContent = '¡Correcto! El país es ' + currentCountry.name + '.';
                startNewGame();
            } else {
                document.getElementById('result').textContent = 'Incorrecto. Intenta de nuevo.';
            }
        });

        // Carga inicial
        fetchCountries();
    </script>
</body>
</html>
Descripción del Código
Firebase Setup: Asegúrate de reemplazar los valores de firebaseConfig con tu configuración real.

Fetching Data: La función fetchCountries obtiene todos los países de Firestore y los almacena en un array.

Juego de Adivinanzas:

startNewGame selecciona un país al azar y reinicia el campo de entrada y el mensaje de resultado.
Al hacer clic en el botón "Adivinar", se compara la entrada del usuario con el país actual. Si acierta, muestra un mensaje de éxito y comienza un nuevo juego.
Resumen
Este código te permite tener un juego de adivinanzas donde los países se almacenan en Firestore.
Solo necesitas asegurarte de que los documentos en Firestore estén configurados correctamente y de que la configuración de Firebase sea válida.
Si tienes más preguntas o necesitas más ayuda, ¡déjamelo saber!