let inputString = 'this is aravinth sankar from sivakasi';
function toCamalCase(inputString)  {
inputString = inputString.split(' ');
inputString.forEach( (word, index) => {
  word = word[0].toUpperCase().concat(word.slice(1, word.length));
  inputString[index] = word;
});
inputString = inputString.join(' ')
return inputString;
}
toCamalCase(inputString);
