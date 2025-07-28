const timerElement = document.getElementById('timeleft');
const questionElement = document.getElementById('question');
const optionElement = document.getElementById('option');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');
const startBtn = document.getElementById('startBtn');
const quizContainer = document.getElementById('quizContainer');
const resultContainer = document.getElementById('resultContainer');
const finalScore = document.getElementById('finalScore');
const restartBtn = document.getElementById('restartBtn');
const quitBtn = document.getElementById('quitBtn');

  const questions = [
  // Reasoning & Logic
  {
    question: 'What comes next in the series: 2, 4, 8, 16, ?',
    options: ['18', '24', '32'],
    answer: '32'
  },
  {
    question: 'If A = 1, B = 2, ..., Z = 26, what is the value of “BAD”?',
    options: ['7', '9', '11'],
    answer: '9'
  },
  {
    question: 'Which number does not belong in the series? 3, 5, 7, 11, 14, 17',
    options: ['7', '14', '17'],
    answer: '14'
  },
  {
    question: 'Choose the odd one out: Dog, Cat, Rabbit, Snake',
    options: ['Cat', 'Rabbit', 'Snake'],
    answer: 'Snake'
  },
  {
    question: 'Find the missing number: 1, 1, 2, 3, 5, ?, 13',
    options: ['6', '7', '8'],
    answer: '8'
  },

  // Programming Basics (JavaScript/Logic)
  {
    question: 'What is the output of 5 + "5" in JavaScript?',
    options: ['10', '55', 'NaN'],
    answer: '55'
  },
  {
    question: 'Which keyword is used to define a constant in JavaScript?',
    options: ['const', 'let', 'var'],
    answer: 'const'
  },
  {
    question: 'Which HTML tag is used to link a JavaScript file?',
    options: ['<script>', '<js>', '<link>'],
    answer: '<script>'
  },
  {
    question: 'What is the result of typeof []?',
    options: ['array', 'object', 'undefined'],
    answer: 'object'
  },
  {
    question: 'How to declare a function in JavaScript?',
    options: ['function myFunc()', 'def myFunc()', 'func myFunc()'],
    answer: 'function myFunc()'
  },

  // General Aptitude – Arithmetic & Math
  {
    question: 'What is the square root of 144?',
    options: ['12', '14', '16'],
    answer: '12'
  },
  {
    question: 'If 5x = 20, what is x?',
    options: ['2', '4', '5'],
    answer: '4'
  },
  {
    question: 'Find the average of: 5, 10, 15',
    options: ['10', '12', '15'],
    answer: '10'
  },
  {
    question: 'A train moves at 60 km/h. How far will it travel in 2.5 hours?',
    options: ['120 km', '150 km', '180 km'],
    answer: '150 km'
  },
  {
    question: 'What is 25% of 80?',
    options: ['20', '25', '30'],
    answer: '20'
  },

  // Reasoning – Directions
  {
    question: 'You face north. Turn right, walk 10m, turn left, walk 10m. Which direction are you facing?',
    options: ['North', 'East', 'West'],
    answer: 'East'
  },
  {
    question: 'If a man walks 10m south, 10m east, then 10m north, how far is he from the starting point?',
    options: ['0m', '10m', '20m'],
    answer: '10m'
  },

  // Verbal
  {
    question: 'Choose the correct synonym for "rapid".',
    options: ['slow', 'fast', 'steady'],
    answer: 'fast'
  },
  {
    question: 'Choose the antonym of "bright".',
    options: ['shiny', 'dull', 'light'],
    answer: 'dull'
  },

  // Programming Output
  {
    question: 'What will `console.log(2 === "2")` return?',
    options: ['true', 'false', 'undefined'],
    answer: 'false'
  },
  {
    question: 'Which of these is a JavaScript framework?',
    options: ['React', 'Flask', 'Laravel'],
    answer: 'React'
  },

  // Puzzle
  {
    question: 'Rearrange: R-A-T-E to form a meaningful word related to cost.',
    options: ['TEAR', 'RATE', 'EART'],
    answer: 'RATE'
  },
  {
    question: 'If 1 = 3, 2 = 3, 3 = 5, 4 = 4, 5 = 4, then 6 = ?',
    options: ['3', '5', '6'],
    answer: '3'
  },

  // Basic Computer
  {
    question: 'Which device is used to input data?',
    options: ['Printer', 'Scanner', 'Monitor'],
    answer: 'Scanner'
  },
  {
    question: 'What does CPU stand for?',
    options: ['Central Processing Unit', 'Control Panel Unit', 'Computer Processing Unit'],
    answer: 'Central Processing Unit'
  },

  // More Programming
  {
    question: 'Which of the following is a loop structure in JavaScript?',
    options: ['while', 'if', 'switch'],
    answer: 'while'
  },
  {
    question: 'Which symbol is used for comments in JavaScript?',
    options: ['//', '<!--', '#'],
    answer: '//'
  },

  // Logical
  {
    question: 'If “some pens are pencils” and “all pencils are red”, then which is true?',
    options: ['All pens are red', 'Some pens are red', 'No pens are red'],
    answer: 'Some pens are red'
  },

  // Final General
  {
    question: 'Which cuisine is known for dishes like sushi?',
    options: ['Chinese', 'Italian', 'Japanese'],
    answer: 'Japanese'
  },
  {
    question: 'Which country is known as the land of the rising sun?',
    options: ['India', 'Japan', 'China'],
    answer: 'Japan'
  }
];


let index = 0;
let score = 0;
let timerLeft = 30;
let timer;

function startTimer() {
  clearInterval(timer);
  timerLeft = 30;
  timerElement.textContent = timerLeft;
  timer = setInterval(() => {
    timerLeft--;
    timerElement.textContent = timerLeft;
    if (timerLeft === 0) {
      clearInterval(timer);
      alert('Time\'s up!');
      nextQuestion();
    }
  }, 1000);
}

function changeProgressBar() {
  const progress = (index / questions.length) * 100;
  progressElement.style.width = `${progress}%`;
}

function displayCurrentQuestion() {
  questionElement.textContent = questions[index].question;
  optionElement.innerHTML = '';
  questions[index].options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(button, option);
    optionElement.appendChild(button);
  });
}

function checkAnswer(button, selected) {
  clearInterval(timer);
  const correct = questions[index].answer;

  const buttons = optionElement.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.classList.add('correct');
    } else if (btn.textContent === selected && selected !== correct) {
      btn.classList.add('wrong');
    }
  });

  if (selected === correct) {
    score++;
    scoreElement.textContent = `Score: ${score}`;
  }

  setTimeout(() => {
    nextQuestion();
  }, 1500);
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    changeProgressBar();
    displayCurrentQuestion();
    startTimer();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  finalScore.textContent = `Your final score is ${score} out of ${questions.length}`;
  progressElement.style.width = `100%`;
}

function resetQuiz() {
  index = 0;
  score = 0;
  scoreElement.textContent = 'Score: 0';
  quizContainer.classList.remove('hidden');
  resultContainer.classList.add('hidden');
  changeProgressBar();
  displayCurrentQuestion();
  startTimer();
}

startBtn.onclick = () => {
  startBtn.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  displayCurrentQuestion();
  startTimer();
};

restartBtn.onclick = resetQuiz;

quitBtn.onclick = () => {
  window.location.reload(); // or close the tab in Electron/desktop app
};
