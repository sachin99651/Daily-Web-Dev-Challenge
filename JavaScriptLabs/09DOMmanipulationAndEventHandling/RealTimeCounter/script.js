const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', () => {
    let currentText = textInput.value;
    const maxLength = 50;

    if (currentText.length > maxLength) {
        currentText = currentText.substring(0, maxLength);
        textInput.value = currentText; 
    }

    const currentLength = currentText.length;

    charCount.textContent = `Character Count: ${currentLength}/${maxLength}`;

    if (currentLength === maxLength) {
        charCount.classList.add('limit-reached');
    } else {
        charCount.classList.remove('limit-reached');
    }
});