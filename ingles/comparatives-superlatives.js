// Comparatives and Superlatives Application
const comparativesData = {
  shortAdjectives: [
    {
      base: "tall",
      sentence: "My brother is ___ than me, but my father is ___ in the family.",
      answers: ["taller", "the tallest"],
      translation: "Mi hermano es más alto que yo, pero mi padre es el más alto de la familia.",
      hint: "Usa 'taller' para comparar dos personas y 'the tallest' para el máximo de todos.",
      explanation: "Con 'tall' (1 sílaba), añadimos -er para comparativo y -est para superlativo."
    },
    {
      base: "fast",
      sentence: "This car is ___ than that one, but the red car is ___ of all.",
      answers: ["faster", "the fastest"],
      translation: "Este auto es más rápido que ese, pero el auto rojo es el más rápido de todos.",
      hint: "Compara dos autos primero, luego menciona cuál es el máximo de todos.",
      explanation: "'Fast' es un adjetivo corto, por eso usamos faster/fastest."
    },
    {
      base: "young",
      sentence: "She is ___ than her sister, but the baby is ___ in the family.",
      answers: ["younger", "the youngest"],
      translation: "Ella es más joven que su hermana, pero el bebé es el más joven de la familia.",
      hint: "Primero compara dos personas, luego identifica quién es el más joven de todos.",
      explanation: "'Young' sigue la regla básica: younger (comparativo) y youngest (superlativo)."
    },
    {
      base: "big",
      sentence: "This house is ___ than ours, but that mansion is ___ in the neighborhood.",
      answers: ["bigger", "the biggest"],
      translation: "Esta casa es más grande que la nuestra, pero esa mansión es la más grande del vecindario.",
      hint: "Recuerda doblar la consonante final: big → bigger → biggest",
      explanation: "'Big' termina en consonante-vocal-consonante, por eso doblamos la 'g'."
    },
    {
      base: "hot",
      sentence: "Today is ___ than yesterday, but last week was ___ of the month.",
      answers: ["hotter", "the hottest"],
      translation: "Hoy está más caluroso que ayer, pero la semana pasada fue la más calurosa del mes.",
      hint: "Dobla la 't' final: hot → hotter → hottest",
      explanation: "Como 'hot' termina en consonante-vocal-consonante, doblamos la consonante final."
    },
    {
      base: "nice",
      sentence: "This restaurant is ___ than the other one, but the Italian place is ___ in town.",
      answers: ["nicer", "the nicest"],
      translation: "Este restaurante es más agradable que el otro, pero el lugar italiano es el más agradable de la ciudad.",
      hint: "Como termina en 'e', solo añade -r y -st: nice → nicer → nicest",
      explanation: "Los adjetivos que terminan en 'e' solo necesitan -r para comparativo y -st para superlativo."
    },
    {
      base: "smart",
      sentence: "Tom is ___ than his brother, but Lisa is ___ student in class.",
      answers: ["smarter", "the smartest"],
      translation: "Tom es más inteligente que su hermano, pero Lisa es la estudiante más inteligente de la clase.",
      hint: "Regla básica: smart → smarter → smartest",
      explanation: "'Smart' es un adjetivo corto regular, sigue la regla -er/-est."
    },
    {
      base: "cold",
      sentence: "Winter is ___ than autumn, but January is ___ month of the year.",
      answers: ["colder", "the coldest"],
      translation: "El invierno es más frío que el otoño, pero enero es el mes más frío del año.",
      hint: "Comparativo: colder, Superlativo: the coldest",
      explanation: "'Cold' sigue la regla estándar para adjetivos de una sílaba."
    },
    {
      base: "cheap",
      sentence: "This phone is ___ than that one, but the basic model is ___ of all.",
      answers: ["cheaper", "the cheapest"],
      translation: "Este teléfono es más barato que ese, pero el modelo básico es el más barato de todos.",
      hint: "Aunque termina en 'p', no se dobla: cheap → cheaper → cheapest",
      explanation: "'Cheap' no dobla la consonante porque tiene dos vocales antes de la 'p'."
    },
    {
      base: "strong",
      sentence: "He is ___ than me, but the champion is ___ person I know.",
      answers: ["stronger", "the strongest"],
      translation: "Él es más fuerte que yo, pero el campeón es la persona más fuerte que conozco.",
      hint: "Regla básica: strong → stronger → strongest",
      explanation: "'Strong' es un adjetivo corto que sigue la regla regular."
    },
    {
      base: "safe",
      sentence: "This neighborhood is ___ than downtown, but our street is ___ in the city.",
      answers: ["safer", "the safest"],
      translation: "Este vecindario es más seguro que el centro, pero nuestra calle es la más segura de la ciudad.",
      hint: "Termina en 'e': safe → safer → safest",
      explanation: "Como termina en 'e', solo añadimos -r y -st."
    },
    {
      base: "wide",
      sentence: "This road is ___ than that path, but the highway is ___ road here.",
      answers: ["wider", "the widest"],
      translation: "Esta carretera es más ancha que ese sendero, pero la autopista es la carretera más ancha de aquí.",
      hint: "Termina en 'e': wide → wider → widest",
      explanation: "'Wide' termina en 'e', por eso solo necesita -r y -st."
    },
    {
      base: "thin",
      sentence: "This book is ___ than that one, but the magazine is ___ of all.",
      answers: ["thinner", "the thinnest"],
      translation: "Este libro es más delgado que ese, pero la revista es la más delgada de todas.",
      hint: "Dobla la 'n': thin → thinner → thinnest",
      explanation: "'Thin' termina en consonante-vocal-consonante, por eso doblamos la 'n'."
    },
    {
      base: "rich",
      sentence: "He is ___ than his neighbor, but Bill Gates is ___ person in the world.",
      answers: ["richer", "the richest"],
      translation: "Él es más rico que su vecino, pero Bill Gates es la persona más rica del mundo.",
      hint: "Regla básica: rich → richer → richest",
      explanation: "'Rich' es un adjetivo corto regular."
    },
    {
      base: "clean",
      sentence: "My room is ___ than yours, but the kitchen is ___ room in the house.",
      answers: ["cleaner", "the cleanest"],
      translation: "Mi cuarto está más limpio que el tuyo, pero la cocina es el cuarto más limpio de la casa.",
      hint: "Regla básica: clean → cleaner → cleanest",
      explanation: "'Clean' sigue la regla estándar para adjetivos cortos."
    }
  ],

  longAdjectives: [
    {
      base: "beautiful",
      sentence: "This painting is ___ than that one, but the Mona Lisa is ___ painting ever.",
      answers: ["more beautiful", "the most beautiful"],
      translation: "Esta pintura es más hermosa que esa, pero la Mona Lisa es la pintura más hermosa de todas.",
      hint: "Usa 'more' para comparativo y 'most' para superlativo con adjetivos largos.",
      explanation: "'Beautiful' tiene 3 sílabas, por eso usamos more/most."
    },
    {
      base: "expensive",
      sentence: "This watch is ___ than mine, but that diamond ring is ___ item in the store.",
      answers: ["more expensive", "the most expensive"],
      translation: "Este reloj es más caro que el mío, pero ese anillo de diamante es el artículo más caro de la tienda.",
      hint: "Adjetivos largos usan more/most, no -er/-est",
      explanation: "'Expensive' tiene 3 sílabas, requiere more/most."
    },
    {
      base: "intelligent",
      sentence: "She is ___ than her classmates, but Einstein was ___ scientist in history.",
      answers: ["more intelligent", "the most intelligent"],
      translation: "Ella es más inteligente que sus compañeros, pero Einstein fue el científico más inteligente de la historia.",
      hint: "4 sílabas = more/most obligatorio",
      explanation: "'Intelligent' es muy largo (4 sílabas), definitivamente usa more/most."
    },
    {
      base: "comfortable",
      sentence: "This chair is ___ than that one, but my bed is ___ place to rest.",
      answers: ["more comfortable", "the most comfortable"],
      translation: "Esta silla es más cómoda que esa, pero mi cama es el lugar más cómodo para descansar.",
      hint: "Adjetivos de 3+ sílabas siempre usan more/most",
      explanation: "'Comfortable' tiene 4 sílabas, requiere more/most."
    },
    {
      base: "interesting",
      sentence: "This book is ___ than the movie, but the documentary is ___ of all.",
      answers: ["more interesting", "the most interesting"],
      translation: "Este libro es más interesante que la película, pero el documental es el más interesante de todos.",
      hint: "3+ sílabas = more/most",
      explanation: "'Interesting' tiene 4 sílabas, usa more/most."
    },
    {
      base: "dangerous",
      sentence: "Driving is ___ than walking, but skydiving is ___ activity I can think of.",
      answers: ["more dangerous", "the most dangerous"],
      translation: "Manejar es más peligroso que caminar, pero el paracaidismo es la actividad más peligrosa que se me ocurre.",
      hint: "3 sílabas requieren more/most",
      explanation: "'Dangerous' tiene 3 sílabas, necesita more/most."
    },
    {
      base: "popular",
      sentence: "This song is ___ than the old one, but that hit is ___ song this year.",
      answers: ["more popular", "the most popular"],
      translation: "Esta canción es más popular que la anterior, pero ese éxito es la canción más popular de este año.",
      hint: "3 sílabas = more/most",
      explanation: "'Popular' tiene 3 sílabas, usa more/most."
    },
    {
      base: "difficult",
      sentence: "Math is ___ than English for me, but Physics is ___ subject of all.",
      answers: ["more difficult", "the most difficult"],
      translation: "Las matemáticas son más difíciles que el inglés para mí, pero la física es la materia más difícil de todas.",
      hint: "Adjetivos largos siempre usan more/most",
      explanation: "'Difficult' tiene 3 sílabas, requiere more/most."
    },
    {
      base: "important",
      sentence: "Health is ___ than money, but family is ___ thing in life.",
      answers: ["more important", "the most important"],
      translation: "La salud es más importante que el dinero, pero la familia es lo más importante en la vida.",
      hint: "3+ sílabas necesitan more/most",
      explanation: "'Important' tiene 3 sílabas, usa more/most."
    },
    {
      base: "delicious",
      sentence: "This cake is ___ than the cookies, but grandma's pie is ___ dessert ever.",
      answers: ["more delicious", "the most delicious"],
      translation: "Este pastel está más delicioso que las galletas, pero el pay de la abuela es el postre más delicioso de todos.",
      hint: "3 sílabas requieren more/most",
      explanation: "'Delicious' tiene 3 sílabas, necesita more/most."
    }
  ],

  irregularForms: [
    {
      base: "good",
      sentence: "This pizza is ___ than that one, but my mom's cooking is ___ in the world.",
      answers: ["better", "the best"],
      translation: "Esta pizza está mejor que esa, pero la comida de mi mamá es la mejor del mundo.",
      hint: "good → better → the best (forma completamente irregular)",
      explanation: "'Good' es irregular: good → better → the best. ¡Memorízalo!"
    },
    {
      base: "bad",
      sentence: "Today's weather is ___ than yesterday's, but last week was ___ of the month.",
      answers: ["worse", "the worst"],
      translation: "El clima de hoy está peor que el de ayer, pero la semana pasada fue la peor del mes.",
      hint: "bad → worse → the worst (irregular)",
      explanation: "'Bad' es irregular: bad → worse → the worst."
    },
    {
      base: "far",
      sentence: "The store is ___ than I thought, but the mall is ___ place from here.",
      answers: ["farther", "the farthest"],
      translation: "La tienda está más lejos de lo que pensé, pero el centro comercial es el lugar más lejano de aquí.",
      hint: "far → farther/further → the farthest/furthest",
      explanation: "'Far' es irregular y tiene dos formas aceptables."
    },
    {
      base: "little",
      sentence: "I have ___ money than you, but Tom has ___ money of all of us.",
      answers: ["less", "the least"],
      translation: "Tengo menos dinero que tú, pero Tom tiene el menos dinero de todos nosotros.",
      hint: "little → less → the least (para cantidades)",
      explanation: "'Little' (cantidad) es irregular: little → less → the least."
    },
    {
      base: "much",
      sentence: "She has ___ experience than me, but the manager has ___ experience in the company.",
      answers: ["more", "the most"],
      translation: "Ella tiene más experiencia que yo, pero el gerente tiene la mayor experiencia en la empresa.",
      hint: "much/many → more → the most",
      explanation: "'Much/many' comparten las mismas formas: more y most."
    },
    {
      base: "good",
      sentence: "His English is ___ than mine, but Sarah speaks ___ English in our class.",
      answers: ["better", "the best"],
      translation: "Su inglés es mejor que el mío, pero Sarah habla el mejor inglés de nuestra clase.",
      hint: "Recuerda: good → better → the best",
      explanation: "Otra práctica con 'good', la forma irregular más común."
    }
  ]
};

// Application state
let currentExercise = '';
let currentQuestionIndex = 0;
let currentTheorySection = 1;
let userPoints = parseInt(localStorage.getItem('comparativesPoints') || '0');
let lessonsCompleted = parseInt(localStorage.getItem('comparativesLessons') || '0');
let streakCount = parseInt(localStorage.getItem('comparativesStreak') || '0');
let currentLevel = localStorage.getItem('comparativesLevel') || 'Principiante';

// Exercise scores
let exerciseScores = {
  shortAdjectives: { correct: 0, total: 0 },
  longAdjectives: { correct: 0, total: 0 },
  irregularForms: { correct: 0, total: 0 }
};

// Motivational quotes
const inspirationalQuotes = [
  "¡Eres STRONGER than you think y SMARTER than you believe! 💪",
  "Every day you're getting BETTER and BETTER at English! 🌟",
  "You're not just learning, you're becoming the BEST version of yourself! ⭐",
  "Your progress is MORE IMPRESSIVE than you realize! Keep going! 🚀",
  "You're the MOST DEDICATED student I know! 💖"
];

// Celebration messages
const celebrationMessages = {
  correct: [
    "¡PERFECT! 🌟 You're getting BETTER and BETTER!",
    "¡EXCELLENT! ⭐ That's the BEST answer possible!",
    "¡FANTASTIC! 💫 You're MORE TALENTED than you think!",
    "¡AMAZING! ✨ You're the SMARTEST student ever!",
    "¡WONDERFUL! 🎉 Your progress is the MOST IMPRESSIVE!"
  ],
  encouragement: [
    "¡Don't worry! 💪 Every mistake makes you STRONGER!",
    "¡Keep trying! 🌱 You're getting BETTER with each attempt!",
    "¡You can do it! 🦋 You're MORE CAPABLE than you know!",
    "¡Stay positive! 🌸 The BEST students learn from mistakes!",
    "¡Never give up! 💝 You're CLOSER to success than you think!"
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
  if (userPoints >= 2000) {
    currentLevel = 'Experto Supremo';
  } else if (userPoints >= 1200) {
    currentLevel = 'Experto';
  } else if (userPoints >= 600) {
    currentLevel = 'Avanzado';
  } else if (userPoints >= 300) {
    currentLevel = 'Intermedio';
  } else {
    currentLevel = 'Principiante';
  }
}

function saveProgress() {
  localStorage.setItem('comparativesPoints', userPoints.toString());
  localStorage.setItem('comparativesLessons', lessonsCompleted.toString());
  localStorage.setItem('comparativesStreak', streakCount.toString());
  localStorage.setItem('comparativesLevel', currentLevel);
}

function updatePointsDisplay() {
  const elements = {
    'total-points': userPoints,
    'menu-points': userPoints,
    'theory-points': userPoints,
    'short-score': userPoints,
    'lessons-completed': lessonsCompleted,
    'streak-count': streakCount,
    'current-level': currentLevel
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
  
  // Update accuracy rate
  const totalQuestions = Object.values(exerciseScores).reduce((sum, score) => sum + score.total, 0);
  const totalCorrect = Object.values(exerciseScores).reduce((sum, score) => sum + score.correct, 0);
  const accuracyRate = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  
  const accuracyElement = document.getElementById('accuracy-rate');
  if (accuracyElement) accuracyElement.textContent = `${accuracyRate}%`;
}

function showPointsAnimation(points, reason) {
  const animation = document.createElement('div');
  animation.className = 'points-animation';
  animation.innerHTML = `
    <div class="points-popup">
      <i class="fas fa-star pulse"></i>
      <span>+${points} points</span>
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
  currentExercise = exerciseType;
  currentQuestionIndex = 0;
  
  switch(exerciseType) {
    case 'theory':
      initTheory();
      break;
    case 'short-adjectives':
      initShortAdjectives();
      break;
    case 'long-adjectives':
      initLongAdjectives();
      break;
    case 'irregular-forms':
      initIrregularForms();
      break;
    case 'real-comparisons':
      // Implementation for real comparisons
      break;
    case 'master-challenge':
      // Implementation for master challenge
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
  if (currentTheorySection < 4) {
    showTheorySection(currentTheorySection + 1);
  }
}

function prevTheorySection() {
  if (currentTheorySection > 1) {
    showTheorySection(currentTheorySection - 1);
  }
}

// Short Adjectives Exercise
function initShortAdjectives() {
  currentQuestionIndex = 0;
  exerciseScores.shortAdjectives = { correct: 0, total: 0 };
  
  document.getElementById('short-results').classList.add('hidden');
  document.getElementById('short-container').classList.remove('hidden');
  
  showShortQuestion();
}

function showShortQuestion() {
  const question = comparativesData.shortAdjectives[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / comparativesData.shortAdjectives.length) * 100;
  
  // Update progress
  document.getElementById('short-progress').innerHTML = 
    `<i class="fas fa-text-height"></i> Ejercicio ${currentQuestionIndex + 1} de ${comparativesData.shortAdjectives.length}`;
  document.getElementById('short-progress-fill').style.width = `${progress}%`;
  
  // Update question number
  document.getElementById('current-short-num').textContent = currentQuestionIndex + 1;
  
  // Show base adjective
  document.getElementById('base-adjective').textContent = question.base;
  
  // Show sentence with blanks
  document.getElementById('short-sentence').innerHTML = question.sentence.replace(/___ /g, '<span class="blank">___</span> ');
  
  // Reset input and buttons
  document.getElementById('short-answer-input').value = '';
  document.getElementById('short-answer-input').disabled = false;
  document.getElementById('short-check-btn').disabled = false;
  document.getElementById('short-check-btn').innerHTML = '<i class="fas fa-check"></i> Verificar';
  
  // Hide feedback and help sections
  document.getElementById('short-feedback').classList.add('hidden');
  document.getElementById('short-hint').classList.add('hidden');
  document.getElementById('short-translation').classList.add('hidden');
  
  // Update accuracy display
  const accuracy = exerciseScores.shortAdjectives.total > 0 ? 
    Math.round((exerciseScores.shortAdjectives.correct / exerciseScores.shortAdjectives.total) * 100) : 100;
  document.getElementById('short-accuracy').textContent = `${accuracy}%`;
}

function checkShortAnswer() {
  const question = comparativesData.shortAdjectives[currentQuestionIndex];
  const userAnswer = document.getElementById('short-answer-input').value.trim().toLowerCase();
  const correctAnswers = question.answers.map(answer => answer.toLowerCase());
  
  exerciseScores.shortAdjectives.total++;
  
  // Disable input and button
  document.getElementById('short-answer-input').disabled = true;
  document.getElementById('short-check-btn').disabled = true;
  
  const feedbackElement = document.getElementById('short-feedback');
  feedbackElement.classList.remove('hidden');
  
  // Check if user provided both answers (simple check)
  const userAnswers = userAnswer.split(/[,\s]+/).filter(a => a.length > 0);
  const isCorrect = correctAnswers.every(correct => 
    userAnswers.some(user => user.includes(correct.replace('the ', '')))
  );
  
  if (isCorrect) {
    // Correct answer
    exerciseScores.shortAdjectives.correct++;
    streakCount++;
    
    const points = 12 + (streakCount > 3 ? 3 : 0); // Bonus for streaks
    addPoints(points, getRandomMessage('correct'));
    
    feedbackElement.innerHTML = `
      <div class="feedback-content correct">
        <i class="fas fa-check-circle"></i>
        <h4>¡PERFECT! 🎉</h4>
        <p><strong>Respuesta correcta:</strong> ${question.answers.join(' ... ')}</p>
        <p><strong>Explicación:</strong> ${question.explanation}</p>
        <div class="streak-indicator">
          <i class="fas fa-fire"></i>
          <span>¡Racha de ${streakCount} respuestas!</span>
        </div>
      </div>
    `;
  } else {
    // Incorrect answer
    streakCount = 0;
    
    feedbackElement.innerHTML = `
      <div class="feedback-content incorrect">
        <i class="fas fa-heart"></i>
        <h4>${getRandomMessage('encouragement')}</h4>
        <p><strong>La respuesta correcta es:</strong> ${question.answers.join(' ... ')}</p>
        <p><strong>Explicación:</strong> ${question.explanation}</p>
        <div class="learning-tip">
          <i class="fas fa-lightbulb"></i>
          <p><strong>Tip:</strong> ${question.hint}</p>
        </div>
      </div>
    `;
  }
  
  // Show next button after delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < comparativesData.shortAdjectives.length) {
      showShortQuestion();
    } else {
      showShortResults();
    }
  }, 4000);
}

function showShortHint() {
  const question = comparativesData.shortAdjectives[currentQuestionIndex];
  const hintElement = document.getElementById('short-hint');
  
  document.getElementById('short-hint-text').textContent = question.hint;
  hintElement.classList.toggle('hidden');
}

function showShortTranslation() {
  const question = comparativesData.shortAdjectives[currentQuestionIndex];
  const translationElement = document.getElementById('short-translation');
  
  document.getElementById('short-translation-text').textContent = question.translation;
  translationElement.classList.toggle('hidden');
}

function showShortResults() {
  document.getElementById('short-container').classList.add('hidden');
  document.getElementById('short-results').classList.remove('hidden');
  
  lessonsCompleted++;
  
  const correct = exerciseScores.shortAdjectives.correct;
  const total = exerciseScores.shortAdjectives.total;
  const accuracy = Math.round((correct / total) * 100);
  const pointsEarned = correct * 12;
  
  document.getElementById('short-correct').textContent = correct;
  document.getElementById('short-final-accuracy').textContent = `${accuracy}%`;
  document.getElementById('short-points-earned').textContent = pointsEarned;
  
  const messageElement = document.getElementById('short-final-message');
  
  if (accuracy >= 90) {
    messageElement.innerHTML = `
      <div class="message-excellent">
        <i class="fas fa-trophy"></i>
        <h3>¡OUTSTANDING! 🏆</h3>
        <p>You're the BEST at short adjectives! Your accuracy is AMAZING!</p>
        <p class="bonus-message">Bonus: +100 points for being EXCELLENT!</p>
      </div>
    `;
    addPoints(100, '¡Bonus por excelencia!');
  } else if (accuracy >= 70) {
    messageElement.innerHTML = `
      <div class="message-good">
        <i class="fas fa-thumbs-up"></i>
        <h3>¡GREAT JOB! 👏</h3>
        <p>You're getting BETTER and BETTER! Keep practicing to be the BEST!</p>
        <p class="encouragement">You're MORE CAPABLE than you think!</p>
      </div>
    `;
    addPoints(50, '¡Gran progreso!');
  } else {
    messageElement.innerHTML = `
      <div class="message-keep-trying">
        <i class="fas fa-heart"></i>
        <h3>¡KEEP GOING! 💪</h3>
        <p>You're STRONGER than any challenge! Every mistake makes you WISER!</p>
        <p class="motivation">Remember: GOOD students become BETTER, and BETTER students become the BEST!</p>
      </div>
    `;
    addPoints(25, '¡El esfuerzo cuenta!');
  }
  
  saveProgress();
  updatePointsDisplay();
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  // Set random daily quote
  const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
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
    
    .comparison-showcase {
      margin: 24px 0;
    }
    
    .showcase-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    
    .comparison-example {
      background: var(--color-surface);
      border-radius: 12px;
      padding: 20px;
      text-align: center;
      border: 2px solid;
      transition: transform 0.3s ease;
    }
    
    .comparison-example:hover {
      transform: translateY(-4px);
    }
    
    .comparison-example.positive {
      border-color: #4CAF50;
      background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05));
    }
    
    .comparison-example.comparative {
      border-color: #FF9800;
      background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 152, 0, 0.05));
    }
    
    .comparison-example.superlative {
      border-color: #9C27B0;
      background: linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(156, 39, 176, 0.05));
    }
    
    .comparison-example i {
      font-size: 2rem;
      margin-bottom: 8px;
    }
    
    .comparison-example.positive i { color: #4CAF50; }
    .comparison-example.comparative i { color: #FF9800; }
    .comparison-example.superlative i { color: #9C27B0; }
    
    .example-word {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 12px 0;
      padding: 8px;
      border-radius: 8px;
      color: white;
    }
    
    .positive .example-word { background: #4CAF50; }
    .comparative .example-word { background: #FF9800; }
    .superlative .example-word { background: #9C27B0; }
    
    .comparison-levels {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin: 20px 0;
    }
    
    .level-card {
      background: var(--color-surface);
      border-radius: 8px;
      padding: 16px;
      text-align: center;
      border: 2px solid;
    }
    
    .level-card.positive { border-color: #4CAF50; }
    .level-card.comparative { border-color: #FF9800; }
    .level-card.superlative { border-color: #9C27B0; }
    
    .level-card i {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }
    
    .level-card.positive i { color: #4CAF50; }
    .level-card.comparative i { color: #FF9800; }
    .level-card.superlative i { color: #9C27B0; }
    
    .rules-section {
      margin: 20px 0;
    }
    
    .rule-item {
      background: rgba(var(--color-primary-rgb), 0.05);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      border-left: 4px solid var(--color-primary);
    }
    
    .rule-examples {
      margin-top: 12px;
    }
    
    .example-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 8px 0;
      padding: 8px;
      background: rgba(var(--color-primary-rgb), 0.05);
      border-radius: 6px;
    }
    
    .base { color: #4CAF50; font-weight: bold; }
    .comparative { color: #FF9800; font-weight: bold; }
    .superlative { color: #9C27B0; font-weight: bold; }
    .arrow { color: var(--color-text-secondary); }
    
    .irregular-table {
      background: var(--color-surface);
      border-radius: 8px;
      overflow: hidden;
      margin: 20px 0;
    }
    
    .irregular-header {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      padding: 12px 16px;
      background: rgba(var(--color-primary-rgb), 0.1);
      font-weight: bold;
      color: var(--color-primary);
    }
    
    .irregular-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 16px;
      padding: 12px 16px;
      border-bottom: 1px solid var(--color-border);
    }
    
    .irregular-row:last-child {
      border-bottom: none;
    }
    
    .adjective-card {
      background: var(--color-surface);
      border-radius: 12px;
      padding: 24px;
      margin: 20px 0;
      box-shadow: var(--shadow-lg);
      border: 2px solid rgba(var(--color-primary-rgb), 0.1);
    }
    
    .exercise-number {
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
    
    .base-adjective {
      background: rgba(var(--color-info-rgb), 0.1);
      color: var(--color-info);
      padding: 8px 16px;
      border-radius: 20px;
      display: inline-block;
      margin-bottom: 16px;
      font-size: 0.9rem;
    }
    
    .sentence-to-complete {
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
      min-width: 80px;
      text-align: center;
      margin: 0 4px;
    }
    
    .answer-input-section {
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: center;
      margin: 24px 0;
    }
    
    #short-answer-input {
      flex: 1;
      max-width: 400px;
      padding: 12px 16px;
      border: 2px solid rgba(var(--color-primary-rgb), 0.2);
      border-radius: 8px;
      font-size: 1.1rem;
      transition: border-color 0.3s ease;
    }
    
    #short-answer-input:focus {
      outline: none;
      border-color: var(--color-primary);
    }
    
    .check-btn {
      background: var(--color-success);
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
    }
    
    .check-btn:hover {
      background: var(--color-success-hover);
      transform: translateY(-2px);
    }
    
    .check-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
    
    .help-section {
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-top: 16px;
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
    
    .streak-indicator {
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
    
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    @media (max-width: 768px) {
      .showcase-row {
        grid-template-columns: 1fr;
      }
      
      .comparison-levels {
        grid-template-columns: 1fr;
      }
      
      .answer-input-section {
        flex-direction: column;
      }
      
      #short-answer-input {
        max-width: 100%;
      }
    }
  `;
  document.head.appendChild(style);
}); 