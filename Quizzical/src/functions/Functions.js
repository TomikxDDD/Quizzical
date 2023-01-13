/**
 * Shuffle algorithm taken from https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
 */
export function shuffleArray(arr) {
  // Start from the last element and swap
  // one by one. We don't need to run for
  // the first element that's why i > 0
  for (let i = arr.length - 1; i > 0; i--) {
    // pick a random index from 0 to i inclusive
    const j = Math.floor(Math.random() * (i + 1)); // at random index
    // Swap arr[i] with the element
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