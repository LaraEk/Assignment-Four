$(document).ready(function() {
    // ------------------------------------------------ vars and reset ---------------------------------------------------- //
    
    var userPoke = {}; 
    var oppPoke = {}; 

    var userhp = 0;
    var enemyhp = 0;

    var userattack = 0;
    var enemyattack = 0;

    var usercounterattack = 0;
    var enemycounterattack = 0;

    
    pokeChoices = [];
    pokeArray = [
        {
            "name" : "bulbasaur",
            id : 0,
            "hp" : 100,
            "attack" : 5,
            "counteratt" : 10,
            "frontpic" : 'assets/images/bulbasaur.png',
            "backpic" : 'assets/images/bulbaback.png',
        }, {
            "name" : "eevee",
            id : 1,
            "hp" : 160,
            "attack" : 8,
            "counteratt" : 16,
            "frontpic" : 'assets/images/eevee.png',
            "backpic" : 'assets/images/eeveeback.png',
        }, {
            "name" : "mareep",
            id : 2,
            "hp" : 200,
            "attack" : 10,
            "counteratt" : 20,
            "frontpic" : 'assets/images/mareep.png',
            "backpic" : 'assets/images/mareepback.png',
        }, {
            "name" : "vulpix",
            id : 3,
            "hp" : 220,
            "attack" : 11,
            "counteratt" : 22,
            "frontpic" : 'assets/images/vulpix.png',
            "backpic" : 'assets/images/vulpixback.png',
        } ]; // this is the closing ] for pokeArray
    
    var chosePoke = false; 
    var choseEnemy = false; 

    var incrementattackpower = 10;
    
    var wins = 0;
    var losses = 0;
    
    
    
    function resetEverything() {
        userPoke = {};
        oppPoke = {};
        chosePoke = false;
        choseEnemy = false;
        numberofenemies = 3;
    
        $('.myPoke').remove();
        $('.yourPoke').remove();
    
        
        for (var i = 0; i < pokeArray.length; i++) {
           pokeChoices += "<div id=" + pokeArray[i].name + 
                            " class='btn character text-center' value=" + pokeArray[i].name +
                            "><img class='pokes' src=" + pokeArray[i].frontpic + 
                            " alt=" + pokeArray[i].name + " data-hp= " + pokeArray[i].hp + " data-attack= " + pokeArray[i].attack + " data-counterattack= " + pokeArray[i].counteratt + 
                            "><br> HP: " + pokeArray[i].hp +"<br> Attack: " + pokeArray[i].attack + "<br> Counter-Attack: " + pokeArray[i].counteratt + " </div>";
            console.log("this bit is working");
            };                      
    
        $("#fourwholepokes").html(pokeChoices);
        $("#instructions").html("Choose a starter!");
//        alert("this has run through the entire resetEverything function");
        
    
    }; // this is the closing curly for resetEverything

// ------------------------------------------------ vars and reset section complete ---------------------------------------------------- //



// ----------------------------------------------- functions time! -------------------------------------------------- //

resetEverything();
choosePoke();

function choosePoke() {
    $(".pokes").on("click", function() {
        $("#userChosenPoke").append(this);

        userPoke = $(this);
        $(this).addClass("myPoke");

        userhp = parseInt($(this).attr("data-hp"));
        userattack = parseInt($(this).attr("data-attack"));
        usercounterattack = parseInt($(this).attr("data-counterattack"));
    
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

        enemyhp = parseInt($(this).attr("data-hp"));
        enemyattack = parseInt($(this).attr("data-attack"));
        enemycounterattack = parseInt($(this).attr("data-counterattack"));
        

        $(this).addClass("yourPoke");
        choseEnemy = true;
        thisisyourenemy = true;
        console.log("user has chosen an enemy!");
        $("#instructions").html("You've chosen an enemy pokemon!  Prepare for battle!  <br> To battle your enemy pokemon, click Pokebattle!");

    }); // to onclick
};



// function battletime() { console.log("battling")
// }


$("#attackbutton" ).on( "click", function() {console.log("clicking attack button")
 
    userhp = userhp - enemycounterattack;
    enemyhp = enemyhp - userattack;
    console.log(userhp);
    console.log(enemyhp);
 
    alert("Your pokemon has lost " + enemycounterattack + " HP and is now at " + userhp + " points! Your opponent has lost " + userattack + " HP and is now at " + enemyhp + "points!");
    $("instructions").html("Keep clicking on Pokebattle to attack your enemy!")

    userattack = userattack + incrementattackpower;

    if(enemyhp <= 0) {
        $("instructions").html(oppPoke.name + " has fainted!  Chose your next opponent!");
        alert(oppPoke.name + " has fainted!  Chose your next opponent!");
        winCondition();
        $(".yourPoke").hide();
        bigWin();
    }

    if(userhp <= 0) {
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


function chooseNextOpponent() {
    choseEnemy = false;
    thisisyourenemy = false;
    chooseEnemy();
}

function offerPlayAgain() {
    if (confirm("Play again?")) {
        window.location.reload(true);
    } else {
        alert("Bye!");
        window.location.reload(true);
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