const palindromes = function(word) {
  let defaultWord = word.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  let reversedWord = defaultWord
    .split("")
    .reverse()
    .join("");

  if (defaultWord !== reversedWord) {
    return false;
  } else return true;
};

module.exports = palindromes
