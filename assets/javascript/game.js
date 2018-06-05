// --------------------------------- section for vars and reset ----------------------------------- //

var userPoke = 0; // I'm not sure if these should be empty or if they should be objects???
var oppPoke = 0; // I'm not sure if these should be empty or if they should be objects???

var pokeChoices; // this will be an empty array that will fill with pokemon - 4 before game begins; 3 once userPoke is chosen
var pokeArray; // this is the initial array of pokemon-objects
var chosePoke; // this is the var for a user-poke chosen or not
var choseEnemy; // this is the var for an enemy-poke being chosen or not 
var numberofenemies; // how many enemies exist
// var rounds; -- I don't think I need this one.  I dunno, dude, maybe I might

var wins = 0;
var losses = 0;


function resetEverything() {
    userPoke;
    oppPoke;

    pokeChoices = [];
    pokeArray = [
        {
            "name" : "bulbasaur",
            id : 0,
            "hp" : 100,
            "attack" : 5,
            "counteratt" : 25,
            "frontpic" : 'assets/images/bulbasaur.png',
            "backpic" : 'assets/images/bulbaback.png',
        }, {
            "name" : "eevee",
            id : 1,
            "hp" : 160,
            "attack" : 8,
            "counteratt" : 40,
            "frontpic" : 'assets/images/eevee.png',
            "backpic" : 'assets/images/eeveeback.png',
        }, {
            "name" : "mareep",
            id : 2,
            "hp" : 200,
            "attack" : 10,
            "counteratt" : 50,
            "frontpic" : 'assets/images/mareep.png',
            "backpic" : 'assets/images/mareepback.png',
        }, {
            "name" : "vulpix",
            id : 3,
            "hp" : 220,
            "attack" : 11,
            "counteratt" : 55,
            "frontpic" : 'assets/images/vulpix.png',
            "backpic" : 'assets/images/vulpixback.png',
        } ]; // this is the closing ] for pokeArray

    chosePoke = false;
    choseEnemy = false;
    numberofenemies = 3;

    $('.myPoke').remove();
    $('.yourPoke').remove(); //note: 'fighting'
    
    for (var i = 0; i < pokeArray.length; i++) {
       pokeChoices += "<div id=" + pokeArray[i].name + " class='btn character text-center' value=" + pokeArray[i].name +
       "><img class='pokes' src=" + pokeArray[i].frontpic + " alt=" + pokeArray[i].name + "><br> HP: " + pokeArray[i].hp +
       "<br> Attack: " + pokeArray[i].attack + "<br> Counter-Attack: " + pokeArray[i].counteratt + " </div>";
        console.log("this bit is working");
        };                      
                            // Note to self: I love how this created a div in js! brilliant!  This is going in my toolbox.

    $("#fourwholepokes").html(pokeChoices);
    $("#instructions").html("Choose a starter!");
    $('#battledescrip').html(""); // this cleans out the battle-description box
    alert("this has run through the entire resetEverything function");
    
choosePoke();    

}; // this is the closing curly for resetEverything


// ------------------------------------- vars & reset section finito -------------------------------------- //

// ------------------------------- section for declaring functions -------------------------------- //

resetEverything();      // this function works

function standOnBattleGround() {
    var myPoke = "<div id=" + pokeArray[userPoke].id + " class='btn character text-center myPoke' value=" + pokeArray[userPoke].id +
    "><img class='pokes' src=" + pokeArray[userPoke].backpic + " alt=" + pokeArray[userPoke].name + "><br> HP: " + pokeArray[userPoke].hp +
    "<br> Attack: " + pokeArray[userPoke].att + "<br> Counter-Attack:" + pokeArray[userPoke].counteratt + " </div>";
    var yourPoke = "<div id=" + pokeArray[oppPoke].id + " class='btn character text-center yourPoke' value=" + pokeArray[oppPoke].id +
    "><img class='pokes' src=" + pokeArray[oppPoke].frontpic + " alt=" + pokeArray[oppPoke].name + "><br> HP: " + pokeArray[oppPoke].hp +
    "<br> Attack: " + pokeArray[oppPoke].att + "<br> Counter-Attack:" + pokeArray[oppPoke].counteratt + " </div>";
    $('#userChosenPoke').html(myPoke);
    $('#userChosenEnemy').html(yourPoke);
    console.log("user has chosen a poke!")
}

standOnBattleGround();

function choosePoke() {
    $(".pokes").on("click", function() {
        if(chosePoke = false) {
            userPoke = $(this).attr('name');
            $("#userChosenPoke").append(this);
            $(this).addClass("myPoke");
            chosePoke = true;
            $('#battledescrip').html("");
            $("#instructions").html("Now choose the first pokemon you'd like to battle!");
        } else if(!chosePoke && choseEnemy && userPoke !== $(this).attr('name')) {	
            opponentChar = $(this).attr('name');
            $("#userChosenEnemy").append(this);
            $(this).addClass("yourPoke");    
            choseEnemy = true;
            $('#battledescrip').html("");
            $("#instructions").html("Your pokebattle is about to begin! Click attack!");
        }
     }); // to onclick
};

choosePoke();

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


// ----------------------------- section for declaring functions finito ---------------------------- //

// ---------------------------------- section for calling functions --------------------------------- //

// $("#restartgame").on("click", function offerPlayAgain());



// choosePoke();
// pokeEnemies();


// bigWin();            // this function works, but I am commenting it out during building/testing
// loseCondition();     // this function works, but I am commenting it out during building/testing
// winCondition();      // this function works, but I am commenting it out during building/testing


// ------------------------------ section for calling functions finito ------------------------------ //

