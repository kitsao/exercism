// 1. sort the characters of the needle
// 2. check your haystack for a match on each sorted word
// 3. check the original is exluded
// 4. spread operator works magic

const sortWord = word => [...word.toLowerCase()].sort().join('');

const localeComparison = (needle, haystack) => needle.localeCompare(haystack, undefined, { sensitivity: 'base' });

const isAnagram = (word, element) => localeComparison(word, element) !== 0 && localeComparison(sortWord(word), sortWord(element)) === 0;

const filterAnagrams = (word, words) => {
	return words.filter(elem => isAnagram(word, elem));
};

module.exports = {
	filterAnagrams
};
