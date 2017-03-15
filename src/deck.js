//created an array


module.exports = function buildDeck(entity) {

    let deck = [
      2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
      2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
      2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A',
      2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'
    ];

    let shuffledDeck = [];

    for (var i = 0; i < 52; i++) {
      // Get a random valid index of the deck array.
      let randomCard = Math.floor(Math.random() * deck.length);

      // Get random card from the deck array, and add it to shuffledDeck
      shuffledDeck.push( deck[randomCard] );

      deck.splice(randomCard, 1);
    }

    return shuffledDeck;
};
