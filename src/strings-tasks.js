/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

// Returns the length of the given string.

function getStringLength(value) {
  let a;
  if (typeof value === 'string') a = value.length;
  else a = 0;
  return a;
}
getStringLength('aaaaa');
getStringLength('b');
getStringLength('');
getStringLength();
getStringLength(null);
getStringLength(undefined);

/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  let a;
  if (typeof value === 'string' || value instanceof String) a = true;
  else a = false;
  return a;
}
isString('test');
isString();
isString(null);
isString([]);
isString({});
isString(true);
isString(false);

// Returns the result of concatenation of two strings.

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}
concatenateStrings('aa', 'bb');
concatenateStrings('aa', '');
concatenateStrings('', 'bb');

// Returns the first character of the given string.

function getFirstChar(value) {
  return value.charAt(0);
}
getFirstChar('John Doe');
getFirstChar('cat');
getFirstChar('');

// Removes leading and trailing whitespace characters from the string.

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}
removeLeadingAndTrailingWhitespaces('  Abracadabra');
removeLeadingAndTrailingWhitespaces('cat ');
removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ');

// Removes only leading whitespace characters from the string.

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}
removeLeadingWhitespaces('  Abracadabra');
removeLeadingWhitespaces('cat ');
removeLeadingWhitespaces('\t\t\tHello, World! ');

// Removes only trailing whitespace characters from the string.

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}
removeTrailingWhitespaces('  Abracadabra');
removeTrailingWhitespaces('cat ');
removeTrailingWhitespaces('\t\t\tHello, World! ');

/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  let a;
  if (times < 0) a = '';
  else a = str.repeat(times);
  return a;
}
repeatString('A', 5);
repeatString('cat', 3);
repeatString('', 3);
repeatString('abc', -2);

/**
 * Remove the first occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(str, value) {
  const word = str.indexOf(value);
  if (word === -1) return str;
  return str.slice(0, word) + str.slice(word + value.length);
}
removeFirstOccurrences('To be or not to be', 'be');
removeFirstOccurrences('I like legends', 'end');
removeFirstOccurrences('ABABAB', 'BA');

/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(str, value) {
  const word = str.lastIndexOf(value);
  if (word === -1) return str;
  return str.slice(0, word) + str.slice(word + value.length);
}
removeLastOccurrences('To be or not to be', 'be');
removeLastOccurrences('I like legends', 'end');
removeLastOccurrences('ABABAB', 'BA');

/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 255 (49 + 50 + 51 + 52 + 53 = 255)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  let sum = 0;
  let number;
  // const newStr = str.split('');
  if (str) {
    for (let i = 0; i < str.length; i += 1) {
      number = str.charCodeAt(i);
      sum += number;
    }
  }
  if (str === '' || !str) {
    sum = 0;
  }
  return sum;
  // throw new Error('Not implemented');
}
sumOfCodes('My String');
sumOfCodes('12345');
sumOfCodes('');
sumOfCodes();

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}
startsWith('Hello World', 'World');
startsWith('Hello World', 'Hello');

/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
  // throw new Error('Not implemented');
}
endsWith('Hello World', 'World');
endsWith('Hello World', 'Hello');

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  let a = minutes.toString();
  let b = seconds.toString();
  if (a.length < 2) {
    a = a.padStart(2, '0');
  }
  if (b.length < 2) {
    b = b.padStart(2, '0');
  }
  return `${a}:${b}`;
}
formatTime(5, 30);
formatTime(1, 15);
formatTime(0, 45);
formatTime(0, 0);

// Returns a string in reverse order.

function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('abcdef');
reverseString('12345');

// Returns a string with characters in alphabetical order.

function orderAlphabetically(str) {
  return str.split('').sort().join('');
}
orderAlphabetically('webmaster');
orderAlphabetically('textbook');
orderAlphabetically('abc123xyz');

// Checks if a given string contains a specified substring.

function containsSubstring(str, substring) {
  return str.includes(substring);
}
containsSubstring('Hello, World!', 'World');
containsSubstring('JavaScript is Fun', 'Python');
containsSubstring('12345', '34');

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 */
function countVowels(str) {
  const volves = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  let sum = 0;
  // let char;
  for (let i = 0; i < str.length; i += 1) {
    if (volves.includes(str[i])) {
      sum += 1;
    }
  }
  return sum;
}
countVowels('');
countVowels('apple');
countVowels('banana');
countVowels('cherry');
countVowels('aEiOu');
countVowels('XYZ');

/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 */
function isPalindrome(str) {
  let a;
  const b = str.toLowerCase().replace(/[\W_]/g, '');
  if (b === b.split('').reverse().join('')) a = true;
  else a = false;
  return a;
}
isPalindrome('madam');
isPalindrome('racecar');
isPalindrome('apple');
isPalindrome('No lemon, no melon');

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  const sentSplit = sentence.split(' ');
  // const sentReverse = sentSplit.reverse();
  let longW = '';
  for (let i = 0; i < sentSplit.length; i += 1) {
    if (sentSplit[i].length > longW.length) {
      longW = sentSplit[i];
    }
  }
  return longW;
}
findLongestWord('The quick brown fox');
findLongestWord('A long and winding road');
findLongestWord('No words here');

/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  const newStr = str.split(' ');
  for (let i = 0; i < newStr.length; i += 1) {
    newStr[i] = newStr[i].split('').reverse().join('');
  }
  return newStr.join(' ');
  // throw new Error('Not implemented');
}
reverseWords('Hello World');
reverseWords('The Quick Brown Fox');

/**
 * Inverts the case of each character in the given string.
 */
function invertCase(str) {
  let newStr = '';
  let upper;
  for (let i = 0; i < str.length; i += 1) {
    upper = str[i].toUpperCase();
    if (str[i] === upper) newStr += str[i].toLowerCase();
    else newStr += upper;
  }
  return newStr;
  // throw new Error('Not implemented');
}
invertCase('Hello, World!');
invertCase('JavaScript is Fun');
invertCase('12345');

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName - The first name to include in the template.
 * @param {string} lastName - The last name to include in the template.
 * @return {string} - The formatted string generated from the template.
 *
 * @example
 *   getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
 *   getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  const arr = ['Hello,'];
  arr[1] = firstName;
  arr[2] = `${lastName}!`;
  // arr[2].push('!');
  return arr.join(' ');
}
getStringFromTemplate('John', 'Doe');
getStringFromTemplate('Chuck', 'Norris');

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const arr = value.slice(0, -1).split(' ');
  return `${arr[1]} ${arr[2]}`;
}
extractNameFromTemplate('Hello, John Doe!');
extractNameFromTemplate('Hello, Chuck Norris!');

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  return str.substring(1, str.length - 1);
}
unbracketTag('<div>');
unbracketTag('<span>');
unbracketTag('<a>');

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.match('\n');
  // .join(',\n');
  // throw new Error('Not implemented');
}
extractEmails(
  'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
);
extractEmails('info@gmail.com');

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns playid card id.
 *
 * Playing cards initial deck includes the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const cards = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];
  return cards.indexOf(value);
}
getCardId('A♣');
getCardId('2♣');
getCardId('3♣');
getCardId('Q♠');
getCardId('K♠');

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
