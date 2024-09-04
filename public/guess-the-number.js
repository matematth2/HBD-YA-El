document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const result = document.getElementById('result');
    const attempts = document.getElementById('attempts');
    
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attemptCount = 0;
    
    guessButton.addEventListener('click', function() {
        const userGuess = parseInt(guessInput.value, 10);
        attemptCount++;
        
        if (userGuess < 1 || userGuess > 10) {
            result.textContent = 'enter a number dari 1 sampe 10.';
            result.style.color = 'red';
        } else if (userGuess === randomNumber) {
            result.textContent = `Congratulations! Kamu berhasil menebak ${attemptCount} percobaan.`;
            result.style.color = 'green';
        } else if (userGuess < randomNumber) {
            result.textContent = 'Terlalu kecil! Try again.';
            result.style.color = 'orange';
        } else {
            result.textContent = 'Terlalu high! Try again.';
            result.style.color = 'orange';
        }
        
        attempts.textContent = `Attempts: ${attemptCount}`;
    });
});
