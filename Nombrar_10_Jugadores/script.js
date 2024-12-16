const questions = [
    {
        question: "¿Cuáles son los 10 máximos goleadores del FC Barcelona?",
        correctAnswers: [
            "Lionel Messi", "César Rodríguez", "Luis Suárez", "Josep Samitier", "David Villa",
            "Ronald Koeman", "Patrick Kluivert", "Sergi Roberto", "Xavi Hernández", "Carles Rexach"
        ]
    },
    {
        question: "¿Quién ganó el Balón de Oro en 2010?",
        correctAnswers: ["Lionel Messi"]
    },
    {
        question: "¿En qué año el FC Barcelona ganó su primer título de la Champions League?",
        correctAnswers: ["1992"]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswersArray = [];

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;

    // Limpiar los inputs previos
    const inputsContainer = document.getElementById('inputs-container');
    inputsContainer.innerHTML = '';

    // Crear solo un input para las respuestas
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.id = 'answer';
    inputElement.placeholder = 'Introduce un jugador';
    inputsContainer.appendChild(inputElement);

    document.getElementById('result').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userAnswer = document.getElementById('answer').value.trim();

    if (userAnswer && !userAnswersArray.includes(userAnswer)) {
        userAnswersArray.push(userAnswer);
    }

    const correctAnswers = questions[currentQuestionIndex].correctAnswers;

    // Mostrar respuestas ingresadas
    document.getElementById('result').textContent = `Respuestas ingresadas: ${userAnswersArray.join(', ')}`;

    // Verificar si la respuesta ingresada es correcta
    if (correctAnswers.includes(userAnswer)) {
        document.getElementById('answer').style.backgroundColor = '#a4eebd'; // Correcto (verde claro)
    } else {
        document.getElementById('answer').style.backgroundColor = '#f5c6cb'; // Incorrecto (rojo claro)
    }

    // Limpiar el input para la siguiente respuesta
    document.getElementById('answer').value = '';

    // Si ya se han ingresado todos los jugadores correctos
    if (userAnswersArray.length === correctAnswers.length) {
        document.getElementById('next-btn').style.display = 'inline-block';
    }
});

function nextQuestion() {
    currentQuestionIndex++;
    userAnswersArray = []; // Resetear respuestas del usuario para la siguiente pregunta
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('result').textContent = `¡Quiz terminado! Has obtenido ${score} de ${questions.length * 10} puntos.`;
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
    }
}

// Cargar la primera pregunta
loadQuestion();
