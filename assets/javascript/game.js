// --------------------------------- section for vars and reset ----------------------------------- //

var userPoke; // I'm not sure if these should be empty or if they should be objects???
var oppPoke; // I'm not sure if these should be empty or if they should be objects???
var pokeChoices; // this will be an empty array that will fill with pokemon - 4 before game begins; 3 once userPoke is chosen
var pokeArray; // this is the initial array of pokemon-objects
var chosePoke; // this is the var for a user-poke chosen or not
var choseEnemy; // this is the var for an enemy-poke being chosen or not 
var numberofenemies; // how many enemies exist
// var rounds; -- I don't think I need this one.  I dunno, dude, maybe I might

var wins = 0;
var losses = 0;


function resetEverything() {

    pokeChoices = [];
    pokeArray = [
        {
            "name" : "bulbasaur",
            "hp" : 100,
            "attack" : 5,
            "counteratt" : 25,
            "frontpic" : 'assets/images/bulbasaur.png',
            "backpic" : 'assets/images/bulbaback.png',
        }, {
            "name" : "eevee",
            "hp" : 160,
            "attack" : 8,
            "counteratt" : 40,
            "frontpic" : 'assets/images/eevee.png',
            "backpic" : 'assets/images/eeveeback.png',
        }, {
            "name" : "mareep",
            "hp" : 200,
            "attack" : 10,
            "counteratt" : 50,
            "frontpic" : 'assets/images/mareep.png',
            "backpic" : 'assets/images/mareepback.png',
        }, {
            "name" : "vulpix",
            "hp" : 220,
            "attack" : 11,
            "counteratt" : 55,
            "frontpic" : 'assets/images/vulpix.png',
            "backpic" : 'assets/images/vulpixback.png',
        } ]; // this is the closing ] for pokeArray

    chosePoke = false;
    choseEnemy = false;
    numberofenemies = 3;

    for (var i = 0; i < pokeArray.length; i++) {
       pokeChoices += "<div id=" + pokeArray[i].name + " class='btn character text-center' value=" + pokeArray[i].name +
       "><img class='pokes' src=" + pokeArray[i].frontpic + " alt=" + pokeArray[i].name + "><br> HP: " + pokeArray[i].hp +
       "<br> Attack: " + pokeArray[i].attack + " </div>";
        console.log("this bit is working");
        };

    $("#fourwholepokes").html(pokeChoices);
    $("#instructions").html("Click a pokemon");
    $('#battledescrip').html(""); // this cleans out the battle-description box
    alert("this has run through the entire resetEverything function");
    

//  choosePoke();    
}; // this is the closing curly for resetEverything


// ------------------------------------- vars & reset section finito -------------------------------------- //

// ------------------------------- section for declaring functions -------------------------------- //

resetEverything();

// function choosePoke() {

// };

// function pokeEnemies() {
//     if (pokeChoices.length < 4) {
//         $("#enemypokes").push("thesearebadguys");
//     }
// };


// function winCondition() {
//      if (-----------) userPoke's HP is) {
//      wins++;
//      chooseNextOpponent();
//      }
// };

// function loseCondition() {
//     if (------------userPoke's HP is <= 0) {
//         losses++;
//         alert("You've lost! Choose a new pokemon to play again!");
//         chooseNextOpponent(); 
//     }
// };

// function bigWin() {
//     if (wins == 4) {
//         alert("YOU HAVE DEFEATED ALL ENEMY POKEMON!!");
//         offerPlayAgain();
//     }
// };

// function offerPlayAgain() {
//     if (confirm("Play again?")) {
//         resetEverything();
//     } else {
//         alert("Bye!");
//     }
// }

// function resetEverything() {

// };
// ----------------------------- section for declaring functions finito ---------------------------- //

// ---------------------------------- section for calling functions --------------------------------- //

// $("#restartgame").on("click", function offerPlayAgain());

// choosePoke();
// pokeEnemies();


// bigWin();            // this function works, but I am commenting it out during building/testing
// loseCondition();     // this function works, but I am commenting it out during building/testing
// winCondition();      // this function works, but I am commenting it out during building/testing


// ------------------------------ section for calling functions finito ------------------------------ //

