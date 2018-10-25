const helloThere = 'hello there!';

let splitword = helloThere.split("");

let joinWord = splitword.join('');

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const sampleArray = ['red', 'green', 'blue', 'yellow'];

let index1 = getRandomInt(sampleArray.length);
let randomWord1 = sampleArray[index1];

let index2 = getRandomInt(sampleArray.length);
let randomWord2 = sampleArray[index2];

sampleArray[index1] = randomWord2;
sampleArray[index2] = randomWord1;
//randomWord = sampleArray[getRandomInt(sampleArray.length)]

let candy = { purple: 'grape',
  red: 'strawberry',
  blue: 'blue raspberry',
  yellow: 'banana',
  pink: 'watermelon' }

for (let key in candy){
console.log(`The ${candy[key]} flavor is color ${key}`);
}

function getFlavor(color, candymap) {
  if (color in candymap) {
  	return candymap[color];
  }
  else {
  	console.log("Sorry, that color doesn't have a flavor");
  } 

}

function getFlavorArray(colorArray, candyMap){
	let flavorArray = [];

	for (let i=0; i<colorArray.length; i++){
		if (colorArray[i] in candyMap){
			flavorArray.push(candyMap[colorArray[i]]);
		}
		else{
			flavorArray.push(null);
		}
	}

	return flavorArray;
}