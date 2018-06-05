function attachCharacterOnClick() {
    $('.character').on("click", function(){
        if(!haveCharacter) {	//Picking your character
            myChar = $(this).attr('id');
            $("#myguy").append(this);
            $(this).addClass("hero");

            haveCharacter = true;
            $('#whathappens').html("");
            $("#todo").html("Choose your opponent!");
        }
        //You have a character and you're picking your opponent
        else if(!haveAttacker && haveCharacter && myChar !== $(this).attr('id')) {	
            opponentChar = $(this).attr('id');
            $("#enemy").append(this);
            $(this).addClass("fighting");

            haveAttacker = true;
            $('#whathappens').html("");
            $("#todo").html("Keep clicking attack to duel!");
        }
    });
}
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------
$(".character").on("click", function(){
    // make this char the hero
    hero = $(this).data("char");
    showMessage("Now click to choose your first opponent. <br> Your attack gets stronger each time you use it. Choose the order of your opponents wisely.", true);
    // reassign click events on non-hero characters
    $(".character").off("click").on("click", function(){
        setOpponent($(this).data("char"));
    });
    // set the enemy boolean on character objects
    for (var i = 0; i < characters.length; i++) {
        if (i === hero){
            characters[i].enemy = false;
            $(this).detach().appendTo("#hero .charContainer").off("click");

        } else {
            characters[i].enemy = true;
        }
    }
});