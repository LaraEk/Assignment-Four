// --------------------------------- section for vars and reset ----------------------------------- //

var userPoke; // I'm not sure if these should be empty or if they should be objects???
var oppPoke; // I'm not sure if these should be empty or if they should be objects???

var wins = 0;
var losses = 0;


function resetEverything {

    var bulbasaur = {
        "hp" : 100,
        "attack" : 5,
        "counteratt" : 25,
    };

    var eevee = {
        "hp" : 160,
        "attack" : 8,
        "counteratt" : 40,
    };

    var mareep = {
        "hp" : 200,
        "attack" : 10,
        "counteratt" : 50,
    };

    var vulpix = {
        "hp" : 220,
        "attack" : 11,
        "counteratt" : 55,
    };




}


// ------------------------------------- vars & reset section finito -------------------------------------- //

// ------------------------------- section for declaring functions -------------------------------- //

function bigWin() {
    if (wins == 4) {
        alert("YOU HAVE DEFEATED ALL ENEMY POKEMON!!");
        // offerPlayAgain;
    }
};

function winCondition() {
    if // userPoke's HP is
    wins++;
    // chooseNextOpponent;
}

function loseCondition() {
    if // userPoke's HP is <= 0,
    losses++;
    alert("You've lost! Choose a new pokemon to play again!");
    // chooseNextOpponent;
}




// ----------------------------- section for declaring functions finito ---------------------------- //

// ---------------------------------- section for calling functions --------------------------------- //

bigWin();

// ------------------------------ section for calling functions finito ------------------------------ //

