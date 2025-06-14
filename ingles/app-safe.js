// Past Simple Learning App - SAFE VERSION AMPLIADA
const appData = {
  multipleChoiceQuestions: [
    {
      question: "¿Cuál es la forma correcta del verbo 'go' en pasado?",
      options: ["goed", "went", "gone", "going"],
      correct: 1,
      explanation: "El pasado de 'go' es 'went' (verbo irregular)."
    },
    {
      question: "¿Cómo se dice 'I played' en español?",
      options: ["Yo juego", "Yo jugué", "Yo jugaré", "Yo estoy jugando"],
      correct: 1,
      explanation: "'I played' significa 'Yo jugué' en español."
    },
    {
      question: "¿Cuál es el pasado de 'eat'?",
      options: ["eated", "ate", "eaten", "eating"],
      correct: 1,
      explanation: "El pasado de 'eat' es 'ate' (verbo irregular)."
    },
    {
      question: "¿Cómo se forma el pasado de verbos regulares?",
      options: ["Agregando -ing", "Agregando -ed", "Cambiando la vocal", "No cambia"],
      correct: 1,
      explanation: "Los verbos regulares forman el pasado agregando -ed al infinitivo."
    },
    {
      question: "¿Cuál es el pasado de 'run'?",
      options: ["runned", "ran", "run", "running"],
      correct: 1,
      explanation: "El pasado de 'run' es 'ran' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'study'?",
      options: ["studyed", "studied", "studies", "studying"],
      correct: 1,
      explanation: "El pasado de 'study' es 'studied' (se cambia 'y' por 'ied')."
    },
    {
      question: "¿Cuál es el pasado de 'see'?",
      options: ["seed", "saw", "seen", "seeing"],
      correct: 1,
      explanation: "El pasado de 'see' es 'saw' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'work'?",
      options: ["worked", "work", "working", "works"],
      correct: 0,
      explanation: "El pasado de 'work' es 'worked' (verbo regular)."
    },
    {
      question: "¿Cuál es el pasado de 'come'?",
      options: ["comed", "came", "come", "coming"],
      correct: 1,
      explanation: "El pasado de 'come' es 'came' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'write'?",
      options: ["writed", "wrote", "written", "writing"],
      correct: 1,
      explanation: "El pasado de 'write' es 'wrote' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'take'?",
      options: ["taked", "took", "taken", "taking"],
      correct: 1,
      explanation: "El pasado de 'take' es 'took' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'make'?",
      options: ["maked", "made", "making", "makes"],
      correct: 1,
      explanation: "El pasado de 'make' es 'made' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'give'?",
      options: ["gived", "gave", "given", "giving"],
      correct: 1,
      explanation: "El pasado de 'give' es 'gave' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'think'?",
      options: ["thinked", "thought", "thinking", "thinks"],
      correct: 1,
      explanation: "El pasado de 'think' es 'thought' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'know'?",
      options: ["knowed", "knew", "known", "knowing"],
      correct: 1,
      explanation: "El pasado de 'know' es 'knew' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'get'?",
      options: ["getted", "got", "gotten", "getting"],
      correct: 1,
      explanation: "El pasado de 'get' es 'got' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'find'?",
      options: ["finded", "found", "finding", "finds"],
      correct: 1,
      explanation: "El pasado de 'find' es 'found' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'tell'?",
      options: ["telled", "told", "telling", "tells"],
      correct: 1,
      explanation: "El pasado de 'tell' es 'told' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'feel'?",
      options: ["feeled", "felt", "feeling", "feels"],
      correct: 1,
      explanation: "El pasado de 'feel' es 'felt' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'leave'?",
      options: ["leaved", "left", "leaving", "leaves"],
      correct: 1,
      explanation: "El pasado de 'leave' es 'left' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'put'?",
      options: ["putted", "put", "putting", "puts"],
      correct: 1,
      explanation: "El pasado de 'put' es 'put' (no cambia - verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'bring'?",
      options: ["bringed", "brought", "bringing", "brings"],
      correct: 1,
      explanation: "El pasado de 'bring' es 'brought' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'begin'?",
      options: ["beginned", "began", "begun", "beginning"],
      correct: 1,
      explanation: "El pasado de 'begin' es 'began' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'keep'?",
      options: ["keeped", "kept", "keeping", "keeps"],
      correct: 1,
      explanation: "El pasado de 'keep' es 'kept' (verbo irregular)."
    },
    {
      question: "¿Cuál es el pasado de 'hold'?",
      options: ["holded", "held", "holding", "holds"],
      correct: 1,
      explanation: "El pasado de 'hold' es 'held' (verbo irregular)."
    }
  ],
  
  fillInBlanks: [
    {
      sentence: "Yesterday I ___ to the store.",
      answer: "went",
      infinitive: "go",
      translation: "Ayer fui a la tienda."
    },
    {
      sentence: "She ___ a beautiful song.",
      answer: "sang",
      infinitive: "sing", 
      translation: "Ella cantó una hermosa canción."
    },
    {
      sentence: "We ___ pizza for dinner last night.",
      answer: "ate",
      infinitive: "eat",
      translation: "Comimos pizza para cenar anoche."
    },
    {
      sentence: "He ___ his homework yesterday.",
      answer: "did",
      infinitive: "do",
      translation: "Él hizo su tarea ayer."
    },
    {
      sentence: "They ___ to the beach last summer.",
      answer: "went",
      infinitive: "go",
      translation: "Fueron a la playa el verano pasado."
    },
    {
      sentence: "I ___ a good movie last weekend.",
      answer: "saw",
      infinitive: "see",
      translation: "Vi una buena película el fin de semana pasado."
    },
    {
      sentence: "She ___ English for three years.",
      answer: "studied",
      infinitive: "study",
      translation: "Ella estudió inglés por tres años."
    },
    {
      sentence: "We ___ in the park yesterday.",
      answer: "played",
      infinitive: "play",
      translation: "Jugamos en el parque ayer."
    },
    {
      sentence: "He ___ a letter to his friend.",
      answer: "wrote",
      infinitive: "write",
      translation: "Él escribió una carta a su amigo."
    },
    {
      sentence: "They ___ home late last night.",
      answer: "came",
      infinitive: "come",
      translation: "Llegaron a casa tarde anoche."
    },
    {
      sentence: "I ___ my keys this morning.",
      answer: "found",
      infinitive: "find",
      translation: "Encontré mis llaves esta mañana."
    },
    {
      sentence: "She ___ a new car last month.",
      answer: "bought",
      infinitive: "buy",
      translation: "Ella compró un auto nuevo el mes pasado."
    }
  ],
  
  dragAndDrop: [
    { present: "go", past: "went", translation: "ir - fue" },
    { present: "eat", past: "ate", translation: "comer - comió" },
    { present: "see", past: "saw", translation: "ver - vio" },
    { present: "run", past: "ran", translation: "correr - corrió" },
    { present: "come", past: "came", translation: "venir - vino" },
    { present: "write", past: "wrote", translation: "escribir - escribió" },
    { present: "read", past: "read", translation: "leer - leyó" },
    { present: "sing", past: "sang", translation: "cantar - cantó" },
    { present: "drink", past: "drank", translation: "beber - bebió" },
    { present: "swim", past: "swam", translation: "nadar - nadó" },
    { present: "fly", past: "flew", translation: "volar - voló" },
    { present: "drive", past: "drove", translation: "manejar - manejó" },
    { present: "speak", past: "spoke", translation: "hablar - habló" },
    { present: "break", past: "broke", translation: "romper - rompió" },
    { present: "choose", past: "chose", translation: "elegir - eligió" }
  ],
  
  finalExamQuestions: [
    {
      type: "multiple-choice",
      question: "What is the past tense of 'run'?",
      options: ["runned", "ran", "run", "running"],
      correct: 1,
      explanation: "The past tense of 'run' is 'ran'."
    },
    {
      type: "fill-blank",
      question: "Complete: Yesterday I ___ my homework.",
      answer: "did",
      infinitive: "do",
      translation: "Ayer hice mi tarea."
    },
    {
      type: "multiple-choice",
      question: "Which sentence is correct?",
      options: ["I goed to school", "I went to school", "I go to school yesterday", "I going to school"],
      correct: 1,
      explanation: "The correct past tense form is 'I went to school'."
    },
    {
      type: "fill-blank",
      question: "Complete: She ___ a beautiful dress.",
      answer: "wore",
      infinitive: "wear",
      translation: "Ella usó un vestido hermoso."
    },
    {
      type: "multiple-choice",
      question: "What is the past tense of 'study'?",
      options: ["studyed", "studied", "studies", "study"],
      correct: 1,
      explanation: "For verbs ending in 'y', we change 'y' to 'ied'."
    },
    {
      type: "fill-blank",
      question: "Complete: They ___ to the concert last night.",
      answer: "went",
      infinitive: "go",
      translation: "Fueron al concierto anoche."
    }
  ]
};

// Sistema de Cookies para guardar progreso
const CookieManager = {
  // Guardar datos en cookies
  save: function(key, data) {
    try {
      const jsonData = JSON.stringify(data);
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 días
      document.cookie = `pastSimple_${key}=${jsonData}; expires=${expirationDate.toUTCString()}; path=/`;
      console.log(`Progreso guardado: ${key}`);
    } catch (error) {
      console.error('Error guardando en cookies:', error);
    }
  },

  // Cargar datos de cookies
  load: function(key) {
    try {
      const name = `pastSimple_${key}=`;
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      
      for (let cookie of cookieArray) {
        cookie = cookie.trim();
        if (cookie.indexOf(name) === 0) {
          const jsonData = cookie.substring(name.length);
          return JSON.parse(jsonData);
        }
      }
      return null;
    } catch (error) {
      console.error('Error cargando cookies:', error);
      return null;
    }
  },

  // Eliminar cookie específica
  delete: function(key) {
    document.cookie = `pastSimple_${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    console.log(`Cookie eliminada: ${key}`);
  },

  // Limpiar todas las cookies del juego
  clearAll: function() {
    const keys = ['scores', 'progress', 'settings', 'achievements'];
    keys.forEach(key => this.delete(key));
    console.log('Todas las cookies eliminadas');
  }
};

// Sistema de Progreso y Logros
const ProgressManager = {
  data: {
    totalQuestions: 0,
    correctAnswers: 0,
    exercisesCompleted: [],
    achievements: [],
    streakDays: 0,
    lastPlayDate: null,
    bestScores: {
      multipleChoice: 0,
      fillBlanks: 0,
      dragDrop: 0,
      finalExam: 0
    }
  },

  init: function() {
    const savedProgress = CookieManager.load('progress');
    if (savedProgress) {
      this.data = { ...this.data, ...savedProgress };
    }
    this.updateStreak();
  },

  updateStreak: function() {
    const today = new Date().toDateString();
    const lastPlay = this.data.lastPlayDate;
    
    if (lastPlay) {
      const lastDate = new Date(lastPlay);
      const todayDate = new Date(today);
      const diffTime = todayDate - lastDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        this.data.streakDays++;
      } else if (diffDays > 1) {
        this.data.streakDays = 1;
      }
    } else {
      this.data.streakDays = 1;
    }
    
    this.data.lastPlayDate = today;
    this.save();
  },

  addScore: function(exerciseType, score, total) {
    this.data.totalQuestions += total;
    this.data.correctAnswers += score;
    
    const percentage = Math.round((score / total) * 100);
    if (percentage > this.data.bestScores[exerciseType]) {
      this.data.bestScores[exerciseType] = percentage;
    }
    
    if (!this.data.exercisesCompleted.includes(exerciseType)) {
      this.data.exercisesCompleted.push(exerciseType);
    }
    
    this.checkAchievements(exerciseType, percentage);
    this.save();
  },

  checkAchievements: function(exerciseType, percentage) {
    const achievements = [
      { id: 'first_perfect', name: 'Perfección', desc: 'Obtén 100% en cualquier ejercicio', condition: percentage === 100 },
      { id: 'streak_7', name: 'Constancia', desc: 'Juega 7 días seguidos', condition: this.data.streakDays >= 7 },
      { id: 'all_exercises', name: 'Explorador', desc: 'Completa todos los tipos de ejercicios', condition: this.data.exercisesCompleted.length >= 4 },
      { id: 'master_student', name: 'Estudiante Maestro', desc: 'Responde 100 preguntas correctamente', condition: this.data.correctAnswers >= 100 }
    ];

    achievements.forEach(achievement => {
      if (achievement.condition && !this.data.achievements.includes(achievement.id)) {
        this.data.achievements.push(achievement.id);
        this.showAchievement(achievement);
      }
    });
  },

  showAchievement: function(achievement) {
    // Crear notificación de logro
    const notification = createSafeElement('div', '', 'achievement-notification');
    
    const icon = createIcon('fas fa-trophy');
    const title = createSafeElement('h4', '¡Logro Desbloqueado!');
    const name = createSafeElement('strong', achievement.name);
    const desc = createSafeElement('p', achievement.desc);
    
    notification.appendChild(icon);
    notification.appendChild(title);
    notification.appendChild(name);
    notification.appendChild(desc);
    
    document.body.appendChild(notification);
    
    // Remover después de 5 segundos
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
  },

  save: function() {
    CookieManager.save('progress', this.data);
  },

  getStats: function() {
    const accuracy = this.data.totalQuestions > 0 ? 
      Math.round((this.data.correctAnswers / this.data.totalQuestions) * 100) : 0;
    
    return {
      totalQuestions: this.data.totalQuestions,
      correctAnswers: this.data.correctAnswers,
      accuracy: accuracy,
      exercisesCompleted: this.data.exercisesCompleted.length,
      achievements: this.data.achievements.length,
      streakDays: this.data.streakDays,
      bestScores: this.data.bestScores
    };
  }
};

// Funciones seguras
function createSafeElement(tag, text = '', className = '') {
  const element = document.createElement(tag);
  if (text) element.textContent = text;
  if (className) element.className = className;
  return element;
}

function createIcon(iconClass) {
  const icon = document.createElement('i');
  icon.className = iconClass;
  return icon;
}

function clearElementSafely(element) {
  if (!element) return;
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Variables globales
let currentQuestion = 0;
let scores = {
  multipleChoice: 0,
  fillBlanks: 0,
  dragDrop: 0,
  finalExam: 0
};

// Navegación
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

function showMainMenu() {
  showScreen('main-menu');
}

function startExercise(exerciseType) {
  switch(exerciseType) {
    case 'theory':
      initTheory();
      break;
    case 'multiple-choice':
      initMultipleChoice();
      break;
    case 'fill-blanks':
      initFillBlanks();
      break;
    case 'drag-drop':
      initDragDrop();
      break;
    case 'final-exam':
      initFinalExam();
      break;
    default:
      console.log('Ejercicio:', exerciseType);
      return;
  }
  showScreen(exerciseType);
}

// Multiple Choice
function initMultipleChoice() {
  currentQuestion = 0;
  scores.multipleChoice = 0;
  
  const resultsElement = document.getElementById('mc-results');
  const containerElement = document.getElementById('mc-question-container');
  
  if (resultsElement) resultsElement.classList.add('hidden');
  if (containerElement) containerElement.classList.remove('hidden');
  
  showMultipleChoiceQuestion();
}

function showMultipleChoiceQuestion() {
  if (currentQuestion >= appData.multipleChoiceQuestions.length) {
    showMultipleChoiceResults();
    return;
  }
  
  const question = appData.multipleChoiceQuestions[currentQuestion];
  
  const progressElement = document.getElementById('mc-progress');
  if (progressElement) {
    clearElementSafely(progressElement);
    const progressIcon = createIcon('fas fa-question-circle');
    const progressText = document.createTextNode(' Pregunta ' + (currentQuestion + 1) + ' de ' + appData.multipleChoiceQuestions.length);
    progressElement.appendChild(progressIcon);
    progressElement.appendChild(progressText);
  }
  
  const questionElement = document.getElementById('mc-question');
  if (questionElement) {
    questionElement.textContent = question.question;
  }
  
  const feedbackElement = document.getElementById('mc-feedback');
  if (feedbackElement) {
    clearElementSafely(feedbackElement);
  }
  
  const optionsContainer = document.getElementById('mc-options');
  if (optionsContainer) {
    clearElementSafely(optionsContainer);
    
    question.options.forEach((option, index) => {
      const button = createSafeElement('button', '', 'option-btn');
      const optionLetter = createSafeElement('span', String.fromCharCode(65 + index), 'option-letter');
      const optionText = document.createTextNode(' ' + option);
      button.appendChild(optionLetter);
      button.appendChild(optionText);
      button.onclick = () => selectMultipleChoiceAnswer(index);
      optionsContainer.appendChild(button);
    });
  }
}

function selectMultipleChoiceAnswer(selectedIndex) {
  const question = appData.multipleChoiceQuestions[currentQuestion];
  const options = document.querySelectorAll('#mc-options .option-btn');
  const feedback = document.getElementById('mc-feedback');
  
  options.forEach(btn => btn.disabled = true);
  if (options[selectedIndex]) {
    options[selectedIndex].classList.add('selected');
  }
  
  if (feedback) {
    clearElementSafely(feedback);
    
    if (selectedIndex === question.correct) {
      if (options[selectedIndex]) {
        options[selectedIndex].classList.add('correct');
      }
      scores.multipleChoice++;
      
      const feedbackDiv = createSafeElement('div', '', 'feedback correct');
      const feedbackIcon = createIcon('fas fa-check-circle');
      const feedbackText = document.createTextNode(' ¡Correcto! ¡Bien hecho!');
      feedbackDiv.appendChild(feedbackIcon);
      feedbackDiv.appendChild(feedbackText);
      feedback.appendChild(feedbackDiv);
    } else {
      if (options[selectedIndex]) {
        options[selectedIndex].classList.add('incorrect');
      }
      if (options[question.correct]) {
        options[question.correct].classList.add('correct');
      }
      
      const feedbackDiv = createSafeElement('div', '', 'feedback incorrect');
      const feedbackIcon = createIcon('fas fa-times-circle');
      const feedbackText = document.createTextNode(' Incorrecto. La respuesta correcta es "' + question.options[question.correct] + '"');
      feedbackDiv.appendChild(feedbackIcon);
      feedbackDiv.appendChild(feedbackText);
      feedback.appendChild(feedbackDiv);
    }
  }
  
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < appData.multipleChoiceQuestions.length) {
      showMultipleChoiceQuestion();
    } else {
      showMultipleChoiceResults();
    }
  }, 2500);
}

function showMultipleChoiceResults() {
  const containerElement = document.getElementById('mc-question-container');
  const resultsElement = document.getElementById('mc-results');
  
  if (containerElement) containerElement.classList.add('hidden');
  if (resultsElement) resultsElement.classList.remove('hidden');
  
  const score = scores.multipleChoice;
  const total = appData.multipleChoiceQuestions.length;
  const percentage = Math.round((score / total) * 100);
  
  // Guardar progreso en cookies
  ProgressManager.addScore('multipleChoice', score, total);
  
  const scoreElement = document.getElementById('mc-score');
  if (scoreElement) scoreElement.textContent = score + '/' + total;
  
  const percentageElement = document.getElementById('mc-percentage');
  if (percentageElement) percentageElement.textContent = percentage + '%';
  
  const messageElement = document.getElementById('mc-message');
  if (messageElement) {
    clearElementSafely(messageElement);
    
    if (percentage >= 80) {
      const icon = createIcon('fas fa-trophy');
      const text = document.createTextNode(' ¡Excelente trabajo! Has dominado el Past Simple!');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message excellent';
    } else if (percentage >= 60) {
      const icon = createIcon('fas fa-thumbs-up');
      const text = document.createTextNode(' ¡Buen trabajo! Sigue practicando para mejorar más.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message good';
    } else {
      const icon = createIcon('fas fa-book-open');
      const text = document.createTextNode(' ¡Sigue practicando! Revisa la teoría e inténtalo de nuevo.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message needs-improvement';
    }
  }
  
  // Mostrar estadísticas adicionales
  showProgressStats();
}

// Fill in the Blanks
function initFillBlanks() {
  scores.fillBlanks = 0;
  
  const resultsElement = document.getElementById('fill-results');
  const checkBtn = document.getElementById('check-fill-btn');
  const resetBtn = document.getElementById('reset-fill-btn');
  
  if (resultsElement) resultsElement.classList.add('hidden');
  if (checkBtn) checkBtn.classList.remove('hidden');
  if (resetBtn) resetBtn.classList.add('hidden');
  
  generateFillQuestions();
}

function generateFillQuestions() {
  const container = document.getElementById('fill-questions');
  if (!container) return;
  
  clearElementSafely(container);
  
  appData.fillInBlanks.forEach((item, index) => {
    const questionDiv = createSafeElement('div', '', 'fill-question');
    
    const questionPara = createSafeElement('p');
    const questionNumber = createSafeElement('strong', (index + 1) + '.');
    questionPara.appendChild(questionNumber);
    
    // Dividir la oración en partes
    const parts = item.sentence.split('___');
    questionPara.appendChild(document.createTextNode(' ' + parts[0]));
    
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'fill-input';
    input.id = 'fill-' + index;
    input.placeholder = 'Escribe aquí...';
    questionPara.appendChild(input);
    
    if (parts[1]) {
      questionPara.appendChild(document.createTextNode(parts[1]));
    }
    
    questionDiv.appendChild(questionPara);
    
    // Hint
    const hintDiv = createSafeElement('div', '', 'fill-hint');
    const hintIcon = createIcon('fas fa-lightbulb');
    const hintSmall = createSafeElement('small');
    hintSmall.appendChild(document.createTextNode('Infinitivo: '));
    const hintStrong = createSafeElement('strong', item.infinitive);
    hintSmall.appendChild(hintStrong);
    hintDiv.appendChild(hintIcon);
    hintDiv.appendChild(document.createTextNode(' '));
    hintDiv.appendChild(hintSmall);
    questionDiv.appendChild(hintDiv);
    
    // Translation
    const translationDiv = createSafeElement('div', '', 'fill-translation');
    const translationIcon = createIcon('fas fa-language');
    const translationSmall = createSafeElement('small', item.translation);
    translationDiv.appendChild(translationIcon);
    translationDiv.appendChild(document.createTextNode(' '));
    translationDiv.appendChild(translationSmall);
    questionDiv.appendChild(translationDiv);
    
    // Answer div
    const answerDiv = createSafeElement('div', '', 'fill-answer');
    answerDiv.id = 'answer-' + index;
    questionDiv.appendChild(answerDiv);
    
    container.appendChild(questionDiv);
  });
}

function checkFillAnswers() {
  let correct = 0;
  const total = appData.fillInBlanks.length;
  
  appData.fillInBlanks.forEach((item, index) => {
    const input = document.getElementById('fill-' + index);
    const answerDiv = document.getElementById('answer-' + index);
    
    if (!input || !answerDiv) return;
    
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = item.answer.toLowerCase();
    
    clearElementSafely(answerDiv);
    
    if (userAnswer === correctAnswer) {
      input.classList.add('correct');
      const icon = createIcon('fas fa-check-circle');
      const text = document.createTextNode(' ¡Correcto!');
      answerDiv.appendChild(icon);
      answerDiv.appendChild(text);
      answerDiv.className = 'fill-answer correct';
      correct++;
    } else {
      input.classList.add('incorrect');
      const icon = createIcon('fas fa-times-circle');
      const text1 = document.createTextNode(' Incorrecto. Respuesta: ');
      const strong = createSafeElement('strong', item.answer);
      answerDiv.appendChild(icon);
      answerDiv.appendChild(text1);
      answerDiv.appendChild(strong);
      answerDiv.className = 'fill-answer incorrect';
    }
    input.disabled = true;
  });
  
  scores.fillBlanks = correct;
  showFillResults();
  
  const checkBtn = document.getElementById('check-fill-btn');
  const resetBtn = document.getElementById('reset-fill-btn');
  if (checkBtn) checkBtn.classList.add('hidden');
  if (resetBtn) resetBtn.classList.remove('hidden');
}

function showFillResults() {
  const resultsElement = document.getElementById('fill-results');
  if (!resultsElement) return;
  
  resultsElement.classList.remove('hidden');
  
  const score = scores.fillBlanks;
  const total = appData.fillInBlanks.length;
  const percentage = Math.round((score / total) * 100);
  
  // Guardar progreso en cookies
  ProgressManager.addScore('fillBlanks', score, total);
  
  const scoreElement = document.getElementById('fill-score');
  if (scoreElement) scoreElement.textContent = score + '/' + total;
  
  const percentageElement = document.getElementById('fill-percentage');
  if (percentageElement) percentageElement.textContent = percentage + '%';
  
  const messageElement = document.getElementById('fill-message');
  if (messageElement) {
    clearElementSafely(messageElement);
    
    if (percentage >= 80) {
      const icon = createIcon('fas fa-trophy');
      const text = document.createTextNode(' ¡Excelente! Dominas muy bien el Past Simple.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message excellent';
    } else if (percentage >= 60) {
      const icon = createIcon('fas fa-thumbs-up');
      const text = document.createTextNode(' ¡Bien! Sigue practicando para mejorar.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message good';
    } else {
      const icon = createIcon('fas fa-book-open');
      const text = document.createTextNode(' Necesitas más práctica. Revisa la teoría.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message needs-improvement';
    }
  }
}

// Drag and Drop - Versión Mejorada
let dragDropData = {
  selectedVerbs: [],
  userAnswers: {},
  isCompleted: false
};

function initDragDrop() {
  scores.dragDrop = 0;
  dragDropData = {
    selectedVerbs: [],
    userAnswers: {},
    isCompleted: false
  };
  
  const resultsElement = document.getElementById('drag-results');
  const containerElement = document.getElementById('drag-container');
  const checkBtn = document.getElementById('check-drag-btn');
  const resetBtn = document.getElementById('reset-drag-btn');
  
  if (resultsElement) resultsElement.classList.add('hidden');
  if (containerElement) containerElement.classList.remove('hidden');
  if (checkBtn) checkBtn.classList.remove('hidden');
  if (resetBtn) resetBtn.classList.add('hidden');
  
  generateDragDropExercise();
}

function generateDragDropExercise() {
  const presentContainer = document.getElementById('present-verbs');
  const pastContainer = document.getElementById('past-verbs');
  
  if (!presentContainer || !pastContainer) return;
  
  clearElementSafely(presentContainer);
  clearElementSafely(pastContainer);
  
  // Seleccionar 8 verbos aleatorios para el ejercicio
  const shuffledVerbs = [...appData.dragAndDrop].sort(() => Math.random() - 0.5);
  dragDropData.selectedVerbs = shuffledVerbs.slice(0, 8);
  
  // Crear encabezados
  const presentHeader = createSafeElement('h3');
  const presentIcon = createIcon('fas fa-clock');
  const presentText = document.createTextNode(' Verbos en Presente');
  presentHeader.appendChild(presentIcon);
  presentHeader.appendChild(presentText);
  presentContainer.appendChild(presentHeader);
  
  const pastHeader = createSafeElement('h3');
  const pastIcon = createIcon('fas fa-history');
  const pastText = document.createTextNode(' Verbos en Pasado (arrastra aquí)');
  pastHeader.appendChild(pastIcon);
  pastHeader.appendChild(pastText);
  pastContainer.appendChild(pastHeader);
  
  // Crear verbos en presente (lado izquierdo)
  dragDropData.selectedVerbs.forEach((verb, index) => {
    const verbCard = createSafeElement('div', '', 'verb-card present-verb');
    verbCard.id = 'present-' + index;
    verbCard.dataset.verbIndex = index;
    
    const verbText = createSafeElement('div', verb.present, 'verb-text');
    const translation = createSafeElement('div', verb.translation.split(' - ')[0], 'verb-translation');
    
    verbCard.appendChild(verbText);
    verbCard.appendChild(translation);
    
    // Hacer clickeable para seleccionar
    verbCard.addEventListener('click', () => selectPresentVerb(verbCard));
    
    presentContainer.appendChild(verbCard);
  });
  
  // Crear slots para verbos en pasado (lado derecho) - mezclados
  const shuffledPastVerbs = [...dragDropData.selectedVerbs].sort(() => Math.random() - 0.5);
  
  shuffledPastVerbs.forEach((verb, index) => {
    const pastCard = createSafeElement('div', '', 'verb-card past-verb');
    pastCard.id = 'past-' + index;
    pastCard.dataset.correctIndex = dragDropData.selectedVerbs.findIndex(v => v.present === verb.present);
    
    const verbText = createSafeElement('div', verb.past, 'verb-text');
    const translation = createSafeElement('div', verb.translation.split(' - ')[1], 'verb-translation');
    
    pastCard.appendChild(verbText);
    pastCard.appendChild(translation);
    
    // Hacer clickeable para emparejar
    pastCard.addEventListener('click', () => selectPastVerb(pastCard));
    
    pastContainer.appendChild(pastCard);
  });
  
  // Crear área de emparejamiento
  const matchingArea = createSafeElement('div', '', 'matching-area');
  const matchingTitle = createSafeElement('h4', 'Emparejamientos:');
  matchingArea.appendChild(matchingTitle);
  
  const matchingList = createSafeElement('div', '', 'matching-list');
  matchingList.id = 'matching-list';
  matchingArea.appendChild(matchingList);
  
  pastContainer.appendChild(matchingArea);
}

let selectedPresentVerb = null;

function selectPresentVerb(card) {
  // Remover selección anterior
  document.querySelectorAll('.present-verb').forEach(v => v.classList.remove('selected'));
  
  // Seleccionar nuevo verbo
  card.classList.add('selected');
  selectedPresentVerb = card;
}

function selectPastVerb(pastCard) {
  if (!selectedPresentVerb) {
    // Si no hay verbo presente seleccionado, seleccionar uno automáticamente
    const presentCards = document.querySelectorAll('.present-verb:not(.matched)');
    if (presentCards.length > 0) {
      selectedPresentVerb = presentCards[0];
      selectedPresentVerb.classList.add('selected');
    } else {
      return;
    }
  }
  
  const presentIndex = selectedPresentVerb.dataset.verbIndex;
  const pastCorrectIndex = pastCard.dataset.correctIndex;
  
  // Crear emparejamiento
  createMatching(selectedPresentVerb, pastCard, presentIndex === pastCorrectIndex);
  
  // Marcar como emparejados
  selectedPresentVerb.classList.add('matched');
  selectedPresentVerb.classList.remove('selected');
  pastCard.classList.add('matched');
  
  selectedPresentVerb = null;
  
  // Verificar si todos están emparejados
  const remainingPresent = document.querySelectorAll('.present-verb:not(.matched)');
  if (remainingPresent.length === 0) {
    dragDropData.isCompleted = true;
    const checkBtn = document.getElementById('check-drag-btn');
    if (checkBtn) checkBtn.textContent = 'Ver Resultados';
  }
}

function createMatching(presentCard, pastCard, isCorrect) {
  const matchingList = document.getElementById('matching-list');
  if (!matchingList) return;
  
  const matchDiv = createSafeElement('div', '', 'matching-pair');
  
  const presentText = presentCard.querySelector('.verb-text').textContent;
  const pastText = pastCard.querySelector('.verb-text').textContent;
  
  const matchText = createSafeElement('span', `${presentText} → ${pastText}`);
  const statusIcon = createIcon(isCorrect ? 'fas fa-check-circle correct' : 'fas fa-times-circle incorrect');
  
  matchDiv.appendChild(matchText);
  matchDiv.appendChild(statusIcon);
  
  matchingList.appendChild(matchDiv);
  
  // Guardar respuesta
  const presentIndex = presentCard.dataset.verbIndex;
  dragDropData.userAnswers[presentIndex] = {
    selectedPast: pastText,
    isCorrect: isCorrect
  };
}

function checkDragAnswers() {
  if (!dragDropData.isCompleted) {
    alert('Por favor completa todos los emparejamientos primero.');
    return;
  }
  
  let correct = 0;
  const total = dragDropData.selectedVerbs.length;
  
  Object.values(dragDropData.userAnswers).forEach(answer => {
    if (answer.isCorrect) correct++;
  });
  
  scores.dragDrop = correct;
  showDragDropResults();
}

function showDragDropResults() {
  const resultsElement = document.getElementById('drag-results');
  const containerElement = document.getElementById('drag-container');
  
  if (resultsElement) resultsElement.classList.remove('hidden');
  if (containerElement) containerElement.classList.add('hidden');
  
  const score = scores.dragDrop;
  const total = dragDropData.selectedVerbs.length;
  const percentage = Math.round((score / total) * 100);
  
  // Guardar progreso en cookies
  ProgressManager.addScore('dragDrop', score, total);
  
  const scoreElement = document.getElementById('drag-score');
  if (scoreElement) scoreElement.textContent = score + '/' + total;
  
  const percentageElement = document.getElementById('drag-percentage');
  if (percentageElement) percentageElement.textContent = percentage + '%';
  
  const messageElement = document.getElementById('drag-message');
  if (messageElement) {
    clearElementSafely(messageElement);
    
    if (percentage >= 80) {
      const icon = createIcon('fas fa-trophy');
      const text = document.createTextNode(' ¡Excelente! Dominas los verbos irregulares.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message excellent';
    } else if (percentage >= 60) {
      const icon = createIcon('fas fa-thumbs-up');
      const text = document.createTextNode(' ¡Bien! Sigue practicando los verbos irregulares.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message good';
    } else {
      const icon = createIcon('fas fa-book-open');
      const text = document.createTextNode(' Necesitas más práctica con los verbos irregulares.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message needs-improvement';
    }
  }
}

// Examen Final Mejorado
let finalExamData = {
  currentQuestion: 0,
  answers: [],
  isCompleted: false
};

function initFinalExam() {
  finalExamData = {
    currentQuestion: 0,
    answers: [],
    isCompleted: false
  };
  scores.finalExam = 0;
  
  const resultsElement = document.getElementById('final-results');
  const containerElement = document.getElementById('final-question-container');
  
  if (resultsElement) resultsElement.classList.add('hidden');
  if (containerElement) containerElement.classList.remove('hidden');
  
  showFinalExamQuestion();
}

function showFinalExamQuestion() {
  if (finalExamData.currentQuestion >= appData.finalExamQuestions.length) {
    showFinalExamResults();
    return;
  }
  
  const question = appData.finalExamQuestions[finalExamData.currentQuestion];
  
  const progressElement = document.getElementById('final-progress');
  if (progressElement) {
    clearElementSafely(progressElement);
    const progressIcon = createIcon('fas fa-graduation-cap');
    const progressText = document.createTextNode(' Pregunta ' + (finalExamData.currentQuestion + 1) + ' de ' + appData.finalExamQuestions.length);
    progressElement.appendChild(progressIcon);
    progressElement.appendChild(progressText);
  }
  
  const questionElement = document.getElementById('final-question');
  if (questionElement) {
    questionElement.textContent = question.question;
  }
  
  const containerElement = document.getElementById('final-answer-container');
  if (containerElement) {
    clearElementSafely(containerElement);
    
    if (question.type === 'multiple-choice') {
      question.options.forEach((option, index) => {
        const button = createSafeElement('button', '', 'option-btn');
        const optionLetter = createSafeElement('span', String.fromCharCode(65 + index), 'option-letter');
        const optionText = document.createTextNode(' ' + option);
        button.appendChild(optionLetter);
        button.appendChild(optionText);
        button.onclick = () => selectFinalAnswer(index);
        containerElement.appendChild(button);
      });
    } else if (question.type === 'fill-blank') {
      const inputDiv = createSafeElement('div', '', 'fill-input-container');
      
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'fill-input';
      input.id = 'final-input';
      input.placeholder = 'Escribe tu respuesta aquí...';
      
      const submitBtn = createSafeElement('button', 'Siguiente', 'btn btn--primary');
      submitBtn.onclick = () => {
        const answer = input.value.trim();
        if (answer) {
          selectFinalAnswer(answer);
        } else {
          alert('Por favor escribe una respuesta.');
        }
      };
      
      inputDiv.appendChild(input);
      inputDiv.appendChild(submitBtn);
      containerElement.appendChild(inputDiv);
      
      // Mostrar pista si existe
      if (question.infinitive) {
        const hintDiv = createSafeElement('div', '', 'fill-hint');
        const hintIcon = createIcon('fas fa-lightbulb');
        const hintText = document.createTextNode(' Infinitivo: ' + question.infinitive);
        hintDiv.appendChild(hintIcon);
        hintDiv.appendChild(hintText);
        containerElement.appendChild(hintDiv);
      }
      
      if (question.translation) {
        const translationDiv = createSafeElement('div', '', 'fill-translation');
        const translationIcon = createIcon('fas fa-language');
        const translationText = document.createTextNode(' ' + question.translation);
        translationDiv.appendChild(translationIcon);
        translationDiv.appendChild(translationText);
        containerElement.appendChild(translationDiv);
      }
    }
  }
}

function selectFinalAnswer(answer) {
  const question = appData.finalExamQuestions[finalExamData.currentQuestion];
  let isCorrect = false;
  
  if (question.type === 'multiple-choice') {
    isCorrect = answer === question.correct;
  } else if (question.type === 'fill-blank') {
    isCorrect = answer.toLowerCase() === question.answer.toLowerCase();
  }
  
  finalExamData.answers.push({
    question: question.question,
    userAnswer: answer,
    correctAnswer: question.type === 'multiple-choice' ? question.options[question.correct] : question.answer,
    isCorrect: isCorrect,
    type: question.type
  });
  
  if (isCorrect) {
    scores.finalExam++;
  }
  
  finalExamData.currentQuestion++;
  
  // Pequeña pausa antes de la siguiente pregunta
  setTimeout(() => {
    showFinalExamQuestion();
  }, 500);
}

function showFinalExamResults() {
  const resultsElement = document.getElementById('final-results');
  const containerElement = document.getElementById('final-question-container');
  
  if (resultsElement) resultsElement.classList.remove('hidden');
  if (containerElement) containerElement.classList.add('hidden');
  
  const score = scores.finalExam;
  const total = appData.finalExamQuestions.length;
  const percentage = Math.round((score / total) * 100);
  
  // Guardar progreso en cookies
  ProgressManager.addScore('finalExam', score, total);
  
  const scoreElement = document.getElementById('final-score');
  if (scoreElement) scoreElement.textContent = score + '/' + total;
  
  const percentageElement = document.getElementById('final-percentage');
  if (percentageElement) percentageElement.textContent = percentage + '%';
  
  const messageElement = document.getElementById('final-message');
  if (messageElement) {
    clearElementSafely(messageElement);
    
    if (percentage >= 80) {
      const icon = createIcon('fas fa-trophy');
      const text = document.createTextNode(' ¡Felicitaciones! Has aprobado el examen final.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message excellent';
    } else if (percentage >= 60) {
      const icon = createIcon('fas fa-thumbs-up');
      const text = document.createTextNode(' ¡Bien! Puedes mejorar con más práctica.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message good';
    } else {
      const icon = createIcon('fas fa-book-open');
      const text = document.createTextNode(' Necesitas estudiar más. Revisa la teoría y practica.');
      messageElement.appendChild(icon);
      messageElement.appendChild(text);
      messageElement.className = 'result-message needs-improvement';
    }
  }
  
  finalExamData.isCompleted = true;
}

// Función para mostrar estadísticas de progreso
function showProgressStats() {
  const stats = ProgressManager.getStats();
  
  // Crear o actualizar panel de estadísticas
  let statsPanel = document.getElementById('progress-stats');
  if (!statsPanel) {
    statsPanel = createSafeElement('div', '', 'progress-stats');
    statsPanel.id = 'progress-stats';
    document.body.appendChild(statsPanel);
  }
  
  clearElementSafely(statsPanel);
  
  const title = createSafeElement('h3', 'Tu Progreso');
  const closeBtn = createSafeElement('button', '×', 'close-btn');
  closeBtn.onclick = () => statsPanel.style.display = 'none';
  
  const accuracyDiv = createSafeElement('div', '', 'stat-item');
  const accuracyIcon = createIcon('fas fa-bullseye');
  const accuracyText = document.createTextNode(` Precisión: ${stats.accuracy}%`);
  accuracyDiv.appendChild(accuracyIcon);
  accuracyDiv.appendChild(accuracyText);
  
  const questionsDiv = createSafeElement('div', '', 'stat-item');
  const questionsIcon = createIcon('fas fa-question-circle');
  const questionsText = document.createTextNode(` Preguntas respondidas: ${stats.totalQuestions}`);
  questionsDiv.appendChild(questionsIcon);
  questionsDiv.appendChild(questionsText);
  
  const streakDiv = createSafeElement('div', '', 'stat-item');
  const streakIcon = createIcon('fas fa-fire');
  const streakText = document.createTextNode(` Racha de días: ${stats.streakDays}`);
  streakDiv.appendChild(streakIcon);
  streakDiv.appendChild(streakText);
  
  const achievementsDiv = createSafeElement('div', '', 'stat-item');
  const achievementsIcon = createIcon('fas fa-trophy');
  const achievementsText = document.createTextNode(` Logros: ${stats.achievements}`);
  achievementsDiv.appendChild(achievementsIcon);
  achievementsDiv.appendChild(achievementsText);
  
  statsPanel.appendChild(title);
  statsPanel.appendChild(closeBtn);
  statsPanel.appendChild(accuracyDiv);
  statsPanel.appendChild(questionsDiv);
  statsPanel.appendChild(streakDiv);
  statsPanel.appendChild(achievementsDiv);
  
  // Mostrar mejores puntuaciones
  const bestScoresTitle = createSafeElement('h4', 'Mejores Puntuaciones');
  statsPanel.appendChild(bestScoresTitle);
  
  Object.entries(stats.bestScores).forEach(([exercise, score]) => {
    if (score > 0) {
      const scoreDiv = createSafeElement('div', '', 'stat-item');
      const exerciseName = {
        'multipleChoice': 'Opción Múltiple',
        'fillBlanks': 'Completar Huecos',
        'dragDrop': 'Arrastrar y Soltar',
        'finalExam': 'Examen Final'
      }[exercise] || exercise;
      
      const scoreIcon = createIcon('fas fa-star');
      const scoreText = document.createTextNode(` ${exerciseName}: ${score}%`);
      scoreDiv.appendChild(scoreIcon);
      scoreDiv.appendChild(scoreText);
      statsPanel.appendChild(scoreDiv);
    }
  });
  
  statsPanel.style.display = 'block';
}

function resetFillBlanks() {
  initFillBlanks();
}

function resetDragDrop() {
  initDragDrop();
}

// Funciones de navegación seguras
function goToThereWasWere() {
  window.location.href = 'there-was-were.html';
}

function goToVocabulary() {
  window.location.href = 'vocabulary.html';
}

function goToVerbToBePast() {
  window.location.href = 'verb-to-be-past.html';
}

function goToComparatives() {
  window.location.href = 'comparatives-superlatives.html';
}

// Variables para teoría
let currentTheorySection = 1;

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

function showTheorySection(sectionNumber) {
  // Ocultar todas las secciones
  document.querySelectorAll('.theory-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Mostrar la sección solicitada
  const targetSection = document.getElementById('theory-' + sectionNumber);
  if (targetSection) {
    targetSection.classList.add('active');
    currentTheorySection = sectionNumber;
  }
}

function initTheory() {
  currentTheorySection = 1;
  showTheorySection(1);
}

function resetFillExercise() {
  resetFillBlanks();
}

function resetDragExercise() {
  resetDragDrop();
}

function checkDragAnswers() {
  console.log('Verificar drag and drop');
}

// Inicialización con eventos seguros
document.addEventListener('DOMContentLoaded', function() {
  console.log('Aplicación segura ampliada cargada');
  
  // Inicializar sistema de progreso
  ProgressManager.init();
  
  // Botón de inicio
  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', showMainMenu);
  }
  
  // Botones de volver al menú
  const backButtons = document.querySelectorAll('[id$="-back-btn"], #mc-home, #theory-home');
  backButtons.forEach(btn => {
    btn.addEventListener('click', showMainMenu);
  });
  
  // Botones de navegación de teoría
  const theoryNextButtons = document.querySelectorAll('[id^="theory-next"]');
  theoryNextButtons.forEach(btn => {
    btn.addEventListener('click', nextTheorySection);
  });
  
  const theoryPrevButtons = document.querySelectorAll('[id^="theory-prev"]');
  theoryPrevButtons.forEach(btn => {
    btn.addEventListener('click', prevTheorySection);
  });
  
  // Botones de completar huecos
  const checkFillBtn = document.getElementById('check-fill-btn');
  if (checkFillBtn) {
    checkFillBtn.addEventListener('click', checkFillAnswers);
  }
  
  const resetFillBtn = document.getElementById('reset-fill-btn');
  if (resetFillBtn) {
    resetFillBtn.addEventListener('click', () => {
      initFillBlanks();
    });
  }
  
  // Botones de arrastrar y soltar
  const checkDragBtn = document.getElementById('check-drag-btn');
  if (checkDragBtn) {
    checkDragBtn.addEventListener('click', checkDragAnswers);
  }
  
  const resetDragBtn = document.getElementById('reset-drag-btn');
  if (resetDragBtn) {
    resetDragBtn.addEventListener('click', () => {
      initDragDrop();
    });
  }
  
  // Tarjetas de ejercicios
  const exerciseCards = document.querySelectorAll('.exercise-card');
  exerciseCards.forEach(card => {
    card.addEventListener('click', function() {
      const exercise = this.dataset.exercise;
      const action = this.dataset.action;
      
      if (exercise) {
        startExercise(exercise);
      } else if (action) {
        switch(action) {
          case 'there-was-were':
            goToThereWasWere();
            break;
          case 'vocabulary':
            goToVocabulary();
            break;
          case 'verb-to-be-past':
            goToVerbToBePast();
            break;
          case 'comparatives':
            goToComparatives();
            break;
        }
      }
    });
  });
  
  // Botones de verificar respuestas ya configurados arriba
  
  // Botones de repetir
  const retryButtons = document.querySelectorAll('#mc-retry, #final-retry');
  retryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const exerciseType = btn.id.includes('mc') ? 'multiple-choice' : 'final-exam';
      startExercise(exerciseType);
    });
  });
}); 