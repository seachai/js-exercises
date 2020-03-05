const removeFromArray = function(...args) {
  const array = args[0];
  return array.filter(el => !args.includes(el));
};

module.exports = removeFromArray;
