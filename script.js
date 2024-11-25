document.addEventListener("DOMContentLoaded", function() {
    // Gera um número aleatório entre 1 e 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    // Referências aos elementos do formulário
    const guessForm = document.getElementById('guessForm');
    const guessInput = document.getElementById('guessInput');
    const messageDiv = document.getElementById('message');
    const resetBtn = document.getElementById('resetBtn');

    // Função que lida com a tentativa do usuário
    guessForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            messageDiv.textContent = "Por favor, insira um número entre 1 e 100.";
            return;
        }

        attempts++;

        if (userGuess < randomNumber) {
            messageDiv.textContent = "Tente um número maior!";
        } else if (userGuess > randomNumber) {
            messageDiv.textContent = "Tente um número menor!";
        } else {
            messageDiv.textContent = `Parabéns! Você adivinhou o número em ${attempts} tentativas.`;
            guessForm.style.display = 'none'; // Esconde o formulário
            resetBtn.style.display = 'block'; // Mostra o botão de reiniciar
        }

        // Limpa o input para a próxima tentativa
        guessInput.value = '';
        guessInput.focus();
    });

    // Função para reiniciar o jogo
    resetBtn.addEventListener('click', function() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        messageDiv.textContent = '';
        guessForm.style.display = 'block'; // Mostra o formulário novamente
        resetBtn.style.display = 'none'; // Esconde o botão de reiniciar
    });
});
