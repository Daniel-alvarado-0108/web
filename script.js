let noButton = document.getElementById('noButton');
let yesButton = document.getElementById('yesButton');
let confirmButton = document.getElementById('confirmButton');
let attempts = 0;

// Array de preguntas
const questions = [
    "¿Estás segura?",
    "¿Estás completamente segura?",
    "¿Última oportunidad seguraaaa?",
    "¿Realmente no me vas a perdonar?"
];

// Lógica del botón "No"
noButton.addEventListener('click', function () {
    // Ocultar el botón "No" y mostrar el botón "Sí, sí estoy segura"
    noButton.classList.add('d-none'); // Oculta el botón "No"
    confirmButton.classList.remove('d-none'); // Muestra el botón "Sí, sí estoy segura"

    // Mostrar la primera pregunta de inmediato
    const questionDiv = document.createElement("div");
    questionDiv.textContent = questions[attempts]; // Mostrar la primera pregunta
    questionDiv.className = "alert alert-warning mt-3";
    questionDiv.id = "questionDiv"; // Añadir un ID para identificarlo
    document.querySelector(".card").appendChild(questionDiv);

    // Aumentar el contador de intentos
    attempts++;
});

// Lógica del botón "Sí, sí estoy segura"
confirmButton.addEventListener('click', function () {
    if (attempts < questions.length) {
        // Actualizar la pregunta existente
        const questionDiv = document.getElementById("questionDiv");
        questionDiv.textContent = questions[attempts]; // Cambiar al siguiente mensaje

        // Incrementar el contador de intentos
        attempts++;

        // Aumentar el tamaño del botón "Sí" con cada intento
        yesButton.style.transform = `scale(${1 + attempts * 0.2})`;
    }

    // Si se alcanzan los 4 intentos
    if (attempts === questions.length) {
        // Ocultar el botón "Sí, sí estoy segura"
        confirmButton.classList.add('d-none');

        // Mostrar el botón final "¡Sí, te perdono!"
        yesButton.classList.remove('d-none');
        yesButton.textContent = "¡Sí, te perdono!";
        yesButton.classList.add('btn-success');
        yesButton.style.transform = "scale(1.5)";
    }
});

// Lógica del botón "Sí, te perdono"
yesButton.addEventListener('click', function () {
    window.location.href = "index2.html"; // Redirige al segundo index
});
