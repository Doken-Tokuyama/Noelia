// There Was/Were Application Data and Logic - SAFE VERSION
const thereWasWereData = {
  quizQuestions: [
    {
      question: "¿Cuál es la forma correcta?",
      context: "En la fiesta de ayer...",
      sentence: "___ many people at the party last night.",
      options: ["There was", "There were", "There is", "There are"],
      correct: 1,
      explanation: "Usamos 'There were' porque 'many people' es plural. ¡Recuerda: plural = were!",
      points: 10,
      difficulty: "beginner"
    },
    {
      question: "Completa la oración:",
      context: "Describiendo mi habitación cuando era niño...",
      sentence: "___ a beautiful painting on the wall.",
      options: ["There was", "There were", "There wasn't", "There weren't"],
      correct: 0,
      explanation: "¡Perfecto! 'A beautiful painting' es singular, por eso usamos 'There was'.",
      points: 10,
      difficulty: "beginner"
    },
    {
      question: "¿Cuál es la forma negativa correcta?",
      context: "En el frigorífico ayer...",
      sentence: "___ any milk in the fridge yesterday.",
      options: ["There was", "There were", "There wasn't", "There weren't"],
      correct: 2,
      explanation: "¡Excelente! 'Milk' es incontable y singular, usamos 'There wasn't' para negativo.",
      points: 15,
      difficulty: "intermediate"
    },
    {
      question: "¿Cuál es la pregunta correcta?",
      context: "Preguntando sobre el evento de ayer...",
      sentence: "___ any problems with the sound system?",
      options: ["Was there", "Were there", "There was", "There were"],
      correct: 1,
      explanation: "¡Muy bien! 'Any problems' es plural, entonces preguntamos 'Were there'.",
      points: 15,
      difficulty: "intermediate"
    },
    {
      question: "Elige la opción correcta:",
      context: "En el parque esta mañana...",
      sentence: "___ three dogs playing in the park.",
      options: ["There was", "There were", "There wasn't", "There weren't"],
      correct: 1,
      explanation: "¡Correcto! 'Three dogs' es plural, por eso usamos 'There were'.",
      points: 10,
      difficulty: "beginner"
    },
    {
      question: "¿Cuál es la forma negativa?",
      context: "En la reunión de ayer...",
      sentence: "___ enough chairs for everyone.",
      options: ["There was", "There were", "There wasn't", "There weren't"],
      correct: 3,
      explanation: "¡Genial! 'Enough chairs' es plural, y es negativo, usamos 'There weren't'.",
      points: 15,
      difficulty: "intermediate"
    },
    {
      question: "Completa correctamente:",
      context: "En mi mochila...",
      sentence: "___ a pencil and two books in my bag.",
      options: ["There was", "There were", "There wasn't", "There weren't"],
      correct: 0,
      explanation: "¡Perfecto! Aunque hay varios objetos, el primero ('a pencil') es singular, usamos 'There was'.",
      points: 20,
      difficulty: "advanced"
    },
    {
      question: "¿Cuál es la pregunta correcta?",
      context: "Preguntando sobre la biblioteca...",
      sentence: "___ many students in the library yesterday?",
      options: ["Was there", "Were there", "There was", "There were"],
      correct: 1,
      explanation: "¡Excelente! 'Many students' es plural, preguntamos con 'Were there'.",
      points: 15,
      difficulty: "intermediate"
    },
    {
      question: "Elige la forma correcta:",
      context: "En el concierto de anoche...",
      sentence: "___ a fantastic guitarist on stage.",
      options: ["There was", "There were", "There wasn't", "There weren't"],
      correct: 0,
      explanation: "¡Muy bien! 'A fantastic guitarist' es singular, usamos 'There was'.",
      points: 10,
      difficulty: "beginner"
    },
    {
      question: "¿Cuál es la forma negativa correcta?",
      context: "En el evento de ayer...",
      sentence: "___ any vegetarian options at the restaurant.",
      options: ["There was", "There were", "There wasn't", "There weren't"],
      correct: 3,
      explanation: "¡Perfecto! 'Any vegetarian options' es plural y negativo, usamos 'There weren't'.",
      points: 15,
      difficulty: "intermediate"
    },
    {
      question: "Completa la oración:",
      context: "Describiendo la situación en la oficina...",
      sentence: "___ too much noise in the office yesterday.",
      options: ["There was", "There were", "There wasn't", "There weren't"],
      correct: 0,
      explanation: "¡Correcto! 'Too much noise' es incontable (singular), usamos 'There was'.",
      points: 20,
      difficulty: "advanced"
    },
    {
      question: "¿Cuál es la respuesta correcta?",
      context: "Respondiendo a: 'Were there any cookies left?'",
      sentence: "No, ___.",
      options: ["there was", "there were", "there wasn't", "there weren't"],
      correct: 3,
      explanation: "¡Excelente! Respondemos a 'Were there' con 'No, there weren't'.",
      points: 20,
      difficulty: "advanced"
    }
  ],
  
  completeSentences: [
    {
      sentence: "___ a terrible accident on the highway yesterday.",
      options: ["There was", "There wasn't", "There were", "There weren't"],
      correct: 0,
      context: "Traffic news report",
      translation: "Hubo un terrible accidente en la autopista ayer.",
      explanation: "¡Correcto! 'A terrible accident' es singular, usamos 'There was'.",
      points: 15
    },
    {
      sentence: "___ any milk left in the refrigerator this morning.",
      options: ["There was", "There wasn't", "There were", "There weren't"],
      correct: 1,
      context: "Kitchen situation",
      translation: "No quedaba leche en el refrigerador esta mañana.",
      explanation: "¡Perfecto! 'Any milk' es singular y negativo, usamos 'There wasn't'.",
      points: 15
    },
    {
      sentence: "___ many people at the concert last night.",
      options: ["There was", "There wasn't", "There were", "There weren't"],
      correct: 2,
      context: "Entertainment event",
      translation: "Había mucha gente en el concierto anoche.",
      explanation: "¡Excelente! 'Many people' es plural, usamos 'There were'.",
      points: 15
    },
    {
      sentence: "___ enough chairs for all the guests at the party.",
      options: ["There was", "There wasn't", "There were", "There weren't"],
      correct: 3,
      context: "Party planning",
      translation: "No había suficientes sillas para todos los invitados en la fiesta.",
      explanation: "¡Muy bien! 'Enough chairs' es plural y negativo, usamos 'There weren't'.",
      points: 15
    },
    {
      sentence: "___ a beautiful sunset yesterday evening.",
      options: ["There was", "There wasn't", "There were", "There weren't"],
      correct: 0,
      context: "Weather description",
      translation: "Hubo una hermosa puesta de sol ayer por la tarde.",
      explanation: "¡Correcto! 'A beautiful sunset' es singular, usamos 'There was'.",
      points: 15
    }
  ],

  completeQuestions: [
    {
      sentence: "___ a doctor in the hospital last night?",
      options: ["Was there", "Were there"],
      correct: 0,
      context: "Emergency situation",
      translation: "¿Había un doctor en el hospital anoche?",
      explanation: "¡Correcto! 'A doctor' es singular, preguntamos con 'Was there'.",
      points: 18
    },
    {
      sentence: "___ any students in the classroom this morning?",
      options: ["Was there", "Were there"],
      correct: 1,
      context: "School inquiry",
      translation: "¿Había estudiantes en el aula esta mañana?",
      explanation: "¡Perfecto! 'Any students' es plural, preguntamos con 'Were there'.",
      points: 18
    },
    {
      sentence: "___ enough food for everyone at the party?",
      options: ["Was there", "Were there"],
      correct: 0,
      context: "Party planning",
      translation: "¿Había suficiente comida para todos en la fiesta?",
      explanation: "¡Excelente! 'Enough food' se considera singular, usamos 'Was there'.",
      points: 18
    }
  ],

  finishSentences: [
    {
      starter: "There was",
      options: [
        "a beautiful sunset yesterday evening.",
        "many people at the party last night.",
        "three cats sleeping in the garden.",
        "any problems with the computer."
      ],
      correct: 0,
      context: "Weather description",
      translation: "Había una hermosa puesta de sol ayer por la tarde.",
      explanation: "¡Correcto! 'There was' va con singular: 'a beautiful sunset'.",
      points: 20
    },
    {
      starter: "There were",
      options: [
        "a strange noise in the basement.",
        "too many cars in the parking lot.",
        "enough milk in the refrigerator.",
        "a power outage last night."
      ],
      correct: 1,
      context: "Parking situation",
      translation: "Había demasiados autos en el estacionamiento.",
      explanation: "¡Perfecto! 'There were' va con plural: 'too many cars'.",
      points: 20
    }
  ]
};

// Application state
let currentExercise = '';
let currentQuestion = 0;
let currentTheorySection = 1;
let userPoints = parseInt(localStorage.getItem('thereWasWerePoints') || '0');
let userStreak = parseInt(localStorage.getItem('thereWasWereStreak') || '0');
let userLevel = localStorage.getItem('thereWasWereLevel') || 'Principiante';

// Scores for different exercises
let scores = {
  quiz: 0,
  'complete-sentences': 0,
  'complete-questions': 0,
  'finish-sentences': 0,
  visual: 0,
  pronunciation: 0,
  challenge: 0
};

// Safe DOM manipulation functions
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
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Points system
function addPoints(points, reason = '') {
  userPoints += points;
  userStreak++;
  updateLevel();
  saveProgress();
  showPointsAnimation(points, reason);
  updatePointsDisplay();
}

function showPointsAnimation(points, reason) {
  const animation = createSafeElement('div', '', 'points-animation');
  const popup = createSafeElement('div', '', 'points-popup');
  
  const icon = createIcon('fas fa-star');
  const pointsSpan = createSafeElement('span', '+' + points + ' puntos');
  
  popup.appendChild(icon);
  popup.appendChild(pointsSpan);
  
  if (reason) {
    const reasonSmall = createSafeElement('small', reason);
    popup.appendChild(reasonSmall);
  }
  
  animation.appendChild(popup);
  document.body.appendChild(animation);
  
  setTimeout(() => {
    animation.classList.add('animate-out');
    setTimeout(() => {
      if (document.body.contains(animation)) {
        document.body.removeChild(animation);
      }
    }, 500);
  }, 2000);
}

function updateLevel() {
  if (userPoints >= 1000) {
    userLevel = 'Experto';
  } else if (userPoints >= 500) {
    userLevel = 'Avanzado';
  } else if (userPoints >= 200) {
    userLevel = 'Intermedio';
  } else {
    userLevel = 'Principiante';
  }
}

function saveProgress() {
  localStorage.setItem('thereWasWerePoints', userPoints.toString());
  localStorage.setItem('thereWasWereStreak', userStreak.toString());
  localStorage.setItem('thereWasWereLevel', userLevel);
}

function updatePointsDisplay() {
  const pointsElements = document.querySelectorAll('#total-points, #current-points, #quiz-points, #complete-sentences-points, #complete-questions-points, #finish-sentences-points');
  pointsElements.forEach(element => {
    if (element) {
      element.textContent = userPoints;
    }
  });
  
  const levelElements = document.querySelectorAll('#level');
  levelElements.forEach(element => {
    if (element) {
      element.textContent = userLevel;
    }
  });
  
  const streakElements = document.querySelectorAll('#streak-count');
  streakElements.forEach(element => {
    if (element) {
      element.textContent = userStreak;
    }
  });
}

function getMotivationalMessage(percentage, exerciseType) {
  if (percentage >= 90) {
    return '¡INCREÍBLE! Eres un maestro';
  } else if (percentage >= 80) {
    return '¡EXCELENTE! Muy buen trabajo';
  } else if (percentage >= 70) {
    return '¡BIEN! Vas por buen camino';
  } else if (percentage >= 60) {
    return 'Buen intento, sigue practicando';
  } else {
    return 'No te rindas, cada intento cuenta';
  }
}

function getImprovementTips() {
  const tips = [
    'Recuerda: singular = was, plural = were',
    'Practica con ejemplos reales',
    'Lee la teoría nuevamente',
    'Fíjate en las palabras clave'
  ];
  return tips[Math.floor(Math.random() * tips.length)];
}

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
  updatePointsDisplay();
}

function goToMainApp() {
  window.location.href = 'index.html';
}

function startExercise(exerciseType) {
  currentExercise = exerciseType;
  currentQuestion = 0;
  
  switch(exerciseType) {
    case 'theory':
      initTheory();
      break;
    case 'quiz':
      initQuiz();
      break;
    case 'complete-sentences':
      initCompleteSentences();
      break;
    case 'complete-questions':
      initCompleteQuestions();
      break;
    case 'finish-sentences':
      initFinishSentences();
      break;
    case 'visual':
      initVisual();
      break;
    case 'pronunciation':
      initPronunciation();
      break;
    case 'challenge':
      initChallenge();
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
  const targetSection = document.getElementById('theory-' + sectionNumber);
  if (targetSection) {
    targetSection.classList.add('active');
  }
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

// Quiz functionality
function initQuiz() {
  currentQuestion = 0;
  scores.quiz = 0;
  const resultsElement = document.getElementById('quiz-results');
  const containerElement = document.getElementById('quiz-question-container');
  
  if (resultsElement) resultsElement.classList.add('hidden');
  if (containerElement) containerElement.classList.remove('hidden');
  
  showQuizQuestion();
}

function showQuizQuestion() {
  if (currentQuestion >= thereWasWereData.quizQuestions.length) {
    showQuizResults();
    return;
  }
  
  const question = thereWasWereData.quizQuestions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / thereWasWereData.quizQuestions.length) * 100;
  
  // Update progress safely
  const progressElement = document.getElementById('quiz-progress');
  clearElementSafely(progressElement);
  const progressIcon = createIcon('fas fa-question-circle');
  const progressText = document.createTextNode(' Pregunta ' + (currentQuestion + 1) + ' de ' + thereWasWereData.quizQuestions.length);
  progressElement.appendChild(progressIcon);
  progressElement.appendChild(progressText);
  
  const progressFill = document.getElementById('quiz-progress-fill');
  if (progressFill) {
    progressFill.style.width = progressPercent + '%';
  }
  
  // Show question safely
  const questionElement = document.getElementById('quiz-question');
  if (questionElement) {
    questionElement.textContent = question.question;
  }
  
  // Show context safely
  const contextElement = document.getElementById('quiz-context');
  if (contextElement && question.context) {
    clearElementSafely(contextElement);
    const contextIcon = createIcon('fas fa-info-circle');
    const contextStrong = createSafeElement('strong', 'Contexto:');
    const contextText = document.createTextNode(' ' + question.context);
    contextElement.appendChild(contextIcon);
    contextElement.appendChild(document.createTextNode(' '));
    contextElement.appendChild(contextStrong);
    contextElement.appendChild(contextText);
    contextElement.style.display = 'block';
  } else {
    contextElement.style.display = 'none';
  }
  
  // Show sentence safely
  const sentenceElement = createSafeElement('div', '', 'sentence-to-complete');
  const sentencePara = createSafeElement('p');
  const sentenceIcon = createIcon('fas fa-edit');
  const sentenceText = document.createTextNode(' ' + question.sentence);
  sentencePara.appendChild(sentenceIcon);
  sentencePara.appendChild(sentenceText);
  sentenceElement.appendChild(sentencePara);
  
  const questionContainer = document.getElementById('quiz-question-container');
  const existingSentence = questionContainer.querySelector('.sentence-to-complete');
  if (existingSentence) {
    existingSentence.remove();
  }
  questionContainer.insertBefore(sentenceElement, document.getElementById('quiz-options'));
  
  // Show options safely
  const optionsContainer = document.getElementById('quiz-options');
  clearElementSafely(optionsContainer);
  
  question.options.forEach((option, index) => {
    const button = createSafeElement('button', '', 'option-btn');
    const optionLetter = createSafeElement('span', String.fromCharCode(65 + index), 'option-letter');
    const optionText = document.createTextNode(' ' + option);
    button.appendChild(optionLetter);
    button.appendChild(optionText);
    button.onclick = () => selectQuizAnswer(index);
    optionsContainer.appendChild(button);
  });
  
  // Clear feedback
  clearElementSafely(document.getElementById('quiz-feedback'));
  document.getElementById('quiz-explanation').classList.add('hidden');
}

function selectQuizAnswer(selectedIndex) {
  const question = thereWasWereData.quizQuestions[currentQuestion];
  const options = document.querySelectorAll('.option-btn');
  const feedback = document.getElementById('quiz-feedback');
  const explanation = document.getElementById('quiz-explanation');
  
  options.forEach(btn => btn.disabled = true);
  options[selectedIndex].classList.add('selected');
  
  if (selectedIndex === question.correct) {
    options[selectedIndex].classList.add('correct');
    scores.quiz++;
    addPoints(question.points, '¡Respuesta correcta!');
    
    const celebrations = [
      '¡Excelente! 🌟',
      '¡Perfecto! ⭐',
      '¡Muy bien! 💖',
      '¡Fantástico! 🎉',
      '¡Genial! 👏'
    ];
    
    const celebration = celebrations[Math.floor(Math.random() * celebrations.length)];
    
    // Create feedback safely
    clearElementSafely(feedback);
    const feedbackDiv = createSafeElement('div', '', 'feedback correct');
    const feedbackIcon = createIcon('fas fa-check-circle');
    const feedbackText = document.createTextNode(' ' + celebration);
    feedbackDiv.appendChild(feedbackIcon);
    feedbackDiv.appendChild(feedbackText);
    feedback.appendChild(feedbackDiv);
    
    // Create explanation safely
    clearElementSafely(explanation);
    const explanationDiv = createSafeElement('div', '', 'explanation-content correct');
    const explanationIcon = createIcon('fas fa-lightbulb');
    const explanationStrong = createSafeElement('strong', '¡Correcto!');
    const explanationText = document.createTextNode(' ' + question.explanation);
    const explanationPara = createSafeElement('p');
    explanationPara.appendChild(explanationStrong);
    explanationPara.appendChild(explanationText);
    explanationDiv.appendChild(explanationIcon);
    explanationDiv.appendChild(explanationPara);
    explanation.appendChild(explanationDiv);
  } else {
    options[selectedIndex].classList.add('incorrect');
    options[question.correct].classList.add('correct');
    
    // Create incorrect feedback safely
    clearElementSafely(feedback);
    const feedbackDiv = createSafeElement('div', '', 'feedback incorrect');
    const feedbackIcon = createIcon('fas fa-times-circle');
    const feedbackText = document.createTextNode(' No es correcto, pero ¡sigue intentando!');
    feedbackDiv.appendChild(feedbackIcon);
    feedbackDiv.appendChild(feedbackText);
    feedback.appendChild(feedbackDiv);
    
    // Create explanation safely
    clearElementSafely(explanation);
    const explanationDiv = createSafeElement('div', '', 'explanation-content incorrect');
    const explanationIcon = createIcon('fas fa-info-circle');
    
    const correctPara = createSafeElement('p');
    const correctStrong = createSafeElement('strong', 'La respuesta correcta es:');
    const correctText = document.createTextNode(' ' + question.options[question.correct]);
    correctPara.appendChild(correctStrong);
    correctPara.appendChild(correctText);
    
    const explanationPara = createSafeElement('p');
    const explanationStrong = createSafeElement('strong', 'Explicación:');
    const explanationText = document.createTextNode(' ' + question.explanation);
    explanationPara.appendChild(explanationStrong);
    explanationPara.appendChild(explanationText);
    
    const tipPara = createSafeElement('p', '', 'improvement-tip');
    tipPara.textContent = getImprovementTips();
    
    explanationDiv.appendChild(explanationIcon);
    explanationDiv.appendChild(correctPara);
    explanationDiv.appendChild(explanationPara);
    explanationDiv.appendChild(tipPara);
    explanation.appendChild(explanationDiv);
  }
  
  explanation.classList.remove('hidden');
  
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < thereWasWereData.quizQuestions.length) {
      showQuizQuestion();
    } else {
      showQuizResults();
    }
  }, 3500);
}

function showQuizResults() {
  const questionContainer = document.getElementById('quiz-question-container');
  const resultsContainer = document.getElementById('quiz-results');
  
  if (questionContainer) questionContainer.classList.add('hidden');
  if (resultsContainer) resultsContainer.classList.remove('hidden');
  
  const score = scores.quiz;
  const total = thereWasWereData.quizQuestions.length;
  const percentage = Math.round((score / total) * 100);
  const pointsEarned = score * 10;
  
  const scoreElement = document.getElementById('quiz-score');
  if (scoreElement) scoreElement.textContent = score + '/' + total;
  
  const percentageElement = document.getElementById('quiz-percentage');
  if (percentageElement) percentageElement.textContent = percentage + '%';
  
  const pointsElement = document.getElementById('quiz-total-points');
  if (pointsElement) pointsElement.textContent = pointsEarned + ' puntos ganados';
  
  const messageElement = document.getElementById('quiz-message');
  const motivationalMsg = getMotivationalMessage(percentage, 'quiz');
  
  clearElementSafely(messageElement);
  
  if (percentage >= 80) {
    const resultDiv = createSafeElement('div', '', 'result-excellent');
    const resultIcon = createIcon('fas fa-trophy');
    const resultTitle = createSafeElement('h3', motivationalMsg);
    const resultText = createSafeElement('p', '¡Dominas perfectamente "There was/were"! Estás listo para el siguiente nivel.');
    resultDiv.appendChild(resultIcon);
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultText);
    messageElement.appendChild(resultDiv);
    addPoints(50, '¡Quiz excelente completado!');
  } else if (percentage >= 60) {
    const resultDiv = createSafeElement('div', '', 'result-good');
    const resultIcon = createIcon('fas fa-star');
    const resultTitle = createSafeElement('h3', motivationalMsg);
    const resultText = createSafeElement('p', '¡Buen trabajo! Sigue practicando para mejorar.');
    resultDiv.appendChild(resultIcon);
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultText);
    messageElement.appendChild(resultDiv);
    addPoints(25, '¡Buen progreso!');
  } else {
    const resultDiv = createSafeElement('div', '', 'result-needs-improvement');
    const resultIcon = createIcon('fas fa-heart');
    const resultTitle = createSafeElement('h3', motivationalMsg);
    const resultText = createSafeElement('p', 'Estás aprendiendo. Cada pregunta te acerca más al éxito.');
    const tipText = createSafeElement('p', getImprovementTips(), 'improvement-tip');
    const suggestionText = createSafeElement('p');
    const suggestionStrong = createSafeElement('strong', 'Sugerencia:');
    const suggestionTextNode = document.createTextNode(' Revisa la teoría antes de intentar de nuevo.');
    suggestionText.appendChild(suggestionStrong);
    suggestionText.appendChild(suggestionTextNode);
    resultDiv.appendChild(resultIcon);
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultText);
    resultDiv.appendChild(tipText);
    resultDiv.appendChild(suggestionText);
    messageElement.appendChild(resultDiv);
    addPoints(10, '¡Esfuerzo reconocido!');
  }
}

// Complete Sentences Exercise
function initCompleteSentences() {
  currentQuestion = 0;
  scores['complete-sentences'] = 0;
  const resultsElement = document.getElementById('complete-sentences-results');
  const containerElement = document.getElementById('complete-sentences-container');
  
  if (resultsElement) resultsElement.classList.add('hidden');
  if (containerElement) containerElement.classList.remove('hidden');
  
  showCompleteSentencesQuestion();
}

function showCompleteSentencesQuestion() {
  if (currentQuestion >= thereWasWereData.completeSentences.length) {
    showCompleteSentencesResults();
    return;
  }
  
  const question = thereWasWereData.completeSentences[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / thereWasWereData.completeSentences.length) * 100;
  
  // Update progress safely
  const progressElement = document.getElementById('complete-sentences-progress');
  clearElementSafely(progressElement);
  const progressIcon = createIcon('fas fa-pen-fancy');
  const progressText = document.createTextNode(' Oración ' + (currentQuestion + 1) + ' de ' + thereWasWereData.completeSentences.length);
  progressElement.appendChild(progressIcon);
  progressElement.appendChild(progressText);
  
  const progressFill = document.getElementById('complete-sentences-progress-fill');
  if (progressFill) {
    progressFill.style.width = progressPercent + '%';
  }
  
  // Update context safely
  const contextElement = document.getElementById('complete-sentences-context');
  clearElementSafely(contextElement);
  const contextIcon = createIcon('fas fa-info-circle');
  const contextStrong = createSafeElement('strong', 'Contexto:');
  const contextText = document.createTextNode(' ' + question.context);
  contextElement.appendChild(contextIcon);
  contextElement.appendChild(document.createTextNode(' '));
  contextElement.appendChild(contextStrong);
  contextElement.appendChild(contextText);
  
  // Update sentence safely
  const sentenceElement = document.getElementById('complete-sentences-sentence');
  clearElementSafely(sentenceElement);
  const sentencePara = createSafeElement('p', question.sentence, 'sentence-display');
  sentenceElement.appendChild(sentencePara);
  
  // Update translation safely
  const translationElement = document.getElementById('complete-sentences-translation');
  clearElementSafely(translationElement);
  const translationIcon = createIcon('fas fa-language');
  const translationStrong = createSafeElement('strong', 'Traducción:');
  const translationText = document.createTextNode(' ' + question.translation);
  translationElement.appendChild(translationIcon);
  translationElement.appendChild(document.createTextNode(' '));
  translationElement.appendChild(translationStrong);
  translationElement.appendChild(translationText);
  
  // Update options safely
  const optionsContainer = document.getElementById('complete-sentences-options');
  clearElementSafely(optionsContainer);
  
  question.options.forEach((option, index) => {
    const button = createSafeElement('button', '', 'option-btn');
    const optionLetter = createSafeElement('span', String.fromCharCode(65 + index), 'option-letter');
    const optionText = document.createTextNode(' ' + option);
    button.appendChild(optionLetter);
    button.appendChild(optionText);
    button.onclick = () => selectCompleteSentencesAnswer(index);
    optionsContainer.appendChild(button);
  });
  
  clearElementSafely(document.getElementById('complete-sentences-feedback'));
}

function selectCompleteSentencesAnswer(selectedIndex) {
  const question = thereWasWereData.completeSentences[currentQuestion];
  const options = document.querySelectorAll('#complete-sentences-options .option-btn');
  const feedback = document.getElementById('complete-sentences-feedback');
  
  options.forEach(btn => btn.disabled = true);
  options[selectedIndex].classList.add('selected');
  
  clearElementSafely(feedback);
  
  if (selectedIndex === question.correct) {
    options[selectedIndex].classList.add('correct');
    scores['complete-sentences']++;
    addPoints(question.points, '¡Oración completada!');
    
    const feedbackDiv = createSafeElement('div', '', 'feedback correct');
    const feedbackIcon = createIcon('fas fa-check-circle');
    const feedbackText = document.createTextNode(' ¡PERFECTO! 🌟 ' + question.explanation);
    feedbackDiv.appendChild(feedbackIcon);
    feedbackDiv.appendChild(feedbackText);
    feedback.appendChild(feedbackDiv);
  } else {
    options[selectedIndex].classList.add('incorrect');
    options[question.correct].classList.add('correct');
    
    const feedbackDiv = createSafeElement('div', '', 'feedback incorrect');
    const feedbackIcon = createIcon('fas fa-times-circle');
    const correctStrong = createSafeElement('strong', 'Respuesta correcta:');
    const correctText = document.createTextNode(' ' + question.options[question.correct]);
    const explanationIcon = createIcon('fas fa-lightbulb');
    const explanationText = document.createTextNode(' ' + question.explanation);
    
    feedbackDiv.appendChild(feedbackIcon);
    feedbackDiv.appendChild(document.createTextNode(' '));
    feedbackDiv.appendChild(correctStrong);
    feedbackDiv.appendChild(correctText);
    feedbackDiv.appendChild(document.createElement('br'));
    feedbackDiv.appendChild(explanationIcon);
    feedbackDiv.appendChild(explanationText);
    feedback.appendChild(feedbackDiv);
  }
  
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < thereWasWereData.completeSentences.length) {
      showCompleteSentencesQuestion();
    } else {
      showCompleteSentencesResults();
    }
  }, 3000);
}

function showCompleteSentencesResults() {
  const containerElement = document.getElementById('complete-sentences-container');
  const resultsElement = document.getElementById('complete-sentences-results');
  
  if (containerElement) containerElement.classList.add('hidden');
  if (resultsElement) resultsElement.classList.remove('hidden');
  
  const score = scores['complete-sentences'];
  const total = thereWasWereData.completeSentences.length;
  const percentage = Math.round((score / total) * 100);
  const pointsEarned = score * 15;
  
  const scoreElement = document.getElementById('complete-sentences-score');
  if (scoreElement) scoreElement.textContent = score + '/' + total;
  
  const percentageElement = document.getElementById('complete-sentences-percentage');
  if (percentageElement) percentageElement.textContent = percentage + '%';
  
  const pointsElement = document.getElementById('complete-sentences-total-points');
  if (pointsElement) pointsElement.textContent = pointsEarned + ' puntos ganados';
  
  const messageElement = document.getElementById('complete-sentences-message');
  clearElementSafely(messageElement);
  
  if (percentage >= 85) {
    const resultDiv = createSafeElement('div', '', 'result-excellent');
    const resultIcon = createIcon('fas fa-trophy');
    const resultTitle = createSafeElement('h3', '¡EXCELENTE TRABAJO! 🏆');
    const resultText = createSafeElement('p', '¡Dominas perfectamente las oraciones!');
    resultDiv.appendChild(resultIcon);
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultText);
    messageElement.appendChild(resultDiv);
    addPoints(50, '¡Ejercicio excelente!');
  } else if (percentage >= 70) {
    const resultDiv = createSafeElement('div', '', 'result-good');
    const resultIcon = createIcon('fas fa-star');
    const resultTitle = createSafeElement('h3', '¡MUY BIEN! ⭐');
    const resultText = createSafeElement('p', '¡Buen trabajo! Sigue practicando.');
    resultDiv.appendChild(resultIcon);
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultText);
    messageElement.appendChild(resultDiv);
    addPoints(25, '¡Buen trabajo!');
  } else {
    const resultDiv = createSafeElement('div', '', 'result-needs-improvement');
    const resultIcon = createIcon('fas fa-heart');
    const resultTitle = createSafeElement('h3', '¡SIGUE PRACTICANDO! 💪');
    const resultText = createSafeElement('p', '¡No te rindas! Cada intento te hace mejor.');
    resultDiv.appendChild(resultIcon);
    resultDiv.appendChild(resultTitle);
    resultDiv.appendChild(resultText);
    messageElement.appendChild(resultDiv);
    addPoints(10, '¡Sigue intentando!');
  }
}

// Other exercise implementations...
function initCompleteQuestions() {
  console.log('Complete questions exercise initialized');
}

function initFinishSentences() {
  console.log('Finish sentences exercise initialized');
}

function initVisual() {
  console.log('Visual exercise initialized');
}

function initPronunciation() {
  console.log('Pronunciation exercise initialized');
}

function initChallenge() {
  console.log('Challenge exercise initialized');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  updatePointsDisplay();
  
  // Add safe styles
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
    
    .points-popup i {
      animation: bounce 0.5s ease-in-out;
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
    
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-10px); }
      60% { transform: translateY(-5px); }
    }
  `;
  document.head.appendChild(style);
}); 