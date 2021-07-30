/*
A word is on the loose and now has tried to hide amongst a crowd of tall letters!
Help write a function to detect what the word is, knowing the following rules:

* The wanted word is in lowercase.
* The crowd of letters is all in uppercase.
* Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
*/
// this code was printed out the right result in the console

function detectWord(word) {
  let wantedWord = '';

  for (let index = 0; index < word.length; index++) { // loopoing through the word
    const letter = word[index]; // assigning word[index] to letter

    if (letter === letter.toLowerCase()) { //strict comparism of letter and letter.toLowerCase() 
      wantedWord = wantedWord + letter; // String concatenation
    }
  }

  return wantedWord; // we need to return wantedWord
}
detectWord('UcUNFYGaFYFYGtNUH');
detectWord('bEEFGBuFBRrHgUHlNFYaYr');
detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment');
