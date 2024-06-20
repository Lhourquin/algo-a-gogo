const words = [
  "chat", "chien", "maison", "arbre", "voiture", "fleur", "ordinateur", "fromage",
  "bicyclette", "école", "montagne", "rivière", "plage", "soleil", "lune", "étoile",
  "livre", "musique", "film", "amour", "bonheur", "joie", "peur", "hiver",
  "été", "automne", "printemps", "ciel", "mer", "poisson"
];

function getRandomWord(arrOfWords){
  return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
}

function generateArrayOfRandomIdx(arrLength) {
  const arrOfRandomIdx = [];
  while (arrOfRandomIdx.length !== arrLength) {
    const randomIdx = Math.floor(Math.random() * arrLength);
    if (!arrOfRandomIdx.includes(randomIdx)) {
      arrOfRandomIdx.push(randomIdx);
    }
  }
  return arrOfRandomIdx;
}

function mixWord(word) {
  if(word.includes(' ')){
    return 'Erreur : Les espaces ne sont pas permis, vous devez entrer un mot, pas une phrase.';
  }
  const arrOfLetter = word.split("");
  const arrOfRandomIdx = generateArrayOfRandomIdx(arrOfLetter.length);
  for (let i = 0; i < arrOfLetter.length; i++) {
    const lastValue = arrOfLetter[i];
    arrOfLetter[i] = arrOfLetter[arrOfRandomIdx[i]];
    arrOfLetter[arrOfRandomIdx[i]] = lastValue;
  }

  if(arrOfLetter.join('') !== word){
    return arrOfLetter;
  }else{
    return mixWord(word);
  }
}

const randomWord = getRandomWord(words);
console.table({ randomWord: randomWord.split('') });
const reverseWord = mixWord(randomWord);
console.table({ reverseWord });