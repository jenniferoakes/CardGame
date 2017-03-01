

let cards = [ 2, 2, 2, 2,
              3, 3, 3, 3,
              4, 4, 4, 4,
              5, 5, 5, 5,
              6, 6, 6, 6,
              7, 7, 7, 7,
              8, 8, 8, 8,
              9, 9, 9, 9,
              10, 10, 10, 10,
              'J', 'J', 'J', 'J',
              'Q', 'Q', 'Q', 'Q',
              'K', 'K', 'K', 'K',
              'A', 'A', 'A', 'A'];

console.log(cards);

let Deck = require('./deck.js');

// The deck.js file must export a single function which returns an array of
// shuffled card values. There should be
// FOUR of each value: 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', and 'A'.
// Note that you DO NOT need to worry about suits (unless you do Adventure Mode).
//
// To export a function, you simply place the function on the module.exports object:
//
// module.exports = function buildDeck() { ... };
//
// (Note that you may name your function anything you wish.)
