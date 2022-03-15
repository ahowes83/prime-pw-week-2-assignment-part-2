// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and assign to it the string 'Dane'.
// We make an if conditional which checks if the name's value is 'Mary'.
// If it were, it would log 'Hi, Mary!' to the console.
// If the value is not 'Mary', it will log 'How do you do?' to the console.
// Since name's value is not 'Mary', it will log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create an uninitialized variable called secret.
//We then make a variable named code, to which we assign the value 123.
// We check to see if code's value is 123. If so, secret will be assigned the string value 'super'.
//Then, code's value will be doubled.
// If it is higher than 250, we assign to secret the value 'duper'
// Since code's initial value is 123, its value will be doubled, by the first if conditional, to 246.
// Since this is less than 250, the second if conditional will fail and the value of secret will remain 'super'.
// 'super' is logged to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create three variables: isStudent which equals true, age which equals 34, and zip which equals 55407.
// The first if cond. tests whether both isStudent === true and whether the zip code is greater than 80000.
// This if conditional fails since the zip is too low
// (if it succeeded it would log 'You're a student on the West Coast!')
// It then checks whether either isStudent is false OR if age is less than 30. This fails both checks
// (on success we would get 'What are your hobbies?'
// Failing this check, it proceeds to a check on whether isStudent is true
// Since it is true, 'Welcome to Prime!' is logged to console. Otherwise,
// a final catch-all else conditional would log 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// colorTwo should also be set to 'purple'
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// logic check was || (or) instead of && (and)
if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// originally checks if minAge is <= age which would mean no entry with age 21. Swapped around to correct.
if(age >= minAge) {
  console.log('enter');
} else {
  console.log('No entry');
}
*/
