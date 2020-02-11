// Brief - Using your knowledge about scope and variable declarations in JavaScript,
// look at the following code snippets and predict what the output or error will be and why.
// Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

// Scenario 1 - Will return 'The murderer is Miss Scarlet', this is due to the last console.log
// returning verdict which is the function which in turn returns declareMurderer which contains
// a return which has both a string and interpolated value which is declare and take from scenario

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Scenario 2 - Will return a type error as the changeMurderer function is trying to change
// the value of murder which has already been assigned using a const.

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Scenario 3 - The result will be 'First Verdict: Mrs. Peacock' & 'Second Verdict: Professor Plum'
// This is because in the first verdict we are calling against declareMurderer which as our first
// declare of murderer is a let we can update it within a function, which has been done by changing Pro Plum to Mrs Peacock
// The second verdict returns Pro Plum as this passes through the first let declaration of murderer and doesn't call in any other function.

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Scenario 4 - This will return "The suspects are Miss Scarlet, Professor Plum, Colonel Mustard." & "Suspect three is Mrs. Peacock."
// First console is passing through the declareAllSuspects function which updates suspectThree and can do so as its declared as a let.
// Second console does not call this function and calls straight to suspectThree.

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);


// Scenario 5 - The result will be 'The weapon is the Revolver.' This is becuase even though the scenation object is a const we
// can change the values of keys within it.

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// Scenario 6 - The result will be 'The murderer is Mrs. White.' this is due to there being a plotTwist function which updates
// the murderer variable, so when the remaining functions run it will be passing through murderer which has been updated to Mrs White
//
// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Scenario 7 - The result will be 'The murderer is Mr. Green.' This is due to the console calling both declareMurderer
// within the changeMurderer function which returns Mr Green. plotTwist and unexpectedOutcome don't take any effect here as the
// change murder function is a const.

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Scenario 8 - The result will be 'The weapon is Candle Stick.'

const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';

  const plotTwist = function(room) {
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
      if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
      }
    }

    unexpectedOutcome('Colonel Mustard');
  }

  plotTwist('Dining Room');
}

const declareWeapon = function() {
  return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);


// Scenario 9 - The result will be 'The murderer is Professor Plum' this is because the console
// is calling in the declareMurderer function which calls in the murderer variable. It doesn't
// change on the if statement.

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);
