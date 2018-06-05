$(document).ready(function() {
    // --------------------------------- section for vars and reset ----------------------------------- //

var userPoke = 0; // I'm not sure if these should be empty or if they should be objects???
var oppPoke = 0; // I'm not sure if these should be empty or if they should be objects???

var pokeChoices = []; // this will be an empty array that will fill with pokemon - 4 before game begins; 3 once userPoke is chosen
var pokeArray = []; // this is the initial array of pokemon-objects
var chosePoke; // this is the var for a user-poke chosen or not ---------- boolean
var choseEnemy; // this is the var for an enemy-poke being chosen or not ---------- boolean
var numberofenemies; // how many enemies exist
var rounds = 10; 

var wins = 0;
var losses = 0;


function resetEverything() {
    userPoke;
    oppPoke;
    chosePoke = false;
    choseEnemy = false;
    numberofenemies = 3;

    $('.myPoke').remove();
    $('.yourPoke').remove(); //note: 'fighting'

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

// something about this section of code isn't working.  I need to find out why. ------------------------------------ To Ask In Class
function choosePoke() {
    $(".pokes").on("click", function() {
        if(chosePoke = false) {
            userPoke = $(this).attr('id');
            $("#userChosenPoke").append(this);
            $(this).addClass("myPoke");
            chosePoke = true;
            console.log("user has chosen a poke!");
            $('#battledescrip').html("");
            $("#instructions").html("Now choose the first pokemon you'd like to battle!");
        } else if(chosePoke = true && !choseEnemy && userPoke !== $(this).attr('id')) {	
            oppPoke = $(this).attr('id');
            $("#userChosenEnemy").append(this);
            $(this).addClass("yourPoke");    
            choseEnemy = true;
            console.log("user has chosen first enemy!")
            $('#battledescrip').html("");
            $("#instructions").html("Your pokebattle is about to begin! Click attack!");
        }
     }); // to onclick
};

function standOnBattleGround() {
    if(chosePoke = true) {
    var myPoke = "<div id=" + pokeArray[userPoke].id + " class='btn character text-center myPoke' value=" + pokeArray[userPoke].id +
    "><img class='pokes' src=" + pokeArray[userPoke].backpic + " alt=" + pokeArray[userPoke].name + "><br> HP: " + pokeArray[userPoke].hp +
    "<br> Attack: " + pokeArray[userPoke].att + "<br> Counter-Attack:" + pokeArray[userPoke].counteratt + " </div>";
    var yourPoke = "<div id=" + pokeArray[oppPoke].id + " class='btn character text-center yourPoke' value=" + pokeArray[oppPoke].id +
    "><img class='pokes' src=" + pokeArray[oppPoke].frontpic + " alt=" + pokeArray[oppPoke].name + "><br> HP: " + pokeArray[oppPoke].hp +
    "<br> Attack: " + pokeArray[oppPoke].att + "<br> Counter-Attack:" + pokeArray[oppPoke].counteratt + " </div>";
    $('#userChosenPoke').html(myPoke);
    $('#userChosenEnemy').html(yourPoke);
    console.log("pokes standing on battleground!")
    }
}


function battletime() {
    var description = pokeArray[userPoke].name + " attacks " + pokeArray[oppPoke].name + " for " + pokeArray[oppPoke].att + " damage!<br>" +
        pokeArray[oppPoke].name + " counter attacks for " + pokeArray[oppPoke].counteratt + " damage!<br>" +
        pokeArray[userPoke].name + "'s attack power has increased by " + rounds + "!";
    $('#battledescrip').html(description);
}
// this is where I want to put poke-specific messages for each
// eg: if id = eevee, [eevee] used (etc)



// this is where THE ACTION HAPPENS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    $('#attack').on("click", function() {
        if(!chosePoke) {
            $('#battledescrip').html("You can't pokebattle without a pokemon!");
        }
        else if(!choseEnemy) {
            $('#battledescrip').html("Choose your enemy pokemon!");
        }
        else if(chosePoke && choseEnemy) {
            rounds++;
            pokeArray[oppPoke].hp  = enemyArray[opponentChar].hitPoints - pokeArray[userPoke].att;
            pokeArray[userPoke].hp = pokeArray[oppPoke].hp - pokeArray[oppPoke].att;


            if(pokeArray[oppPoke].hp < 0) {
                numberofenemies--;
                if(numberofenemies > 0) {
                    $(".yourPoke").remove();
                    $('#battledescrip').html(pokeArray[oppPoke].name + " has fainted!");
                    $("#instructions").html("Who will you duel next?");
                    choseEnemy = false;
                }
                else {
                    battletime();
                    alert("You're the Pokemon Master!'");
                    wins++;
                    $('#winsdiv').html(wins);
                    offerPlayAgain();
                }
                
            }
            else if(pokeArray[userPoke].hp < 0) {
                battletime();
                alert("Choose a new pokemon to play again!");
                loses++;
                $('#lossesdiv').html(losses);
                offerPlayAgain();
            }
            else {
                battletime();
                standOnBattleGround();
            }

            pokeArray[userPoke].att = pokeArray[userPoke].att + rounds;
        }
    });

    $('#restart').on("click", function(){
        resetEverything();
    });






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

function offerPlayAgain() {
    if (confirm("Play again?")) {
        resetEverything();
    } else {
        alert("Bye!");
    }
}


// ----------------------------- section for declaring functions finito ---------------------------- //

// ---------------------------------- section for calling functions --------------------------------- //

// $("#restartgame").on("click", function offerPlayAgain());

resetEverything();      // this function works
choosePoke();
// standOnBattleGround();



// choosePoke();
// pokeEnemies();


// bigWin();            // this function works, but I am commenting it out during building/testing
// loseCondition();     // this function works, but I am commenting it out during building/testing
// winCondition();      // this function works, but I am commenting it out during building/testing


// ------------------------------ section for calling functions finito ------------------------------ //

}); // to Document Ready Function