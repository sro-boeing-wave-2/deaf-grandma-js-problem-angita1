/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */


print('What do you want to say to Grandma!!');
let i = 0;

while (true) {
  const say = prompt();
  if (say === 'BYE') {
    i += 1;
    if (i === 3) {
      break;
    } print(`NO, NOT SINCE ${getRandomValue(1930, 1950)}`);
  } else if (isUppercase(say)) {
    print(`NO, NOT SINCE ${getRandomValue(1930, 1950)}`);
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
