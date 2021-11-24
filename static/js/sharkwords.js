const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = word => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    const button = letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }

  for (const letterBtn of letterButtonContainer.children){
    letterBtn.addEventListener('click', (evt) => {
      const button = evt.target;
      const letter = button.innerHTML;
      if(isLetterInWord(letter)){
        handleCorrectGuess(letter)
      }
      else {
        handleWrongGuess()
      }
      // if div element of class is there we get true
      button.disabled = true;
    });
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = buttonEl => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = letter => document.querySelector(`div.${letter}`) !== null;
// ASK FOR REVIEW ON THIS CODE -- div elements of that class letter (passed as an argument)-- if it isn't present
// it'll be equal to null

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = letter => {
  const correctGuessContainer = document.querySelector('#word-container').children;
  for (const char of correctGuessContainer) {
    console.log(char);
    if (char === letter) {
      wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
    } 
    //DON'T KNOW HOW TO **REPLACE THE APPROPRIATE DIV LINE WITH THE USER'S ENTERED LETTER
  }
  
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  

  if (numWrong === 5){
    letterBtn.addEventListener('click', () => {
      const disabledContainer = document.querySelector('#letter-buttons');
      button.disabled = true;
    });


  }
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();
  console.log('Hi');

  // add an event handler to handle clicking on a letter
  // YOUR CODE HERE

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
})();
