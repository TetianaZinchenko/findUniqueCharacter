
function findUniqueCharacter(word) {
  const charCounts = {};

  // Підрахунок кількості кожного символу у слові
  for (const char of word) {
    if (charCounts.hasOwnProperty(char)) {
      charCounts[char]++;
      
    } else {
      charCounts[char] = 1;
      
    }
  }

  // Пошук першого унікального символу
  for (const char of word) {
    if (charCounts[char] === 1) {
      
      return char;
    }
  }

  return null;
}

function findFirstUniqueCharacter(text) {
  const words = text.split(/\s+/); // Розділення тексту на слова
  
  const uniqueCharacters = [];

  // Знаходження першого унікального символу в кожному слові
  for (const word of words) {
    const uniqueChar = findUniqueCharacter(word);
    
    if (uniqueChar) {
      uniqueCharacters.push(uniqueChar);
      
    }
  }

  // Пошук першого унікального символу в наборі
  for (const char of uniqueCharacters) {
    const remainingChars = uniqueCharacters.slice(uniqueCharacters.indexOf(char) + 1);
    if (!remainingChars.includes(char)) {
      
      return char;
    }
  }

  return null;
}

let inputText = prompt('Введіть текст:');
    

if (inputText === null || inputText.trim() === '') {
  alert('Текст не було введено. Будь ласка, перезавантажте сторінку і спробуйте знову.');
} else {
  const uniqueCharacter = findFirstUniqueCharacter(inputText);
  
  let result = '';
  if (uniqueCharacter) {
    result = `Унікальний символ: ${uniqueCharacter}`;
  } else {
    result = 'Унікальний символ не знайдено.';
  }

  alert(result);
}
