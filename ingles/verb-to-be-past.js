// Verb TO BE Past Tense Application
const verbToBePastData = {
  sentences: [
    {
      text: "I ___ very tired after the long journey.",
      answer: "was",
      subject: "I",
      translation: "Estaba muy cansado después del largo viaje.",
      hint: "El sujeto es 'I' (primera persona singular)",
      explanation: "Usamos 'was' con 'I' porque es primera persona singular."
    },
    {
      text: "You ___ my best friend in high school.",
      answer: "were",
      subject: "You",
      translation: "Eras mi mejor amigo en la secundaria.",
      hint: "El sujeto es 'You' (segunda persona)",
      explanation: "Usamos 'were' con 'you' siempre, sin importar si es singular o plural."
    },
    {
      text: "She ___ a brilliant student.",
      answer: "was",
      subject: "She",
      translation: "Ella era una estudiante brillante.",
      hint: "El sujeto es 'She' (tercera persona singular)",
      explanation: "Usamos 'was' con 'she' porque es tercera persona singular."
    },
    {
      text: "We ___ at the beach last summer.",
      answer: "were",
      subject: "We",
      translation: "Estuvimos en la playa el verano pasado.",
      hint: "El sujeto es 'We' (primera persona plural)",
      explanation: "Usamos 'were' con 'we' porque es plural."
    },
    {
      text: "They ___ very happy with the results.",
      answer: "were",
      subject: "They",
      translation: "Estaban muy contentos con los resultados.",
      hint: "El sujeto es 'They' (tercera persona plural)",
      explanation: "Usamos 'were' con 'they' porque es plural."
    },
    {
      text: "The weather ___ perfect for a picnic.",
      answer: "was",
      subject: "The weather",
      translation: "El clima estaba perfecto para un picnic.",
      hint: "El sujeto es 'The weather' (singular, equivale a 'it')",
      explanation: "Usamos 'was' porque 'the weather' es singular (como 'it')."
    },
    {
      text: "My parents ___ worried about me.",
      answer: "were",
      subject: "My parents",
      translation: "Mis padres estaban preocupados por mí.",
      hint: "El sujeto es 'My parents' (plural, equivale a 'they')",
      explanation: "Usamos 'were' porque 'my parents' es plural (como 'they')."
    },
    {
      text: "The movie ___ really boring.",
      answer: "was",
      subject: "The movie",
      translation: "La película estaba realmente aburrida.",
      hint: "El sujeto es 'The movie' (singular, equivale a 'it')",
      explanation: "Usamos 'was' porque 'the movie' es singular (como 'it')."
    },
    {
      text: "You and I ___ in the same class.",
      answer: "were",
      subject: "You and I",
      translation: "Tú y yo estábamos en la misma clase.",
      hint: "El sujeto es 'You and I' (plural, equivale a 'we')",
      explanation: "Usamos 'were' porque 'you and I' es plural (como 'we')."
    },
    {
      text: "The children ___ playing in the garden.",
      answer: "were",
      subject: "The children",
      translation: "Los niños estaban jugando en el jardín.",
      hint: "El sujeto es 'The children' (plural, equivale a 'they')",
      explanation: "Usamos 'were' porque 'the children' es plural (como 'they')."
    },
    {
      text: "It ___ a beautiful day yesterday.",
      answer: "was",
      subject: "It",
      translation: "Fue un día hermoso ayer.",
      hint: "El sujeto es 'It' (tercera persona singular)",
      explanation: "Usamos 'was' con 'it' porque es tercera persona singular."
    },
    {
      text: "The books ___ on the table.",
      answer: "were",
      subject: "The books",
      translation: "Los libros estaban sobre la mesa.",
      hint: "El sujeto es 'The books' (plural, equivale a 'they')",
      explanation: "Usamos 'were' porque 'the books' es plural (como 'they')."
    },
    {
      text: "He ___ the captain of the team.",
      answer: "was",
      subject: "He",
      translation: "Él era el capitán del equipo.",
      hint: "El sujeto es 'He' (tercera persona singular)",
      explanation: "Usamos 'was' con 'he' porque es tercera persona singular."
    },
    {
      text: "The students ___ excited about the trip.",
      answer: "were",
      subject: "The students",
      translation: "Los estudiantes estaban emocionados por el viaje.",
      hint: "El sujeto es 'The students' (plural, equivale a 'they')",
      explanation: "Usamos 'were' porque 'the students' es plural (como 'they')."
    },
    {
      text: "My sister ___ a doctor in that hospital.",
      answer: "was",
      subject: "My sister",
      translation: "Mi hermana era doctora en ese hospital.",
      hint: "El sujeto es 'My sister' (singular, equivale a 'she')",
      explanation: "Usamos 'was' porque 'my sister' es singular (como 'she')."
    },
    {
      text: "The cats ___ sleeping on the sofa.",
      answer: "were",
      subject: "The cats",
      translation: "Los gatos estaban durmiendo en el sofá.",
      hint: "El sujeto es 'The cats' (plural, equivale a 'they')",
      explanation: "Usamos 'were' porque 'the cats' es plural (como 'they')."
    },
    {
      text: "I ___ not ready for the exam.",
      answer: "was",
      subject: "I",
      translation: "No estaba listo para el examen.",
      hint: "El sujeto es 'I' (primera persona singular)",
      explanation: "Usamos 'was' con 'I' porque es primera persona singular."
    },
    {
      text: "The food ___ delicious at the restaurant.",
      answer: "was",
      subject: "The food",
      translation: "La comida estaba deliciosa en el restaurante.",
      hint: "El sujeto es 'The food' (singular, equivale a 'it')",
      explanation: "Usamos 'was' porque 'the food' es singular (como 'it')."
    },
    {
      text: "We ___ neighbors for many years.",
      answer: "were",
      subject: "We",
      translation: "Fuimos vecinos durante muchos años.",
      hint: "El sujeto es 'We' (primera persona plural)",
      explanation: "Usamos 'were' con 'we' porque es plural."
    },
    {
      text: "The party ___ fantastic last night.",
      answer: "was",
      subject: "The party",
      translation: "La fiesta estuvo fantástica anoche.",
      hint: "El sujeto es 'The party' (singular, equivale a 'it')",
      explanation: "Usamos 'was' porque 'the party' es singular (como 'it')."
    },
    {
      text: "You ___ always kind to everyone.",
      answer: "were",
      subject: "You",
      translation: "Siempre eras amable con todos.",
      hint: "El sujeto es 'You' (segunda persona)",
      explanation: "Usamos 'were' con 'you' siempre, sin importar si es singular o plural."
    },
    {
      text: "The flowers ___ beautiful in spring.",
      answer: "were",
      subject: "The flowers",
      translation: "Las flores estaban hermosas en primavera.",
      hint: "El sujeto es 'The flowers' (plural, equivale a 'they')",
      explanation: "Usamos 'were' porque 'the flowers' es plural (como 'they')."
    },
    {
      text: "My brother ___ afraid of the dark.",
      answer: "was",
      subject: "My brother",
      translation: "Mi hermano tenía miedo de la oscuridad.",
      hint: "El sujeto es 'My brother' (singular, equivale a 'he')",
      explanation: "Usamos 'was' porque 'my brother' es singular (como 'he')."
    },
    {
      text: "The teachers ___ very patient with us.",
      answer: "were",
      subject: "The teachers",
      translation: "Los profesores eran muy pacientes con nosotros.",
      hint: "El sujeto es 'The teachers' (plural, equivale a 'they')",
      explanation: "Usamos 'were' porque 'the teachers' es plural (como 'they')."
    },
    {
      text: "The concert ___ amazing last weekend.",
      answer: "was",
      subject: "The concert",
      translation: "El concierto estuvo increíble el fin de semana pasado.",
      hint: "El sujeto es 'The concert' (singular, equivale a 'it')",
      explanation: "Usamos 'was' porque 'the concert' es singular (como 'it')."
    }
  ]
};

// Application state
let currentSentenceIndex = 0;
let userPoints = parseInt(localStorage.getItem('verbToBePastPoints') || '0');
let exercisesCompleted = parseInt(localStorage.getItem('verbToBePastExercises') || '0');
let correctAnswers = 0;
let totalAnswers = 0;
let currentStreak = 0;
let perfectStreak = parseInt(localStorage.getItem('verbToBePastStreak') || '0');
let currentLevel = localStorage.getItem('verbToBePastLevel') || 'Principiante';
let currentTheorySection = 1;

// Motivational quotes
const motivationalQuotes = [
  "¡Cada error es un paso más cerca del éxito! Nunca te rindas.",
  "Tu dedicación y esfuerzo te llevarán lejos. ¡Sigue así!",
  "Aprender inglés es como construir un castillo: ladrillo a ladrillo.",
  "¡Eres más fuerte de lo que crees! Cada día mejoras más.",
  "La práctica hace al maestro. ¡Tú puedes dominar esto!",
  "Cada palabra que aprendes es un tesoro para toda la vida.",
  "¡Tu progreso es inspirador! Sigue brillando como la estrella que eres."
];

// Celebration messages
const celebrationMessages = {
  correct: [
    "¡Perfecto! 🌟 Tienes un talento natural",
    "¡Excelente! ⭐ Tu esfuerzo está dando frutos",
    "¡Fantástico! 💫 Dominas esto perfectamente",
    "¡Increíble! ✨ Eres una estrella del inglés",
    "¡Genial! 🎉 Tu dedicación se nota mucho"
  ],
  encouragement: [
    "¡No te preocupes! 💪 Los errores nos ayudan a crecer",
    "¡Sigue intentando! 🌱 Cada intento te hace más fuerte",
    "¡Ánimo! 🦋 Todos los expertos empezaron así",
    "¡Paciencia! 🌸 Aprender lleva tiempo y es normal",
    "¡Tú puedes! 💝 Cada error es una lección valiosa"
  ]
};

// Points and progress management
function addPoints(points, reason = '') {
  userPoints += points;
  updateLevel();
  saveProgress();
  showPointsAnimation(points, reason);
  updatePointsDisplay();
}

function updateLevel() {
  if (userPoints >= 1000) {
    currentLevel = 'Experto';
  } else if (userPoints >= 500) {
    currentLevel = 'Avanzado';
  } else if (userPoints >= 200) {
    currentLevel = 'Intermedio';
  } else {
    currentLevel = 'Principiante';
  }
}

function saveProgress() {
  localStorage.setItem('verbToBePastPoints', userPoints.toString());
  localStorage.setItem('verbToBePastExercises', exercisesCompleted.toString());
  localStorage.setItem('verbToBePastStreak', perfectStreak.toString());
  localStorage.setItem('verbToBePastLevel', currentLevel);
}

function updatePointsDisplay() {
  const elements = {
    'total-points': userPoints,
    'menu-points': userPoints,
    'theory-points': userPoints,
    'sentence-score': userPoints,
    'exercises-completed': exercisesCompleted,
    'current-level': currentLevel,
    'menu-level': currentLevel,
    'current-streak': currentStreak,
    'menu-streak': currentStreak,
    'perfect-streak': perfectStreak
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
  
  // Update accuracy rate
  const accuracyRate = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;
  const accuracyElement = document.getElementById('accuracy-rate');
  if (accuracyElement) accuracyElement.textContent = `${accuracyRate}%`;
}

function showPointsAnimation(points, reason) {
  const animation = document.createElement('div');
  animation.className = 'points-animation';
  animation.innerHTML = `
    <div class="points-popup">
      <i class="fas fa-star pulse"></i>
      <span>+${points} puntos</span>
      ${reason ? `<small>${reason}</small>` : ''}
    </div>
  `;
  
  document.body.appendChild(animation);
  
  setTimeout(() => {
    animation.classList.add('animate-out');
    setTimeout(() => {
      if (document.body.contains(animation)) {
        document.body.removeChild(animation);
      }
    }, 500);
  }, 2500);
}

function getRandomMessage(type) {
  const messages = celebrationMessages[type] || celebrationMessages.correct;
  return messages[Math.floor(Math.random() * messages.length)];
}

// Screen navigation
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function showMainMenu() {
  showScreen('main-menu');
  updatePointsDisplay();
}

function goToMainApp() {
  window.location.href = 'index.html';
}

function startExercise(exerciseType) {
  switch(exerciseType) {
    case 'theory':
      initTheory();
      break;
    case 'complete-sentences':
      initCompleteSentences();
      break;
    case 'negative-questions':
      // Implementation for negative-questions
      break;
    case 'conversations':
      // Implementation for conversations
      break;
    case 'mixed-practice':
      // Implementation for mixed-practice
      break;
    case 'master-challenge':
      // Implementation for master-challenge
      break;
  }
  
  showScreen(exerciseType);
}

// Theory functionality
function initTheory() {
  currentTheorySection = 1;
  showTheorySection(1);
}

function showTheorySection(sectionNumber) {
  document.querySelectorAll('.theory-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById(`theory-${sectionNumber}`).classList.add('active');
  currentTheorySection = sectionNumber;
}

function nextTheorySection() {
  if (currentTheorySection < 3) {
    showTheorySection(currentTheorySection + 1);
  }
}

function prevTheorySection() {
  if (currentTheorySection > 1) {
    showTheorySection(currentTheorySection - 1);
  }
}

// Complete Sentences functionality
function initCompleteSentences() {
  currentSentenceIndex = 0;
  correctAnswers = 0;
  totalAnswers = 0;
  currentStreak = 0;
  
  document.getElementById('sentence-results').classList.add('hidden');
  document.getElementById('sentence-container').classList.remove('hidden');
  
  showSentence();
}

function showSentence() {
  const sentence = verbToBePastData.sentences[currentSentenceIndex];
  const progress = ((currentSentenceIndex + 1) / verbToBePastData.sentences.length) * 100;
  
  // Update progress
  document.getElementById('sentence-progress').innerHTML = 
    `<i class="fas fa-pen-to-square"></i> Oración ${currentSentenceIndex + 1} de ${verbToBePastData.sentences.length}`;
  document.getElementById('sentence-progress-fill').style.width = `${progress}%`;
  
  // Update sentence number
  document.getElementById('current-sentence-num').textContent = currentSentenceIndex + 1;
  
  // Show sentence with blank
  document.getElementById('sentence-text').innerHTML = sentence.text.replace('___', '<span class="blank">___</span>');
  
  // Reset buttons
  document.getElementById('was-btn').classList.remove('selected', 'correct', 'incorrect');
  document.getElementById('were-btn').classList.remove('selected', 'correct', 'incorrect');
  document.getElementById('was-btn').disabled = false;
  document.getElementById('were-btn').disabled = false;
  
  // Hide feedback and help sections
  document.getElementById('sentence-feedback').classList.add('hidden');
  document.getElementById('grammar-hint').classList.add('hidden');
  document.getElementById('translation-help').classList.add('hidden');
  
  // Update accuracy display
  const accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 100;
  document.getElementById('sentence-accuracy').textContent = `${accuracy}%`;
}

function selectAnswer(selectedAnswer) {
  const sentence = verbToBePastData.sentences[currentSentenceIndex];
  const correctAnswer = sentence.answer;
  
  totalAnswers++;
  
  // Disable buttons
  document.getElementById('was-btn').disabled = true;
  document.getElementById('were-btn').disabled = true;
  
  // Show selection
  const selectedBtn = document.getElementById(`${selectedAnswer}-btn`);
  const correctBtn = document.getElementById(`${correctAnswer}-btn`);
  
  selectedBtn.classList.add('selected');
  
  const feedbackElement = document.getElementById('sentence-feedback');
  feedbackElement.classList.remove('hidden');
  
  if (selectedAnswer === correctAnswer) {
    // Correct answer
    selectedBtn.classList.add('correct');
    correctAnswers++;
    currentStreak++;
    
    if (currentStreak > perfectStreak) {
      perfectStreak = currentStreak;
    }
    
    const points = 10 + (currentStreak > 5 ? 5 : 0); // Bonus for streaks
    addPoints(points, getRandomMessage('correct'));
    
    feedbackElement.innerHTML = `
      <div class="feedback-content correct">
        <i class="fas fa-check-circle"></i>
        <h4>¡Correcto! 🎉</h4>
        <p><strong>Explicación:</strong> ${sentence.explanation}</p>
        <div class="streak-display">
          <i class="fas fa-fire"></i>
          <span>Racha: ${currentStreak} respuestas seguidas</span>
        </div>
      </div>
    `;
  } else {
    // Incorrect answer
    selectedBtn.classList.add('incorrect');
    correctBtn.classList.add('correct');
    currentStreak = 0;
    
    feedbackElement.innerHTML = `
      <div class="feedback-content incorrect">
        <i class="fas fa-heart"></i>
        <h4>${getRandomMessage('encouragement')}</h4>
        <p><strong>La respuesta correcta es:</strong> "${correctAnswer}"</p>
        <p><strong>Explicación:</strong> ${sentence.explanation}</p>
        <div class="learning-tip">
          <i class="fas fa-lightbulb"></i>
          <p><strong>Tip:</strong> ${sentence.hint}</p>
        </div>
      </div>
    `;
  }
  
  // Show next button after delay
  setTimeout(() => {
    currentSentenceIndex++;
    if (currentSentenceIndex < verbToBePastData.sentences.length) {
      showSentence();
    } else {
      showSentenceResults();
    }
  }, 3500);
}

function showGrammarHint() {
  const sentence = verbToBePastData.sentences[currentSentenceIndex];
  const hintElement = document.getElementById('grammar-hint');
  
  document.getElementById('hint-text').textContent = sentence.hint;
  hintElement.classList.toggle('hidden');
}

function showTranslation() {
  const sentence = verbToBePastData.sentences[currentSentenceIndex];
  const translationElement = document.getElementById('translation-help');
  
  document.getElementById('translation-text').textContent = sentence.translation;
  translationElement.classList.toggle('hidden');
}

function showSentenceResults() {
  document.getElementById('sentence-container').classList.add('hidden');
  document.getElementById('sentence-results').classList.remove('hidden');
  
  exercisesCompleted++;
  
  const accuracy = Math.round((correctAnswers / totalAnswers) * 100);
  const pointsEarned = correctAnswers * 10;
  
  document.getElementById('correct-answers').textContent = correctAnswers;
  document.getElementById('final-accuracy').textContent = `${accuracy}%`;
  document.getElementById('points-earned').textContent = pointsEarned;
  
  const messageElement = document.getElementById('final-message');
  
  if (accuracy >= 90) {
    messageElement.innerHTML = `
      <div class="message-excellent">
        <i class="fas fa-trophy"></i>
        <h3>¡EXCELENTE! 🏆</h3>
        <p>¡Dominas perfectamente el verbo TO BE en pasado! Tu precisión es impresionante.</p>
        <p class="bonus-message">¡Has ganado un bonus de 50 puntos por tu excelencia!</p>
      </div>
    `;
    addPoints(50, '¡Bonus por excelencia!');
  } else if (accuracy >= 70) {
    messageElement.innerHTML = `
      <div class="message-good">
        <i class="fas fa-thumbs-up"></i>
        <h3>¡MUY BIEN! 👏</h3>
        <p>Tienes un buen dominio del verbo TO BE. Con un poco más de práctica serás perfecto.</p>
        <p class="encouragement">¡Sigue así, vas por muy buen camino!</p>
      </div>
    `;
    addPoints(25, '¡Buen progreso!');
  } else {
    messageElement.innerHTML = `
      <div class="message-keep-trying">
        <i class="fas fa-heart"></i>
        <h3>¡SIGUE PRACTICANDO! 💪</h3>
        <p>Estás aprendiendo algo nuevo y eso requiere tiempo. Cada error te enseña algo valioso.</p>
        <p class="motivation">¡No te rindas! Los expertos también empezaron donde tú estás ahora.</p>
        <div class="study-tip">
          <i class="fas fa-lightbulb"></i>
          <p><strong>Consejo:</strong> Repasa la teoría y practica un poco cada día. ¡Tú puedes!</p>
        </div>
      </div>
    `;
    addPoints(15, '¡El esfuerzo cuenta!');
  }
  
  saveProgress();
  updatePointsDisplay();
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  // Set random daily quote
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  const quoteElement = document.getElementById('daily-quote');
  if (quoteElement) quoteElement.textContent = randomQuote;
  
  updatePointsDisplay();
  
  // Add CSS styles
  const style = document.createElement('style');
  style.textContent = `
    .points-animation {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      animation: slideInRight 0.5s ease-out;
    }
    
    .points-popup {
      background: linear-gradient(135deg, var(--color-primary), var(--color-warning));
      color: white;
      padding: 12px 20px;
      border-radius: 25px;
      box-shadow: var(--shadow-lg);
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: bold;
    }
    
    .points-popup i.pulse {
      animation: pulse 1s infinite;
    }
    
    .points-popup small {
      display: block;
      margin-top: 4px;
      opacity: 0.9;
      font-size: 11px;
    }
    
    .animate-out {
      animation: slideOutRight 0.5s ease-in;
    }
    
    .learning-showcase {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin: 24px 0;
    }
    
    .showcase-item {
      background: rgba(var(--color-primary-rgb), 0.05);
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      border: 2px solid rgba(var(--color-primary-rgb), 0.1);
    }
    
    .verb-example h3 {
      color: var(--color-primary);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .verb-form {
      font-size: 2rem;
      font-weight: bold;
      padding: 12px 20px;
      border-radius: 8px;
      margin: 12px 0;
      color: white;
    }
    
    .verb-form.was {
      background: linear-gradient(135deg, #FF6B9D, #FF8E9B);
    }
    
    .verb-form.were {
      background: linear-gradient(135deg, #A8E6CF, #7FCDCD);
    }
    
    .example-text {
      font-style: italic;
      color: var(--color-text-secondary);
      margin-top: 8px;
    }
    
    .conjugation-table {
      background: var(--color-surface);
      border-radius: 8px;
      overflow: hidden;
      margin: 20px 0;
      box-shadow: var(--shadow-sm);
    }
    
    .conjugation-row {
      display: grid;
      grid-template-columns: 1fr 1fr 2fr;
      gap: 16px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--color-border);
    }
    
    .conjugation-row.header {
      background: rgba(var(--color-primary-rgb), 0.1);
      font-weight: bold;
      color: var(--color-primary);
    }
    
    .conjugation-row:last-child {
      border-bottom: none;
    }
    
    .verb-col.was {
      color: #FF6B9D;
      font-weight: bold;
    }
    
    .verb-col.were {
      color: #7FCDCD;
      font-weight: bold;
    }
    
    .sentence-card {
      background: var(--color-surface);
      border-radius: 12px;
      padding: 24px;
      margin: 20px 0;
      box-shadow: var(--shadow-lg);
      border: 2px solid rgba(var(--color-primary-rgb), 0.1);
    }
    
    .sentence-number {
      background: var(--color-primary);
      color: white;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-bottom: 16px;
    }
    
    .sentence-text {
      font-size: 1.2rem;
      line-height: 1.6;
      margin: 16px 0;
      text-align: center;
    }
    
    .blank {
      background: linear-gradient(135deg, var(--color-primary), var(--color-warning));
      color: white;
      padding: 4px 12px;
      border-radius: 6px;
      font-weight: bold;
      display: inline-block;
      min-width: 60px;
      text-align: center;
    }
    
    .answer-options {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin: 24px 0;
    }
    
    .option-btn {
      background: var(--color-surface);
      border: 2px solid rgba(var(--color-primary-rgb), 0.2);
      color: var(--color-text);
      padding: 12px 24px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.1rem;
      min-width: 100px;
      justify-content: center;
    }
    
    .option-btn:hover {
      border-color: var(--color-primary);
      background: rgba(var(--color-primary-rgb), 0.05);
      transform: translateY(-2px);
    }
    
    .option-btn.selected {
      background: var(--color-primary);
      color: white;
      border-color: var(--color-primary);
    }
    
    .option-btn.correct {
      background: var(--color-success);
      color: white;
      border-color: var(--color-success);
    }
    
    .option-btn.incorrect {
      background: var(--color-error);
      color: white;
      border-color: var(--color-error);
    }
    
    .option-letter {
      background: rgba(255, 255, 255, 0.2);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 0.9rem;
    }
    
    .sentence-help {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 20px;
    }
    
    .help-btn {
      background: rgba(var(--color-info-rgb), 0.1);
      border: 1px solid rgba(var(--color-info-rgb), 0.3);
      color: var(--color-info);
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: 0.9rem;
    }
    
    .help-btn:hover {
      background: rgba(var(--color-info-rgb), 0.2);
    }
    
    .feedback-section, .hint-section, .translation-section {
      margin: 20px 0;
      padding: 16px;
      border-radius: 8px;
      animation: slideInUp 0.3s ease-out;
    }
    
    .feedback-content.correct {
      background: rgba(var(--color-success-rgb), 0.1);
      border: 1px solid rgba(var(--color-success-rgb), 0.3);
      color: var(--color-success);
    }
    
    .feedback-content.incorrect {
      background: rgba(var(--color-error-rgb), 0.1);
      border: 1px solid rgba(var(--color-error-rgb), 0.3);
      color: var(--color-error);
    }
    
    .feedback-content h4 {
      margin-top: 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .streak-display {
      background: rgba(var(--color-warning-rgb), 0.1);
      color: var(--color-warning);
      padding: 8px 12px;
      border-radius: 20px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-top: 8px;
      font-size: 0.9rem;
    }
    
    .learning-tip {
      background: rgba(var(--color-info-rgb), 0.1);
      border-left: 4px solid var(--color-info);
      padding: 12px;
      margin-top: 12px;
      border-radius: 0 8px 8px 0;
    }
    
    .hint-content, .translation-content {
      background: rgba(var(--color-info-rgb), 0.1);
      border: 1px solid rgba(var(--color-info-rgb), 0.3);
      color: var(--color-info);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes slideInUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .learning-showcase {
        grid-template-columns: 1fr;
      }
      
      .answer-options {
        flex-direction: column;
        align-items: center;
      }
      
      .option-btn {
        min-width: 200px;
      }
      
      .sentence-help {
        flex-direction: column;
        align-items: center;
      }
    }
  `;
  document.head.appendChild(style);
}); 