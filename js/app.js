'use strict';

// What is userName + Custom Greeting passing in userName
var userName = prompt('Hello, visitor! What is your name?');
alert('Welcome ' + userName + '! I\'m going to ask you a series of questions about Tif Taylor. Please use \'yes\' or \'no\' when answering.');

// 5 Question Series | Yes/No | // Q-1
var currentCity = prompt('Is Tif based in Seattle? (yes or no)').toLowerCase();
if(currentCity === 'y' || currentCity === 'yes') {
  alert('Correct! Seattle is lovely! (usually...)');
  // console.log('Is Tif based in Seattle? ' + currentCity + ' is correct');
} else if(currentCity === 'n' || currentCity === 'no') {
  alert('Nope...try again.');
  // console.log('Is Tif based in Seattle? ' + currentCity + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

// Q-2
var doDance = prompt('Does Tif social dance? (yes or no)').toLowerCase();
if(doDance === 'y' || doDance === 'yes') {
  alert('I sure do! I swing, blues and fusion dance!');
  // console.log('Does Tif social dance? ' + doDance + ' is correct');
} else if(doDance === 'n' || doDance === 'no') {
  alert('Incorrect - It may not seem like it on Zoom but I got mooooves!');
  // console.log('Does Tif social dance? ' + doDance + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

// Q-3
var philoDegree = prompt('Does Tif have a degree in Philosophy? (yes or no)').toLowerCase();
if(philoDegree === 'y' || philoDegree === 'yes') {
  alert('Yeah...I am in a constant state of existentialism, LOL');
  // console.log('Does Tif have a degree in Philosophy? ' + philoDegree + ' is correct');
} else if(philoDegree === 'n' || philoDegree === 'no') {
  alert('Sadly, you\'re wrong. I majored in Philosophy of the Mind');
  // console.log('Does Tif have a degree in Philosophy? ' + philoDegree + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

// Q-4
var ownCat = prompt('Does Tif own a cat? (yes or no)').toLowerCase();
if(ownCat === 'y' || ownCat === 'yes') {
  alert('Heck no fren! Doggos only plz.');
  // console.log('Does Tif own a cat? ' + ownCat + ' is incorrect');
} else if(ownCat === 'n' || ownCat === 'no') {
  alert('Doin me an excite friendo! Cats are lame');
  // console.log('Does Tif own a cat? ' + ownCat + ' is correct');
} else {
  alert('Please enter yes or no');
}

// Q-5
var publishBook = prompt('Does Tif want to write and publish a book? (yes or no)').toLowerCase();
if(publishBook === 'y' || publishBook === 'yes') {
  alert('Correct! I do, but it\'s time consuming!');
  // console.log('Does Tif want to write and publish a book? ' + publishBook + ' is correct');
} else if(publishBook === 'n' || publishBook === 'no') {
  alert('Incorrect, my friend. I aspire to be remembered forever!');
  // console.log('Does Tif want to write and publish a book? ' + publishBook + ' is incorrect');
} else {
  alert('Please enter yes or no');
}

// Q-6 | Guessing Game
var randomNum = Math.floor(Math.random() * 11); 
var attempts = 4;
// console.log(randomNum);
for(var i = 1; i <= attempts; i++){
  var userGuessStr = prompt('only for loop prompt: Guess a number between 0 and 10');
  var userGuessNum = parseInt(userGuessStr);
  if(userGuessNum > randomNum) {
    alert('Your guess is too high - try again');
    // console.log('high input: ' + userGuessNum);
  } else if(userGuessNum < randomNum) {
    alert('Your guess is too low - try again');
    // console.log('low input: ' + userGuessNum);
  } else if(userGuessNum === randomNum){ 
    alert('You got it! The number was: ' + randomNum + '!');
  }
}
alert('The computer chose the random number: ' + randomNum);


// add 7th Q has array (multiple) answers
// get 6 attempts to guess + display all possible correct answers to user
var faveColorsArr = [green, white];

for(var i = 0; i <= 6; i++){
  var userColorGuess = prompt('Guess my favorite color(s) from this list?  Please only enter 1 color in the answer box: Red / Orange / Yellow / Green / Blue / Purple / White / Black').toLowerCase();
  if(userColorGuess === faveColorsArr[0] || faveColorsArr[1]){
    alert('Wow! good guess!');
    break;
  } else if(userColorGuess !== faveColorsArr[0] || faveColorsArr[1]) {
    alert('Nah, keep trying...');
  }
}

// collect the score of correct to keep track of how many of the 7 Q's they got right IF statement



alert('Thanks for taking the time to try and get to know me, ' + userName + ':)');
