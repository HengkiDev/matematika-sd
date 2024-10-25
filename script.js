let num1, num2, operation;
let score = 0;
const scoreDisplay = document.getElementById('score');
const backgroundMusic = document.getElementById('background-music');

function generateQuestion() {
    num1 = Math.floor(Math.random() * 500);
    num2 = Math.floor(Math.random() * 500);
    operation = Math.random() < 0.5 ? 'add' : 'subtract'; // Randomly choose between addition and subtraction

    if (operation === 'add') {
        document.getElementById('question').innerText = `Berapa ${num1} + ${num2}?`;
    } else {
        document.getElementById('question').innerText = `Berapa ${num1} - ${num2}?`;
    }
}

document.getElementById('submit').addEventListener('click', function() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    let correctAnswer;

    if (operation === 'add') {
        correctAnswer = num1 + num2;
    } else {
        correctAnswer = num1 - num2;
    }

    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerText = "Jawaban Anda Benar!";
        document.getElementById('correct-sound').play();
        score++;
    } else {
        document.getElementById('result').innerText = `Jawaban Anda Salah! Jawaban yang benar adalah ${correctAnswer}.`;
        document.getElementById('wrong-sound').play();
        score--;
    }

    scoreDisplay.innerText = `Skor: ${score}`;
    document.getElementById('answer').value = '';
    generateQuestion();
});

// Toggle music
document.getElementById('toggle-music').addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        this.innerText = "Matikan Musik";
    } else {
        backgroundMusic.pause();
        this.innerText = "Nyalakan Musik";
    }
});

// Generate the first question and start background music
generateQuestion();
backgroundMusic.play();