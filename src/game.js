let mainDeck = require('./deck.js');

let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

[[2,3,4,5,6], [1,2,3,4]]


module.exports = function GameFunction(twoPlayers) {

    if (arguments.length < 1) {
      return 'Error';
    }
    if (!Array.isArray(twoPlayers)) {
      return 'Error';
    }
    if (twoPlayers.length !== 2) {
      return 'Error';
    }
    if (twoPlayers[0].toLowerCase() === twoPlayers[1].toLowerCase()) {
      return 'The two players must be different';
    }


  let date = new Date();
  let formattedDate = date.getMonth() + '-' + date.getDate() + '-' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes();

  let returnresults = {
      date: formattedDate,   // (with the actual date/time of this game)
      players: [
        { name: twoPlayers[0], numberOfWins: 0, winRatio: 0 },
        { name: twoPlayers[1], numberOfWins: 0, winRatio: 0 }
      ],
      numberOfTies: 0
  };

  let deck = mainDeck();
  let numberOfWinsForPlayerOne = 0;
  let numberOfWinsForPlayerTwo = 0;
  let numberOfTies = 0;

  for (let i=0; i < 52; i+=2 ) {

    console.log( cardValues.indexOf(deck[i]), cardValues.indexOf(deck[i+1]));

      if (cardValues.indexOf(deck[i]) > cardValues.indexOf(deck[i+1])) {
        returnresults.players[0].numberOfWins++;
      } else if ( cardValues.indexOf(deck[i]) < cardValues.indexOf(deck[i+1]) ) {
        returnresults.players[1].numberOfWins++;
      } else {
        returnresults.numberOfTies++;
      }
  }
  // console.log("playerone " + returnresults.players[0].numberofWins);
  return returnresults;
};
