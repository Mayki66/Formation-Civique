let currentQuestionIndex = 0;
let userAnswers = {}; 
let currentQuestions = []; // Les questions de la session en cours
let timerInterval;
const EXAM_TIME = 45 * 60; // 45 min
let timeRemaining = EXAM_TIME;
let isExamMode = true; // Pour savoir si on gère le timer et le score strict

// --- GESTION DES ÉCRANS ---
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
    document.getElementById(screenId).classList.add('active');
}

function goHome() {
    clearInterval(timerInterval);
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('mode-indicator').classList.add('hidden');
    showScreen('home-screen');
}

// --- INITIALISATION THEMES ---
// Récupère la liste unique des thèmes depuis questions.js
function getUniqueThemes() {
    const themes = new Set(questionsData.map(q => q.theme));
    return Array.from(themes).sort();
}

function showThemes() {
    const grid = document.getElementById('themes-grid');
    grid.innerHTML = '';
    const themes = getUniqueThemes();

    themes.forEach(theme => {
        const btn = document.createElement('button');
        btn.innerText = theme;
        btn.className = 'theme-btn';
        // Compte le nombre de questions pour ce thème
        const count = questionsData.filter(q => q.theme === theme).length;
        btn.innerHTML = `${theme} <br><span style="font-size:0.8em; font-weight:normal">${count} questions</span>`;
        
        btn.onclick = () => startTraining(theme);
        grid.appendChild(btn);
    });
    showScreen('theme-screen');
}

// --- MOTEUR DU QUIZ ---

// Mode 1 : Examen (40 questions, timer, toutes catégories)
function startExam() {
    isExamMode = true;
    // Mélange total
    let allQuestions = [...questionsData].sort(() => 0.5 - Math.random());
    currentQuestions = allQuestions.slice(0, 40);
    
    setupQuizUI("Examen Blanc");
    startTimer();
}

// Mode 2 : Entraînement (Questions filtrées, pas de timer)
function startTraining(theme) {
    isExamMode = false;
    // Filtre par thème
    let themeQuestions = questionsData.filter(q => q.theme === theme);
    // Mélange
    currentQuestions = themeQuestions.sort(() => 0.5 - Math.random());
    
    setupQuizUI(`Entraînement : ${theme}`);
    document.getElementById('timer').classList.add('hidden'); // Pas de timer
}

function setupQuizUI(modeTitle) {
    currentQuestionIndex = 0;
    userAnswers = {};
    timeRemaining = EXAM_TIME;
    
    document.getElementById('mode-indicator').innerText = modeTitle;
    document.getElementById('mode-indicator').classList.remove('hidden');
    
    if(isExamMode) document.getElementById('timer').classList.remove('hidden');

    showScreen('quiz-screen');
    showQuestion();
}

// --- LOGIQUE COMMUNE ---

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    
    document.getElementById('theme-display').innerText = q.theme;
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('question-count').innerText = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    
    if (currentQuestionIndex === 0) btnPrev.classList.add('hidden');
    else btnPrev.classList.remove('hidden');

    // Visibilité du bouton suivant
    if (userAnswers[currentQuestionIndex] !== undefined) {
        btnNext.classList.remove('hidden');
    } else {
        btnNext.classList.add('hidden');
    }

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // Mélange des options
    let optionsMap = q.options.map((text, idx) => ({ text, originalIdx: idx }));
    // On utilise une graine simple basée sur l'index de la question pour que le mélange reste le même si on revient en arrière
    // (Astuce simple : on remélange aléatoirement ici, c'est acceptable)
    optionsMap.sort(() => Math.random() - 0.5);

    optionsMap.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.className = 'option-btn';
        if (userAnswers[currentQuestionIndex] === opt.originalIdx) {
            btn.classList.add('selected');
        }
        btn.onclick = () => selectOption(opt.originalIdx);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(originalIndex) {
    userAnswers[currentQuestionIndex] = originalIndex;
    
    // Mise à jour UI
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.classList.remove('selected'));
    event.target.classList.add('selected');

    document.getElementById('btn-next').classList.remove('hidden');

    // Auto-next fluide
    setTimeout(() => {
        if(currentQuestionIndex < currentQuestions.length - 1) {
            nextQuestion();
        } else {
            finishQuiz();
        }
    }, 300);
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// --- TIMER & FIN ---
function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) finishQuiz(true);
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    const el = document.getElementById('timer');
    el.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    el.style.color = timeRemaining < 120 ? "#EF4135" : "inherit";
}

function finishQuiz(timeOut = false) {
    clearInterval(timerInterval);
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('mode-indicator').classList.add('hidden');

    let score = 0;
    currentQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) score++;
    });

    // Seuil de réussite (80%)
    const threshold = Math.ceil(currentQuestions.length * 0.8);
    const passed = score >= threshold;

    showScreen('result-screen');
    const resultScreen = document.getElementById('result-screen');
    const msg = document.getElementById('pass-fail-message');

    document.getElementById('score-number').innerText = score;
    document.getElementById('score-total-display').innerText = `/ ${currentQuestions.length}`;

    if (isExamMode) {
        if (passed) {
            resultScreen.className = "screen active pass";
            msg.innerHTML = "<strong>Félicitations !</strong> Examen réussi 🎉";
        } else {
            resultScreen.className = "screen active fail";
            msg.innerHTML = timeOut ? "<strong>Temps écoulé !</strong>" : "<strong>Échec.</strong> Encore un effort !";
        }
    } else {
        // Mode entraînement : on est plus bienveillant
        resultScreen.className = "screen active " + (passed ? "pass" : "fail");
        msg.innerHTML = passed ? "Super session !" : "Continuez à vous entraîner.";
    }

    // Génération correction
    const list = document.getElementById('correction-list');
    list.innerHTML = '';
    currentQuestions.forEach((q, idx) => {
        const userRepIdx = userAnswers[idx];
        const isCorrect = userRepIdx === q.correct;
        const userText = userRepIdx !== undefined ? q.options[userRepIdx] : "Pas de réponse";
        const item = document.createElement('div');
        item.className = `correction-item ${isCorrect ? 'correct' : 'wrong'}`;
        item.innerHTML = `
            <div style="font-weight:bold; margin-bottom:5px;">${idx+1}. ${q.question}</div>
            <div style="font-size:0.9rem; color:${isCorrect ? '#27ae60' : '#c0392b'}">Votre réponse : ${userText} ${isCorrect?'✅':'❌'}</div>
            ${!isCorrect ? `<div style="font-size:0.9rem; color:#27ae60">Bonne réponse : ${q.options[q.correct]}</div>` : ''}
            <div style="margin-top:5px; font-style:italic; font-size:0.85rem; color:#7f8c8d">💡 ${q.explanation}</div>
        `;
        list.appendChild(item);
    });
}

function toggleTheme() {
    const body = document.body;
    body.setAttribute('data-theme', body.getAttribute('data-theme')==='dark'?'light':'dark');
}