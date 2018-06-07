$(document).ready(function() {
    // ------------------------------------------------ vars and reset ---------------------------------------------------- //
    
    var userPoke = {}; 
    var oppPoke = {}; 
    
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
    
    var chosePoke = false; // this is the var for a user-poke being chosen or not ---------- boolean --------- ???set it yet or no?
    var choseEnemy = false; // this is the var for an enemy-poke being chosen or not ---------- boolean --------- ???set it yet or no?
    
//    var numberofenemies; // how many enemies exist
//    var rounds = 10; // number by which to increment att.  (may fiddle with this as testing continues!)
    
    var wins = 0;
    var losses = 0;
    
//    var myPoke = 0;
//    var yourPoke = 0;
    
    
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
    
        $("#fourwholepokes").html(pokeChoices);
        $("#instructions").html("Choose a starter!");
//        $('#battledescrip').html(""); // I don't need a battle-description box
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

        // if (thisisyourenemy == true) {
        //     //hide other pokes?
        //     battletime();
        // }  
    }); // to onclick
};

// choosePoke();


function battletime() { console.log("battling")
    description = "let's try this";
    $("instructions").html(description);
    userPoke.hp = userPoke.hp - oppPoke.attack;
    oppPoke.hp =  oppPoke.hp - userPoke.attack; 
}

$(".attackbutton" ).on( "click", function() {console.log("clicking attack button")
    battletime();

    if(userPoke.hp = 0) {
        $("instructions").html(oppPoke.name + " has fainted!  Chose your next opponent!");
        winCondition();
    }

    if(oppPoke.hp = 0) {
        $("instructions").html(userPoke.name + " has fainted!");
        loseCondition();
    }
});


function winCondition() {
     wins++;
     chooseNextOpponent();
     }

function loseCondition() {
        losses++;
        alert("You've lost the Pokebattle! Choose a new pokemon to play again!");
        chooseNextOpponent();
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

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------