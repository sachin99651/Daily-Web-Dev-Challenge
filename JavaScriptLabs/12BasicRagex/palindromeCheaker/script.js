document.getElementById('check-btn').addEventListener('click', () => {
    const textInput = document.getElementById('text-input');
    const resultDiv = document.getElementById('result');
    const rawInput = textInput.value;

    if (!rawInput || rawInput.trim() === "") {
        alert("Please input a value");
        return;
    }

    const cleanInput = rawInput.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedInput = cleanInput.split('').reverse().join('');

    resultDiv.classList.remove('hidden', 'palindrome', 'not-palindrome');

    if (cleanInput === reversedInput) {
        resultDiv.textContent = `${rawInput} is a palindrome.`;
        resultDiv.classList.add('palindrome');
    } else {
        resultDiv.textContent = `${rawInput} is not a palindrome.`;
        resultDiv.classList.add('not-palindrome');
    }
});