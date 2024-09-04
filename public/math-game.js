const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next');

let correctAnswer;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    correctAnswer = eval(`${num1} ${operator} ${num2}`);
    questionEl.textContent = `Berapakah ${num1} ${operator} ${num2}?`;
    answerEl.value = '';
    feedbackEl.textContent = '';
    nextBtn.classList.add('hidden');
}

submitBtn.addEventListener('click', function() {
    const userAnswer = parseInt(answerEl.value, 10);

    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = 'Beetull! 🎉';
        feedbackEl.style.color = 'green';
    } else {
        feedbackEl.textContent = `Salah oii! Harusnya ${correctAnswer}.`;
        feedbackEl.style.color = 'red';
        playSound("wrong");
    }
    nextBtn.classList.remove('hidden');
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

nextBtn.addEventListener('click', generateQuestion);

// Start the game with the first question
generateQuestion();
