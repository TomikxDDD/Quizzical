/**
 * Shuffle algorithm taken from https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
 */
export function shuffleArray(arr) {

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

/** Decoding the text from API call; Code taken from 
 * https://stackoverflow.com/questions/47962519/html-special-character-symbol-not-rendering-in-react-component 
*/
export function decodeTextFromAPI(textToDecode){
  const parser = new DOMParser();
  const decodedQuestion = parser.parseFromString(textToDecode, 'text/html').body.textContent;
  return decodedQuestion
}