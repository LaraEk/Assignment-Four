$(document).ready(function() {
// ------------------------------------------------ vars and reset ---------------------------------------------------- //

var userPoke = {}; // 
var oppPoke = {}; //

var pokeChoices = [];
var pokeArray = [
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


var chosePoke; // this is the var for a user-poke being chosen or not ---------- boolean --------- ???set it yet or no?
var choseEnemy; // this is the var for an enemy-poke being chosen or not ---------- boolean --------- ???set it yet or no?

var numberofenemies; // how many enemies exist
var rounds = 10; // number by which to increment att.  (may fiddle with this as testing continues!)

var wins = 0;
var losses = 0;

var myPoke = 0;
var yourPoke = 0;

var thisisyourpoke = false;
var thisisyourenemy = false;


function resetEverything() {
    userPoke = {};
    oppPoke = {};
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
                            // Second Note to Self: Update: I love it but I am going to use it sparingly, because it's kinda messy and I've learned a lot in the last three days

    $("#fourwholepokes").html(pokeChoices);
    $("#instructions").html("Choose a starter!");
//    $('#battledescrip').html(""); // do I even need a separate battle-description box? NO!!!! I DON'T!!!
    alert("this has run through the entire resetEverything function");
    
// choosePoke();    

}; // this is the closing curly for resetEverything
// ------------------------------------------------ vars and reset section complete ---------------------------------------------------- //



// ----------------------------------------------- functions time! -------------------------------------------------- //

resetEverything();
choosePoke();

function choosePoke() {
    $(".pokes").on("click", function() {
        $("#userChosenPoke").append(this);
        userPoke = $(this).attr('id','name','backpic','hp','att','counteratt'); // I still don't know how to get these attributes added
        $(this).addClass("myPoke");
        chosePoke = true;
        thisisyourpoke = true;
        console.log("user has chosen a poke!");
        $("#instructions").html("You've chosen a pokemon!  Great!  Now choose the first pokemon you'd like to battle!");

        if (thisisyourpoke == true) {
            chooseEnemy();
        }  
    }); // to onclick
};


function chooseEnemy() {
    $(".pokes").on("click", function() {
        $("#userChosenEnemy").append(this);
        enemyPoke = $(this).attr('id','name','backpic','hp','att','counteratt');
        $(this).addClass("yourPoke");
        choseEnemy = true;
        thisisyourenemy = true;
        console.log("user has chosen an enemy!");
        $("#instructions").html("You've chosen an enemy pokemon!  Prepare for battle!  <br> To battle your enemy pokemon, click Pokebattle!");

        if (thisisyourenemy == true) {
            //hide other pokes?
            battletime();
        }  
    }); // to onclick
};

// choosePoke();


function battletime() { console.log("battling")
    description = "let's try this"
    $("instructions").html(description);
}



function offerPlayAgain() {
    if (confirm("Play again?")) {
        resetEverything();
    } else {
        alert("Bye!");
    }
}

function bigWin() {
    if (wins == 3) {
        alert("YOU HAVE DEFEATED ALL ENEMY POKEMON!!");
        offerPlayAgain();
    }
}





















}); // to Document Ready Function







// function battletime() {console.log("attacking");
//         rounds++;
//         pokeArray[oppPoke].hp  = pokeArray[oppPoke].hp - pokeArray[userPoke].att;
//         pokeArray[userPoke].hp = pokeArray[userPoke].hp - pokeArray[oppPoke].att;

//     var description = pokeArray[userPoke].name + " attacks " + pokeArray[oppPoke].name + " for " + pokeArray[oppPoke].att + " damage!<br>" +
//         pokeArray[oppPoke].name + " counter attacks for " + pokeArray[oppPoke].counteratt + " damage!<br>" +
//         pokeArray[userPoke].name + "'s attack power has increased by " + rounds + "!";
//     $('#instructions').html(description);
// }
// // this is where I want to put poke-specific messages for each
// // eg: if id = eevee, [eevee] used (etc)
// // ----------------------------------------------- section for declaring functions -------------------------------------------------- //



// // ----------------------------------------------- section for MAKE IT SO -------------------------------------------------- //

//     $('#attackbutton').on("click", function() {console.log(myPoke);console.log(yourPoke);
// //        if(chosePoke == false) {
// //            $('#battledescrip').html("You can't pokebattle without a pokemon!");
// //        }
// //        else if(choseEnemy == false) {
// //            $('#battledescrip').html("Choose your enemy pokemon!");
// //        }
//         battletime(); 

//             if(pokeArray[oppPoke].hp < 0) {
//                 numberofenemies--;
//                 if(numberofenemies > 0) {
//                     $(".yourPoke").remove();
//                     $('#battledescrip').html(pokeArray[oppPoke].name + " has fainted!");
//                     $("#instructions").html("Who will you duel next?");
//                     choseEnemy == false;
//                 }
//                 else {
//                     battletime();
//                     alert("You're the Pokemon Master!'");
//                     wins++;
//                     $('#winsdiv').html(wins);
//                     offerPlayAgain();
//                 }
                
//             }
//             else if(pokeArray[userPoke].hp < 0) {
//                 battletime();
//                 alert("Choose a new pokemon to play again!");
//                 loses++;
//                 $('#lossesdiv').html(losses);
//                 offerPlayAgain();
//             }
//             else {
//                 battletime();
//                 standOnBattleGround();
//             }

//             pokeArray[userPoke].att = pokeArray[userPoke].att + rounds;
//         }
//     });

//     $('#restartbutton').on("click", function(){
// //         resetEverything();
//      });




// resetEverything();      // this function works
// choosePoke();


    // ----------------------------------------------- section for MAKE IT SO finito -------------------------------------------------- //


// ---------------------------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------------------------//


// ----------------------------------------------------------- NOTES BELOW -------------------------------------------------------------//


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

;


// ----------------------------- section for declaring functions finito ---------------------------- //

// ---------------------------------- section for calling functions --------------------------------- //

// $("#restartgame").on("click", function offerPlayAgain());

// standOnBattleGround();



// choosePoke();
// pokeEnemies();


// bigWin();            // this function works, but I am commenting it out during building/testing
// loseCondition();     // this function works, but I am commenting it out during building/testing
// winCondition();      // this function works, but I am commenting it out during building/testing


// ------------------------------ section for calling functions finito ------------------------------ //

