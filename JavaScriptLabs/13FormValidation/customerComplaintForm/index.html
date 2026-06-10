function convertMarkdown() {
    const inputElement = document.getElementById('markdown-input');
    if (!inputElement) return '';

    const markdownText = inputElement.value;
    const lines = markdownText.split('\n');
    
    const processedLines = lines.map(line => {
        let processedLine = line;

        if (/^\s*###\s+(.*)$/.test(processedLine)) {
            processedLine = processedLine.replace(/^\s*###\s+(.*)$/, '<h3>$1</h3>');
        } else if (/^\s*##\s+(.*)$/.test(processedLine)) {
            processedLine = processedLine.replace(/^\s*##\s+(.*)$/, '<h2>$1</h2>');
        } else if (/^\s*#\s+(.*)$/.test(processedLine)) {
            processedLine = processedLine.replace(/^\s*#\s+(.*)$/, '<h1>$1</h1>');
        }
        else if (/^\s*>\s+(.*)$/.test(processedLine)) {
            processedLine = processedLine.replace(/^\s*>\s+(.*)$/, '<blockquote>$1</blockquote>');
        }

        return processedLine;
    });

    let htmlResult = processedLines.join('');

    htmlResult = htmlResult.replace(/!\[([^\]]*)]\(([^)]*)\)/g, '<img alt="$1" src="$2">');

    htmlResult = htmlResult.replace(/\[([^\]]+)]\(([^)]+)\)/g, '<a href="$2">$1</a>');

    htmlResult = htmlResult.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    htmlResult = htmlResult.replace(/__(.*?)__/g, '<strong>$1</strong>');

    htmlResult = htmlResult.replace(/\*(.*?)\*/g, '<em>$1</em>');
    htmlResult = htmlResult.replace(/_(.*?)_/g, '<em>$1</em>');

    return htmlResult;
}

document.getElementById('markdown-input').addEventListener('input', () => {
    const htmlOutput = convertMarkdown();
    document.getElementById('html-output').textContent = htmlOutput;
    document.getElementById('preview').innerHTML = htmlOutput;
});