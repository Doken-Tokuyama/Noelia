// Vocabulary Learning Application
const vocabularyData = {
  words: [
    {
      present: "eat",
      past: "ate",
      meaning: "comer",
      category: "Vida diaria",
      pronunciation: "/iːt/",
      pastPronunciation: "/eɪt/",
      example: "I ate pizza for dinner yesterday.",
      translation: "Comí pizza para cenar ayer.",
      difficulty: "beginner",
      audio: "eat.mp3", // Placeholder for audio files
      pastAudio: "ate.mp3"
    },
    {
      present: "drink",
      past: "drank",
      meaning: "beber",
      category: "Vida diaria",
      pronunciation: "/drɪŋk/",
      pastPronunciation: "/dræŋk/",
      example: "She drank water after running.",
      translation: "Ella bebió agua después de correr.",
      difficulty: "beginner"
    },
    {
      present: "sleep",
      past: "slept",
      meaning: "dormir",
      category: "Vida diaria",
      pronunciation: "/sliːp/",
      pastPronunciation: "/slept/",
      example: "We slept for eight hours last night.",
      translation: "Dormimos ocho horas anoche.",
      difficulty: "beginner"
    },
    {
      present: "run",
      past: "ran",
      meaning: "correr",
      category: "Ejercicio",
      pronunciation: "/rʌn/",
      pastPronunciation: "/ræn/",
      example: "He ran five kilometers this morning.",
      translation: "Él corrió cinco kilómetros esta mañana.",
      difficulty: "beginner"
    },
    {
      present: "walk",
      past: "walked",
      meaning: "caminar",
      category: "Ejercicio",
      pronunciation: "/wɔːk/",
      pastPronunciation: "/wɔːkt/",
      example: "They walked to school together.",
      translation: "Ellos caminaron a la escuela juntos.",
      difficulty: "beginner"
    },
    {
      present: "think",
      past: "thought",
      meaning: "pensar",
      category: "Mental",
      pronunciation: "/θɪŋk/",
      pastPronunciation: "/θɔːt/",
      example: "I thought about you yesterday.",
      translation: "Pensé en ti ayer.",
      difficulty: "intermediate"
    },
    {
      present: "feel",
      past: "felt",
      meaning: "sentir",
      category: "Emociones",
      pronunciation: "/fiːl/",
      pastPronunciation: "/felt/",
      example: "She felt happy after the good news.",
      translation: "Ella se sintió feliz después de las buenas noticias.",
      difficulty: "intermediate"
    },
    {
      present: "love",
      past: "loved",
      meaning: "amar",
      category: "Emociones",
      pronunciation: "/lʌv/",
      pastPronunciation: "/lʌvd/",
      example: "My grandmother loved to bake cookies.",
      translation: "A mi abuela le encantaba hornear galletas.",
      difficulty: "beginner"
    },
    {
      present: "buy",
      past: "bought",
      meaning: "comprar",
      category: "Compras",
      pronunciation: "/baɪ/",
      pastPronunciation: "/bɔːt/",
      example: "We bought groceries at the supermarket.",
      translation: "Compramos comestibles en el supermercado.",
      difficulty: "intermediate"
    },
    {
      present: "teach",
      past: "taught",
      meaning: "enseñar",
      category: "Educación",
      pronunciation: "/tiːtʃ/",
      pastPronunciation: "/tɔːt/",
      example: "Mr. Smith taught English for 20 years.",
      translation: "El Sr. Smith enseñó inglés durante 20 años.",
      difficulty: "intermediate"
    },
    {
      present: "learn",
      past: "learned",
      meaning: "aprender",
      category: "Educación",
      pronunciation: "/lɜːn/",
      pastPronunciation: "/lɜːnd/",
      example: "She learned French in high school.",
      translation: "Ella aprendió francés en la secundaria.",
      difficulty: "beginner"
    },
    {
      present: "write",
      past: "wrote",
      meaning: "escribir",
      category: "Comunicación",
      pronunciation: "/raɪt/",
      pastPronunciation: "/roʊt/",
      example: "He wrote a beautiful poem for his wife.",
      translation: "Él escribió un hermoso poema para su esposa.",
      difficulty: "intermediate"
    },
    {
      present: "read",
      past: "read",
      meaning: "leer",
      category: "Comunicación",
      pronunciation: "/riːd/",
      pastPronunciation: "/red/",
      example: "I read three books during vacation.",
      translation: "Leí tres libros durante las vacaciones.",
      difficulty: "advanced"
    },
    {
      present: "speak",
      past: "spoke",
      meaning: "hablar",
      category: "Comunicación",
      pronunciation: "/spiːk/",
      pastPronunciation: "/spoʊk/",
      example: "They spoke quietly in the library.",
      translation: "Hablaron en voz baja en la biblioteca.",
      difficulty: "intermediate"
    },
    {
      present: "listen",
      past: "listened",
      meaning: "escuchar",
      category: "Comunicación",
      pronunciation: "/ˈlɪsən/",
      pastPronunciation: "/ˈlɪsənd/",
      example: "We listened to music all evening.",
      translation: "Escuchamos música toda la tarde.",
      difficulty: "beginner"
    },
    {
      present: "watch",
      past: "watched",
      meaning: "ver/mirar",
      category: "Entretenimiento",
      pronunciation: "/wɑːtʃ/",
      pastPronunciation: "/wɑːtʃt/",
      example: "They watched a movie last night.",
      translation: "Vieron una película anoche.",
      difficulty: "beginner"
    },
    {
      present: "play",
      past: "played",
      meaning: "jugar",
      category: "Entretenimiento",
      pronunciation: "/pleɪ/",
      pastPronunciation: "/pleɪd/",
      example: "The children played in the garden.",
      translation: "Los niños jugaron en el jardín.",
      difficulty: "beginner"
    },
    {
      present: "sing",
      past: "sang",
      meaning: "cantar",
      category: "Entretenimiento",
      pronunciation: "/sɪŋ/",
      pastPronunciation: "/sæŋ/",
      example: "She sang beautifully at the concert.",
      translation: "Ella cantó hermosamente en el concierto.",
      difficulty: "intermediate"
    },
    {
      present: "dance",
      past: "danced",
      meaning: "bailar",
      category: "Entretenimiento",
      pronunciation: "/dæns/",
      pastPronunciation: "/dænst/",
      example: "We danced until midnight at the party.",
      translation: "Bailamos hasta medianoche en la fiesta.",
      difficulty: "beginner"
    },
    {
      present: "travel",
      past: "traveled",
      meaning: "viajar",
      category: "Viajes",
      pronunciation: "/ˈtrævəl/",
      pastPronunciation: "/ˈtrævəld/",
      example: "Last summer, we traveled to Spain.",
      translation: "El verano pasado, viajamos a España.",
      difficulty: "intermediate"
    }
  ],

  matchingPairs: [
    {present: "eat", past: "ate"},
    {present: "drink", past: "drank"},
    {present: "sleep", past: "slept"},
    {present: "run", past: "ran"},
    {present: "walk", past: "walked"},
    {present: "think", past: "thought"},
    {present: "feel", past: "felt"},
    {present: "buy", past: "bought"},
    {present: "teach", past: "taught"},
    {present: "write", past: "wrote"}
  ]
};

// Application state
let currentExercise = '';
let currentWordIndex = 0;
let userPoints = parseInt(localStorage.getItem('vocabularyPoints') || '0');
let wordsLearned = parseInt(localStorage.getItem('wordsLearned') || '0');
let userStreak = parseInt(localStorage.getItem('vocabularyStreak') || '0');
let dailyProgress = parseInt(localStorage.getItem('dailyProgress') || '0');
let selectedPresentWord = null;
let matchingScore = 0;
let correctMatches = 0;

// Motivational messages and celebrations
const celebrations = {
  wordLearned: [
    "¡Increíble! 🌟 Una palabra más en tu vocabulario",
    "¡Fantástico! ⭐ Estás construyendo tu conocimiento",
    "¡Genial! 💫 Cada palabra te acerca al éxito",
    "¡Excelente! ✨ Tu esfuerzo está dando frutos",
    "¡Maravilloso! 🎉 Sigues creciendo en inglés"
  ],
  perfectMatch: [
    "¡Perfecto! 🎯 Tienes una memoria increíble",
    "¡Exacto! 🏆 Eres una estrella del vocabulario",
    "¡Correcto! 💎 Tu dedicación se nota",
    "¡Bravo! 🌈 Dominas estas palabras perfectamente"
  ],
  encouragement: [
    "¡No te rindas! 💪 Cada error es aprendizaje",
    "¡Sigue así! 🌱 Estás progresando genial",
    "¡Ánimo! 🦋 Los expertos también empezaron así",
    "¡Paciencia! 🌸 Aprender lleva tiempo y es normal"
  ]
};

// Points and progress management
function addPoints(points, reason = '') {
  userPoints += points;
  userStreak++;
  saveProgress();
  showPointsAnimation(points, reason);
  updatePointsDisplay();
  
  // Check for achievements
  checkAchievements();
}

function addWordToLearned() {
  wordsLearned++;
  dailyProgress++;
  saveProgress();
  updatePointsDisplay();
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

function checkAchievements() {
  const achievements = [];
  
  if (wordsLearned === 10) achievements.push("🎉 ¡Primera decena de palabras!");
  if (wordsLearned === 50) achievements.push("🏆 ¡50 palabras dominadas!");
  if (userStreak === 10) achievements.push("🔥 ¡Racha de 10 aciertos!");
  if (dailyProgress === 20) achievements.push("⭐ ¡Meta diaria completada!");
  
  achievements.forEach(achievement => {
    showAchievementNotification(achievement);
  });
}

function showAchievementNotification(achievement) {
  const notification = document.createElement('div');
  notification.className = 'achievement-notification';
  notification.innerHTML = `
    <div class="achievement-popup">
      <h3>¡Logro Desbloqueado!</h3>
      <p>${achievement}</p>
      <i class="fas fa-trophy trophy-bounce"></i>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 500);
  }, 4000);
}

function saveProgress() {
  localStorage.setItem('vocabularyPoints', userPoints.toString());
  localStorage.setItem('wordsLearned', wordsLearned.toString());
  localStorage.setItem('vocabularyStreak', userStreak.toString());
  localStorage.setItem('dailyProgress', dailyProgress.toString());
}

function updatePointsDisplay() {
  const elements = {
    'total-points': userPoints,
    'current-points': `${userPoints} puntos`,
    'words-learned': wordsLearned,
    'streak-count': userStreak,
    'daily-progress': `${dailyProgress}/20`,
    'cards-points': userPoints,
    'matching-points': userPoints
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  });
}

function getRandomCelebration(type) {
  const messages = celebrations[type] || celebrations.wordLearned;
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
  
  switch(exerciseType) {
    case 'word-cards':
      initWordCards();
      break;
    case 'matching':
      initMatching();
      break;
    case 'spelling':
      initSpelling();
      break;
    case 'listening':
      initListening();
      break;
    case 'sentences':
      initSentences();
      break;
    case 'vocabulary-challenge':
      initVocabularyChallenge();
      break;
  }
  
  showScreen(exerciseType);
}

// Word Cards functionality
function initWordCards() {
  currentWordIndex = 0;
  showWordCard();
}

function showWordCard() {
  const word = vocabularyData.words[currentWordIndex];
  const progress = ((currentWordIndex + 1) / vocabularyData.words.length) * 100;
  
  // Update progress
  document.getElementById('cards-progress').innerHTML = 
    `<i class="fas fa-id-card"></i> Palabra ${currentWordIndex + 1} de ${vocabularyData.words.length}`;
  document.getElementById('cards-progress-fill').style.width = `${progress}%`;
  
  // Update card content
  document.getElementById('word-category').textContent = word.category;
  document.getElementById('present-verb').textContent = word.present;
  document.getElementById('pronunciation').textContent = word.pronunciation;
  document.getElementById('word-meaning').textContent = word.meaning;
  document.getElementById('past-verb').textContent = word.past;
  document.getElementById('past-pronunciation').textContent = word.pastPronunciation;
  document.getElementById('example-sentence').textContent = word.example;
  document.getElementById('example-translation').textContent = word.translation;
  
  // Update counters
  document.getElementById('current-card').textContent = currentWordIndex + 1;
  document.getElementById('total-cards').textContent = vocabularyData.words.length;
  
  // Update navigation buttons
  document.getElementById('prev-btn').disabled = currentWordIndex === 0;
  document.getElementById('next-btn').disabled = currentWordIndex === vocabularyData.words.length - 1;
  
  // Reset card to front
  const cardFront = document.querySelector('.card-front');
  const cardBack = document.querySelector('.card-back');
  cardFront.classList.remove('hidden');
  cardBack.classList.add('hidden');
}

function flipCard() {
  const cardFront = document.querySelector('.card-front');
  const cardBack = document.querySelector('.card-back');
  
  cardFront.classList.toggle('hidden');
  cardBack.classList.toggle('hidden');
}

function markAsKnown() {
  addPoints(5, getRandomCelebration('wordLearned'));
  addWordToLearned();
  
  showSuccessFeedback("¡Excelente! Palabra dominada 🌟");
  
  setTimeout(() => {
    nextCard();
  }, 1500);
}

function needMorePractice() {
  showEncouragementFeedback(getRandomCelebration('encouragement'));
  
  setTimeout(() => {
    nextCard();
  }, 1500);
}

function showSuccessFeedback(message) {
  const feedback = document.createElement('div');
  feedback.className = 'card-feedback success';
  feedback.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
  
  const container = document.getElementById('word-card-container');
  container.appendChild(feedback);
  
  setTimeout(() => {
    if (container.contains(feedback)) {
      container.removeChild(feedback);
    }
  }, 2000);
}

function showEncouragementFeedback(message) {
  const feedback = document.createElement('div');
  feedback.className = 'card-feedback encouragement';
  feedback.innerHTML = `<i class="fas fa-heart"></i> ${message}`;
  
  const container = document.getElementById('word-card-container');
  container.appendChild(feedback);
  
  setTimeout(() => {
    if (container.contains(feedback)) {
      container.removeChild(feedback);
    }
  }, 2000);
}

function nextCard() {
  if (currentWordIndex < vocabularyData.words.length - 1) {
    currentWordIndex++;
    showWordCard();
  }
}

function previousCard() {
  if (currentWordIndex > 0) {
    currentWordIndex--;
    showWordCard();
  }
}

function playAudio() {
  // Simulate audio playback with visual feedback
  const btn = event.target.closest('.play-audio-btn');
  btn.innerHTML = '<i class="fas fa-volume-up pulse"></i>';
  
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }, 1000);
  
  // Here you would implement actual audio playback
  console.log(`Playing audio for: ${vocabularyData.words[currentWordIndex].present}`);
}

function playPastAudio() {
  // Similar to playAudio but for past form
  const btn = event.target.closest('.play-audio-btn');
  btn.innerHTML = '<i class="fas fa-volume-up pulse"></i>';
  
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }, 1000);
  
  console.log(`Playing audio for: ${vocabularyData.words[currentWordIndex].past}`);
}

// Matching exercise functionality
function initMatching() {
  correctMatches = 0;
  selectedPresentWord = null;
  generateMatchingWords();
}

function generateMatchingWords() {
  const presentContainer = document.getElementById('present-words');
  const pastContainer = document.getElementById('past-words');
  
  presentContainer.innerHTML = '';
  pastContainer.innerHTML = '';
  
  // Shuffle the pairs for variety
  const shuffledPairs = [...vocabularyData.matchingPairs].sort(() => Math.random() - 0.5);
  const selectedPairs = shuffledPairs.slice(0, 10);
  
  // Create present words
  selectedPairs.forEach((pair, index) => {
    const wordBtn = document.createElement('button');
    wordBtn.className = 'word-btn present-word';
    wordBtn.textContent = pair.present;
    wordBtn.dataset.present = pair.present;
    wordBtn.dataset.answer = pair.past;
    wordBtn.onclick = () => selectPresentWord(wordBtn);
    presentContainer.appendChild(wordBtn);
  });
  
  // Create past words (shuffled)
  const shuffledPast = selectedPairs.map(p => p.past).sort(() => Math.random() - 0.5);
  shuffledPast.forEach(past => {
    const wordBtn = document.createElement('button');
    wordBtn.className = 'word-btn past-word';
    wordBtn.textContent = past;
    wordBtn.dataset.past = past;
    wordBtn.onclick = () => selectPastWord(wordBtn);
    pastContainer.appendChild(wordBtn);
  });
  
  updateMatchingProgress();
}

function selectPresentWord(wordBtn) {
  // Remove previous selection
  document.querySelectorAll('.present-word.selected').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  selectedPresentWord = wordBtn;
  wordBtn.classList.add('selected');
}

function selectPastWord(pastBtn) {
  if (!selectedPresentWord) {
    showMatchingFeedback("Primero selecciona un verbo del presente", "info");
    return;
  }
  
  const correctAnswer = selectedPresentWord.dataset.answer;
  const userAnswer = pastBtn.dataset.past;
  
  if (userAnswer === correctAnswer) {
    // Correct match
    selectedPresentWord.classList.add('matched', 'correct');
    pastBtn.classList.add('matched', 'correct');
    
    selectedPresentWord.disabled = true;
    pastBtn.disabled = true;
    
    correctMatches++;
    addPoints(10, getRandomCelebration('perfectMatch'));
    
    showMatchingFeedback("¡Perfecto! 🎉 Emparejamiento correcto", "success");
    
    selectedPresentWord = null;
    updateMatchingProgress();
    
    // Check if all matches are done
    if (correctMatches === 10) {
      setTimeout(() => {
        showMatchingResults();
      }, 1500);
    }
  } else {
    // Incorrect match
    selectedPresentWord.classList.add('shake');
    pastBtn.classList.add('shake');
    
    showMatchingFeedback(
      `No es correcto. "${selectedPresentWord.textContent}" en pasado es "${correctAnswer}"`, 
      "incorrect"
    );
    
    setTimeout(() => {
      selectedPresentWord.classList.remove('shake', 'selected');
      pastBtn.classList.remove('shake');
      selectedPresentWord = null;
    }, 1500);
  }
}

function showMatchingFeedback(message, type) {
  const feedback = document.getElementById('matching-feedback');
  feedback.className = `matching-feedback ${type}`;
  feedback.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'incorrect' ? 'times-circle' : 'info-circle'}"></i> ${message}`;
  
  setTimeout(() => {
    feedback.innerHTML = '';
    feedback.className = 'matching-feedback';
  }, 3000);
}

function updateMatchingProgress() {
  document.getElementById('matches-count').textContent = `${correctMatches}/10`;
}

function showMatchingResults() {
  document.getElementById('matching-results').classList.remove('hidden');
  
  const percentage = (correctMatches / 10) * 100;
  document.getElementById('matching-score').textContent = `${correctMatches}/10`;
  document.getElementById('matching-percentage').textContent = `${percentage}%`;
  
  const messageElement = document.getElementById('matching-message');
  
  if (percentage === 100) {
    messageElement.innerHTML = `
      <div class="result-excellent">
        <i class="fas fa-trophy"></i>
        <h3>¡PERFECTO! 🏆</h3>
        <p>Has emparejado todas las palabras correctamente. ¡Eres increíble!</p>
      </div>
    `;
    addPoints(50, '¡Emparejamiento perfecto!');
  } else if (percentage >= 70) {
    messageElement.innerHTML = `
      <div class="result-good">
        <i class="fas fa-thumbs-up"></i>
        <h3>¡Muy bien! 👏</h3>
        <p>Excelente trabajo. Sigue practicando para conseguir el 100%.</p>
      </div>
    `;
    addPoints(25, '¡Gran trabajo!');
  } else {
    messageElement.innerHTML = `
      <div class="result-needs-work">
        <i class="fas fa-heart"></i>
        <h3>¡Sigue practicando! 💪</h3>
        <p>Cada intento te hace más fuerte. No te rindas, ¡puedes hacerlo!</p>
      </div>
    `;
    addPoints(10, '¡El esfuerzo cuenta!');
  }
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  updatePointsDisplay();
  
  // Add CSS for animations and styles
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
      min-width: 200px;
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
    
    .achievement-notification {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1001;
      animation: bounceIn 0.5s ease-out;
    }
    
    .achievement-popup {
      background: linear-gradient(135deg, #FFD700, #FFA500);
      color: #333;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.2);
      text-align: center;
      max-width: 300px;
    }
    
    .achievement-popup h3 {
      margin-top: 0;
      color: #333;
    }
    
    .trophy-bounce {
      font-size: 3rem;
      animation: bounce 1s infinite;
      color: #FFD700;
    }
    
    .fade-out {
      animation: fadeOut 0.5s ease-out;
    }
    
    .vocabulary-card {
      background: var(--color-surface);
      border-radius: var(--radius-lg);
      padding: var(--space-24);
      box-shadow: var(--shadow-lg);
      border: 2px solid rgba(var(--color-primary-rgb), 0.1);
      transition: all var(--duration-normal) var(--ease-standard);
      min-height: 400px;
      position: relative;
      overflow: hidden;
    }
    
    .vocabulary-card:hover {
      box-shadow: var(--shadow-lg);
      border-color: rgba(var(--color-primary-rgb), 0.2);
    }
    
    .word-category {
      background: rgba(var(--color-primary-rgb), 0.1);
      color: var(--color-primary);
      padding: 6px 12px;
      border-radius: 15px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 16px;
    }
    
    .word-main h2 {
      font-size: 2.5rem;
      color: var(--color-primary);
      margin: 16px 0 8px 0;
      text-align: center;
    }
    
    .pronunciation {
      color: var(--color-text-secondary);
      font-style: italic;
      text-align: center;
      margin-bottom: 16px;
    }
    
    .play-audio-btn {
      background: rgba(var(--color-primary-rgb), 0.1);
      border: none;
      color: var(--color-primary);
      padding: 8px 12px;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      margin: 0 auto;
      display: block;
    }
    
    .play-audio-btn:hover {
      background: rgba(var(--color-primary-rgb), 0.2);
      transform: scale(1.1);
    }
    
    .word-meaning {
      background: rgba(var(--color-success-rgb), 0.1);
      border-left: 4px solid var(--color-success);
      padding: 16px;
      margin: 20px 0;
      border-radius: 0 8px 8px 0;
      text-align: center;
    }
    
    .flip-btn {
      background: var(--color-primary);
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 25px;
      cursor: pointer;
      font-weight: bold;
      display: block;
      margin: 20px auto 0;
      transition: all 0.3s ease;
    }
    
    .flip-btn:hover {
      background: var(--color-primary-hover);
      transform: translateY(-2px);
    }
    
    .example-sentence {
      background: rgba(var(--color-info-rgb), 0.08);
      padding: 16px;
      border-radius: 8px;
      margin: 16px 0;
    }
    
    .example-sentence h4 {
      color: var(--color-info);
      margin-bottom: 8px;
    }
    
    .translation {
      color: var(--color-text-secondary);
      font-style: italic;
      margin-top: 8px;
    }
    
    .card-actions {
      display: flex;
      gap: 12px;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    
    .card-actions .btn {
      flex: 1;
      min-width: 120px;
    }
    
    .card-navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      padding-top: 20px;
      border-top: 1px solid var(--color-border);
    }
    
    .card-counter {
      background: rgba(var(--color-primary-rgb), 0.1);
      color: var(--color-primary);
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: bold;
    }
    
    .matching-container {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 24px;
      margin: 24px 0;
    }
    
    .present-column, .past-column {
      background: rgba(var(--color-primary-rgb), 0.03);
      border-radius: 12px;
      padding: 20px;
    }
    
    .present-column h3, .past-column h3 {
      text-align: center;
      color: var(--color-primary);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .words-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .word-btn {
      background: var(--color-surface);
      border: 2px solid rgba(var(--color-primary-rgb), 0.2);
      color: var(--color-text);
      padding: 12px 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 500;
    }
    
    .word-btn:hover {
      border-color: var(--color-primary);
      background: rgba(var(--color-primary-rgb), 0.05);
      transform: translateY(-2px);
    }
    
    .word-btn.selected {
      background: var(--color-primary);
      color: white;
      border-color: var(--color-primary);
    }
    
    .word-btn.matched.correct {
      background: var(--color-success);
      color: white;
      border-color: var(--color-success);
    }
    
    .word-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    .matches-display {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    
    .matches-counter {
      text-align: center;
      background: rgba(var(--color-success-rgb), 0.1);
      color: var(--color-success);
      padding: 16px;
      border-radius: 12px;
      border: 2px solid rgba(var(--color-success-rgb), 0.2);
    }
    
    .matches-counter i {
      font-size: 24px;
      margin-bottom: 8px;
      display: block;
    }
    
    .matches-counter span {
      font-size: 18px;
      font-weight: bold;
      display: block;
    }
    
    .shake {
      animation: shake 0.5s ease-in-out;
    }
    
    .matching-feedback {
      padding: 16px;
      border-radius: 8px;
      margin: 16px 0;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }
    
    .matching-feedback.success {
      background: rgba(var(--color-success-rgb), 0.1);
      color: var(--color-success);
      border: 1px solid rgba(var(--color-success-rgb), 0.3);
    }
    
    .matching-feedback.incorrect {
      background: rgba(var(--color-error-rgb), 0.1);
      color: var(--color-error);
      border: 1px solid rgba(var(--color-error-rgb), 0.3);
    }
    
    .matching-feedback.info {
      background: rgba(var(--color-info-rgb), 0.1);
      color: var(--color-info);
      border: 1px solid rgba(var(--color-info-rgb), 0.3);
    }
    
    .card-feedback {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 20px;
      border-radius: 25px;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 8px;
      animation: slideInUp 0.3s ease-out;
    }
    
    .card-feedback.success {
      background: var(--color-success);
      color: white;
    }
    
    .card-feedback.encouragement {
      background: var(--color-primary);
      color: white;
    }
    
    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
      from { transform: translateX(0); opacity: 1; }
      to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes bounceIn {
      0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
      50% { transform: translate(-50%, -50%) scale(1.1); }
      100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
    }
    
    @keyframes slideInUp {
      from { transform: translate(-50%, 100%); opacity: 0; }
      to { transform: translate(-50%, 0); opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .matching-container {
        grid-template-columns: 1fr;
        gap: 16px;
      }
      
      .matches-display {
        order: -1;
      }
      
      .card-actions {
        flex-direction: column;
      }
      
      .card-actions .btn {
        min-width: auto;
      }
    }
  `;
  document.head.appendChild(style);
}); 