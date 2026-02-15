let currentQuestionIndex = 0;
let userAnswers = {}; // Objet pour stocker les réponses par index {0: 1, 1: 3, ...}
let shuffledQuestions = [];
let timerInterval;
const TIME_LIMIT = 45 * 60; // 45 minutes en secondes
let timeRemaining = TIME_LIMIT;

// --- GESTION DU THÈME (DARK/LIGHT) ---
function toggleTheme() {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
}

// --- MOTEUR DU QUIZ ---
function startQuiz() {
    // Mélange et sélectionne 40 questions (ou moins si pas assez)
    shuffledQuestions = questionsData.sort(() => 0.5 - Math.random()).slice(0, 40);
    
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = TIME_LIMIT;
    
    // Interface
    document.getElementById('start-screen').classList.replace('active', 'hidden');
    document.getElementById('result-screen').classList.replace('active', 'hidden');
    document.getElementById('quiz-screen').classList.replace('hidden', 'active');
    document.getElementById('timer').classList.remove('hidden');
    
    startTimer();
    showQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            finishQuiz(); // Temps écoulé
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById('timer').innerText = 
        `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
    // Alerte visuelle si moins de 2 minutes
    if (timeRemaining < 120) document.getElementById('timer').style.color = "red";
    else document.getElementById('timer').style.color = "inherit";
}

function showQuestion() {
    const questionData = shuffledQuestions[currentQuestionIndex];
    
    // Affichage Textes
    document.getElementById('theme-display').innerText = questionData.theme || "Culture Générale";
    document.getElementById('question-text').innerText = questionData.question;
    document.getElementById('question-count').innerText = `${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;
    
    // Barre de progression
    const progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;

    // Gestion du bouton "Précédent"
    const btnPrev = document.getElementById('btn-prev');
    if (currentQuestionIndex === 0) btnPrev.classList.add('hidden');
    else btnPrev.classList.remove('hidden');

    // Génération des options (Mélangées)
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // On prépare les options avec leur index d'origine pour savoir laquelle est la bonne
    let optionsWithIndex = questionData.options.map((opt, originalIndex) => {
        return { text: opt, originalIndex: originalIndex };
    });
    // On mélange l'affichage
    optionsWithIndex.sort(() => Math.random() - 0.5);

    optionsWithIndex.forEach((optObj) => {
        const button = document.createElement('button');
        button.innerText = optObj.text;
        button.classList.add('option-btn');
        
        // Si l'utilisateur a déjà répondu à cette question (en revenant en arrière), on met en surbrillance
        if (userAnswers[currentQuestionIndex] === optObj.originalIndex) {
            button.classList.add('selected');
        }

        button.onclick = () => selectOption(optObj.originalIndex);
        optionsContainer.appendChild(button);
    });
}

function selectOption(originalIndex) {
    // Sauvegarde la réponse
    userAnswers[currentQuestionIndex] = originalIndex;

    // Passe à la suivante après un court délai (pour voir le clic)
    setTimeout(() => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            finishQuiz();
        }
    }, 200); // 200ms de délai pour fluidité
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function quitQuiz() {
    if(confirm("Voulez-vous vraiment quitter l'examen en cours ?")) {
        clearInterval(timerInterval);
        location.reload(); // Recharge la page pour revenir au début
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    
    // Calcul du score final
    let score = 0;
    shuffledQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) {
            score++;
        }
    });

    document.getElementById('quiz-screen').classList.replace('active', 'hidden');
    document.getElementById('result-screen').classList.replace('hidden', 'active');
    document.getElementById('timer').classList.add('hidden');

    const scoreDisplay = document.getElementById('score-display');
    const msgDisplay = document.getElementById('pass-fail-message');
    const correctionList = document.getElementById('correction-list');

    // 40 questions, max 8 erreurs => réussite à 32/40 (80%)
    // Adaptation dynamique si moins de questions
    const threshold = Math.ceil(shuffledQuestions.length * 0.8);
    const passed = score >= threshold;
    
    scoreDisplay.innerHTML = `<span class="score-badge ${passed ? 'pass' : 'fail'}">${score} / ${shuffledQuestions.length}</span>`;
    
    if (passed) {
        msgDisplay.innerHTML = "<strong>Félicitations !</strong> Vous avez réussi le test.";
        msgDisplay.className = "pass";
    } else {
        msgDisplay.innerHTML = "<strong>Échec.</strong> Trop d'erreurs (Max autorisé : " + (shuffledQuestions.length - threshold) + ").";
        msgDisplay.className = "fail";
    }

    // Affichage des corrections
    correctionList.innerHTML = '';
    shuffledQuestions.forEach((q, index) => {
        const userAnswerIndex = userAnswers[index];
        const isCorrect = userAnswerIndex === q.correct;
        const userText = (userAnswerIndex !== undefined) ? q.options[userAnswerIndex] : "Aucune réponse";
        const correctText = q.options[q.correct];

        const item = document.createElement('div');
        item.classList.add('correction-item');
        if (isCorrect) item.classList.add('correct-answer');

        item.innerHTML = `
            <div><strong>${index + 1}. ${q.question}</strong> <span style="font-size:0.8em; color:grey">(${q.theme || 'Divers'})</span></div>
            <div style="color: ${isCorrect ? 'green' : 'red'}">Votre réponse : ${userText} ${isCorrect ? '✅' : '❌'}</div>
            ${!isCorrect ? `<div style="color: green; font-weight:bold;">Bonne réponse : ${correctText}</div>` : ''}
            <div style="font-style: italic; margin-top:5px; font-size:0.9em">${q.explanation}</div>
        `;
        correctionList.appendChild(item);
    });
}

function restartQuiz() {
    location.reload();
}