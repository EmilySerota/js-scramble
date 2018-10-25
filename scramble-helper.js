"use strict";

// Create a function that reverses a word
function reverseWord(word){
	let wordArray = word.split('');
	let reverseWordArray = wordArray.reverse();
	return reverseWordArray.join('');

}

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.
function reverseWordArray(wordArray){
	let newWordArray = [];

	for (let i=0; i<wordArray.length; i++){
		// let reversedWord = reverseWord(wordArray[i]);
		newWordArray.push(reverseWord(wordArray[i]));
	}

	return newWordArray;

}

// Create a function that returns a random word from an array
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function getRandomWord(wordArray){

	let index1 = getRandomInt(wordArray.length);
	return wordArray[index1];
}

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function reverseWordDict(array){
	let reverseMap = {}

	for (let i=0; i<array.length; i++){
		reverseMap[reverseWord(array[i])] = array[i];
	}
	return reverseMap;
}

// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.
function checkWord(guess, scrambledWord, wordMap){
	if (guess == wordMap[scrambledWord]){
		return wordMap[scrambledWord]
	}
	else{
		console.log(`Sorry, incorrect. The word was ${wordMap[scrambledWord]}`);
	}
}

// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
