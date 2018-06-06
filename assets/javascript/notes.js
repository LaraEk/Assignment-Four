// THIS ONE'S A COMPLETE !@#$%^&*(), so I'mma leave it here and try to write my own.

$('#attackbutton').on("click", function() {console.log(myPoke);console.log(yourPoke);
        if(chosePoke == false) {
            $('#battledescrip').html("You can't pokebattle without a pokemon!");
        }
        else if(choseEnemy == false) {
            $('#battledescrip').html("Choose your enemy pokemon!");
        }
        else if(chosePoke && choseEnemy) { console.log("attacking");
            rounds++;
            pokeArray[oppPoke].hp  = pokeArray[oppPoke].hp - pokeArray[userPoke].att;
            pokeArray[userPoke].hp = pokeArray[userPoke].hp - pokeArray[oppPoke].att;


            if(pokeArray[oppPoke].hp < 0) {
                numberofenemies--;
                if(numberofenemies > 0) {
                    $(".yourPoke").remove();
                    $('#battledescrip').html(pokeArray[oppPoke].name + " has fainted!");
                    $("#instructions").html("Who will you duel next?");
                    choseEnemy == false;
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


    ~:~:~:~:~:~:~:~:~:~:~:~:~:~:~:~

    <div class="container-fluid text-center"><img src="assets/images/pokelogomed.png" id="logo" /> 
    <div id="winsdiv" class="text-center">Wins:</div>  |  <div id="lossesdiv" class="text-center">Losses:</div>
      <div class="row">
        <div id="fourwholepokes" class="text-center"></div> <!--this is where four whole pokes go-->        
          <div class="col-md-4">&nbsp;</div>
          <div class="col-md-4 panel panel-default text-center" id="instructions" style="padding:20px"></h2> <!--right now, this is where directions go.  later, I want them moved down.--> 
          <div class="col-md-4">&nbsp;</div>       
      </div> <!-- this is to the thrice-col-4-md div-->
    </div>

      <div class="row theCenter text-center">
        <div class="col-md-4"></div>
        <div class="col-md-4"> <!-- I want to fix this so they show up on the field! -->
          <button id="attackbutton" type="button" class="btn btn-danger" value=attack>Attack</button><br><br>
          <button id="restartbutton" type="button" class="btn btn-info" value=restart>Restart</button><br><br>
          <div id="battledescrip"></div><br>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>

    <div class="row theCenter text-center">
      <div class="col-md-3">&nbsp;</div>
      <div class="col-md-2" id="userChosenPoke"></div>
      <div class="col-md-2">&nbsp;</div>
      <div class="col-md-2" id="userChosenEnemy"><p>this is where Enemy Poke should be</p></div>
      <div class="col-md-3">&nbsp;</div>
    </div>
  </div>



  <!-- note to self - put pokebanner! -->

  <div id="restartgame"><button>Restart Game</button></div>
  Wins: <div id="winsdiv"></div>
  Losses: <div id="lossesdiv"></div>

  Enemy pokes:<div id="enemypokes"></div>

  // --------------------------------------------------------------------------------------------------------

  // LOOKS LIKE I DON'T NEED THIS FUNCTION AT ALL

  function standOnBattleGround() {
    if(chosePoke == true) {console.log("I'm on the right track?")
        userPoke.append()
    // var myPoke = "<div id=" + pokeArray[userPoke].id + " class='btn character text-center myPoke' value=" + pokeArray[userPoke].id +
    // "><img class='pokes' src=" + pokeArray[userPoke].backpic + " alt=" + pokeArray[userPoke].name + "><br> HP: " + pokeArray[userPoke].hp +
    // "<br> Attack: " + pokeArray[userPoke].att + "<br> Counter-Attack:" + pokeArray[userPoke].counteratt + " </div>";
    // var yourPoke = "<div id=" + pokeArray[oppPoke].id + " class='btn character text-center yourPoke' value=" + pokeArray[oppPoke].id +
    // "><img class='pokes' src=" + pokeArray[oppPoke].frontpic + " alt=" + pokeArray[oppPoke].name + "><br> HP: " + pokeArray[oppPoke].hp +
    // "<br> Attack: " + pokeArray[oppPoke].att + "<br> Counter-Attack:" + pokeArray[oppPoke].counteratt + " </div>";
    $('#userChosenPoke').html(myPoke);
    $('#userChosenEnemy').html(yourPoke);
    console.log("pokes standing on battleground!")
    }
}
