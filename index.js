const utils = require('./anagram');

const words = ["enlists", "google", "inlets", "banana", "teslin", "listen", "Nestil", "Listen"];

const word = "listen";

const anagrams = utils.filterAnagrams(word, words);

console.log(anagrams);
