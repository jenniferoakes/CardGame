let mainDeck = require('./deck.js');

module.exports = function GameFunction(twoPlayers) {
  let returnresults = {
      date: 'MM-DD-YYYY at HH:mm',   // (with the actual date/time of this game)
      players: [
        { name: twoPlayers[0], numberOfWins: 0, winRatio: 0 },
        { name: twoPlayers[1], numberOfWins: 0, winRatio: 0 }
      ],
      numberOfTies: 0
  };

  let deck = mainDeck();

  for (let i=0; i < 52; i+=2 ) {

    console.log( deck[i], deck[i+1] );
      if ( deck[i] > deck[i+1]) {
        returnresults.players[0].numberOfWins++;
      } else if ( deck[i] < deck[i+1] ) {
        returnresults.players[1].numberOfWins++;
      } else {
        returnresults.numberOfTies++;
      }
  }
  // console.log("playerone " + returnresults.players[0].numberofWins);
  return returnresults;
};
