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


print('Say something to Granma');
const say = prompt();
let i = 0;
while (true) {
  if (isUpperCase(say)) {
    const ran = getRandomValue(30, 50);
    print(`NO, NOT SINCE 19${ran}`);
  } else {
    print('HUH ! SPEAK UP, SONNY!');
  }
  if (say === 'BYE') {
    i += i;
    if (i === 3) {
      break;
    }
  }
}
