const Letter = require("./Letter");
// Purpose:
// The Word class is responsible for creating an array of Letter objects and determining if the user guessed every Letter correctly

class Word {
    constructor(word){
        // (word) is .split() into an array (letters)
        // each (char) in the new array is .map()-ed (or given a tangible
        // representation) using the (Letter) constructor as an example  
        this.letters = word.split("").map(char => new Letter(char));
    }
    getSolution(){
        // the array (letters) is .map()-ed (or given a tangible representation) 
    // iterate over each letter and return the solution for each 
    // to .join() an array of solved letters
    // create a string from the array of solved letters
        return this.letters
        .map(letter => letter.getSolution())
        .join(""); 
    }
    // setting `toString()` as a method lets us concatenate it like we would a string!
    //   refer to (Letter) method (toString) in (Letter.js)
    toString(){
        return this.letters.join(" ");
    }
    guessLetter(char) {
        // iterate over each (letter) in the array of (letters) and
        // Checks to see if any (letter) .guess() is setting the boolean "foundLetter"
        //  methods used is .guess() from (Letter.js)
        let foundLetter = false;
        this.letters.forEach(letter => {
          if (letter.guess(char)) {
            foundLetter = true;
          }
        });
        return foundLetter;
    }
    // Returns true if all letters in the word have been guessed
    guessedCorrectly(choice) {
        // The .every() method on the array (letters) returns true if the callback function returns true for every element in the array
      return this.letters.every(letter => letter.visible);
    }
}

module.exports = Word;
