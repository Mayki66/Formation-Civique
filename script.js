let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Pour stocker ce qu'elle a répondu
let shuffledQuestions = [];

function startQuiz() {
    // Mélanger les questions pour que ce ne soit pas toujours le même ordre
    // On prend un sous-ensemble si tu as 100 questions mais qu'on en veut que 40
    shuffledQuestions = questionsData.sort(() => 0.5 - Math.random()).slice(0, 40);
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    document.getElementById('quiz-screen').classList.add('active');
    
    showQuestion();
}

function showQuestion() {
    const questionData = shuffledQuestions[currentQuestionIndex];
    document.getElementById('question-text').innerText = questionData.question;
    document.getElementById('question-count').innerText = `Question ${currentQuestionIndex + 1} / ${shuffledQuestions.length}`;
    
    // Barre de progression
    const progressPercent = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
    document.getElementById('progress').style.width = `${progressPercent}%`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // Créer un tableau d'objets temporaire pour mélanger les options tout en gardant la trace de l'index original
    let optionsWithIndex = questionData.options.map((opt, originalIndex) => {
        return { text: opt, originalIndex: originalIndex };
    });

    // Mélanger les options (algorithme de Fisher-Yates simplifié)
    optionsWithIndex.sort(() => Math.random() - 0.5);

    optionsWithIndex.forEach((optObj) => {
        const button = document.createElement('button');
        button.innerText = optObj.text; // Affiche le texte mélangé
        button.classList.add('option-btn');
        // IMPORTANT : On passe l'index ORIGINAL à la fonction de vérification
        button.onclick = () => selectOption(optObj.originalIndex);
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedIndex) {
    const questionData = shuffledQuestions[currentQuestionIndex];
    
    // On enregistre la réponse
    userAnswers.push({
        question: questionData.question,
        selected: selectedIndex,
        correct: questionData.correct,
        options: questionData.options,
        explanation: questionData.explanation
    });

    if (selectedIndex === questionData.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('result-screen').classList.add('active');

    const scoreDisplay = document.getElementById('score-display');
    const msgDisplay = document.getElementById('pass-fail-message');
    const correctionList = document.getElementById('correction-list');

    // Calcul du résultat
    // 40 questions, max 8 erreurs => il faut avoir 32/40 minimum
    const passed = score >= (shuffledQuestions.length - 8); 
    
    scoreDisplay.innerHTML = `<span class="score-badge ${passed ? 'pass' : 'fail'}">${score} / ${shuffledQuestions.length}</span>`;
    
    if (passed) {
        msgDisplay.innerHTML = "<strong>Félicitations !</strong> Vous avez réussi le test.";
        msgDisplay.style.color = "green";
    } else {
        msgDisplay.innerHTML = "<strong>Attention.</strong> Vous avez fait trop d'erreurs. Il faut réviser encore un peu.";
        msgDisplay.style.color = "#EF4135";
    }

    // Génération des explications
    correctionList.innerHTML = '';
    userAnswers.forEach((answer, index) => {
        // On affiche surtout les erreurs, mais on peut tout afficher
        const isCorrect = answer.selected === answer.correct;
        
        const item = document.createElement('div');
        item.classList.add('correction-item');
        if (isCorrect) item.classList.add('correct-answer'); // Optionnel si on veut marquer les justes différemment

        const statusIcon = isCorrect ? "✅" : "❌";
        
        item.innerHTML = `
            <div><strong>${index + 1}. ${answer.question}</strong></div>
            <div style="color: ${isCorrect ? 'green' : 'red'}">Votre réponse : ${answer.options[answer.selected]} ${statusIcon}</div>
            ${!isCorrect ? `<div style="color: green">Bonne réponse : ${answer.options[answer.correct]}</div>` : ''}
            <div class="explanation-text">💡 ${answer.explanation}</div>
        `;
        correctionList.appendChild(item);
    });
}

function restartQuiz() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('start-screen').classList.add('active');
}