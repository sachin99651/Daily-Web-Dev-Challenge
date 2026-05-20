function isPalindrome(word) {
  if (typeof word !== 'string') return false;
  const cleanWord = word.toLowerCase();
  const reversedWord = cleanWord.split('').reverse().join('');
  return cleanWord === reversedWord;
}

function findPalindromeBreaks(words) {
  if (!Array.isArray(words) || words.length === 0) return [];
  
  const breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (!Array.isArray(words) || phraseLength >= words.length || phraseLength <= 0) {
    return [];
  }

  const phraseMap = new Map();
  const repeatedIndices = new Set();

  for (let i = 0; i <= words.length - phraseLength; i++) {

    const phrase = words.slice(i, i + phraseLength).join(' ');
    
    if (!phraseMap.has(phrase)) {
      phraseMap.set(phrase, []);
    }
    phraseMap.get(phrase).push(i);
  }

  for (const [phrase, indices] of phraseMap.entries()) {
    if (indices.length > 1) {
      indices.forEach(index => repeatedIndices.add(index));
    }
  }

  return Array.from(repeatedIndices).sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  if (!Array.isArray(texts) || texts.length === 0) return [];

  return texts.map(words => {
    return {
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    };
  });
}