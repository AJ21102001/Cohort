/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if(str1.length != str2.length) return false;

  let numChar = 256;
  let cnt_1 = new Array(numChar);
  let cnt_2 = new Array(numChar);

  for(let i = 0 ; i < numChar ; i++){
    cnt_1[i] = 0; cnt_2[i] = 0;
  }

  for(let i = 0 ; i < str1.length ; i++){
    cnt_1[str1[i].charCodeAt(0)]++;
    cnt_2[str2[i].charCodeAt(0)]++;
  }

  for(let i = 0 ; i < numChar ; i++){
    if(cnt_1[i] != cnt_2[i]) return false;
  }

  return true;
}

module.exports = isAnagram;
