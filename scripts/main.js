var PKMN_SEL = "[data-pokemon]";
var CHAR_SEL = "[data-char-ball]";
var SQUIRT_SEL = "[data-squirt-ball]";
var BULB_SEL = "[data-bulb-ball]";
var IMG_SEL = "[data-image-target]";
var TXT_SEL = "[data-text-target]";
var OAK_SEL = "[data-oak]";
var OPTN1_SEL = "[data-option1]";
var OPTN2_SEL = "[data-option2]";
var BLBXS_SEL = "[data-ball-boxes]";
var ASH_SEL = "[data-ash]";
var PIKA_SEL = "[data-pikachu]";
var ASHPIKA_SEL = "[data-ash-pikachu]";
var ASHIMG_SEL = "[data-ash-image]";
var PIKAIMG_SEL = "[data-pikachu-image]";
var MEW_SEL = "[data-mew]";
var SIG_SEL = "[data-sig]";
var SHDW_SEL = "[data-shadow]";

var USER = prompt("First, what is your name?");

if (USER == null || USER == '') {
    USER = "TRAINER";

} else {
    USER = USER.toUpperCase();
}


var charText = "So! You want the fire POKéMON, Charmander?";
var squirtText = "So! You want the water POKéMON, Squirtle?";
var bulbText = "So! You want the plant POKéMON, Bulbasaur?";

var option1Text = "Yes";
var option2Text = "No";
var sorryText = "Sorry!";
var yikesText = "C'mere Gramps!";

var yesText = "This POKéMON is really energetic!";
var noText = "Now, " + USER + ", which POKéMON do you want? (click a POKé BALL!)";

var oakText = "THOSE ARE NOT THE RIGHT BALLS YOU LITTLE PERVERT!";
var oakResponse1 = "Just don't do it again... Here. Pick a POKéMON.";
var oakResponse2 = "I'm out of here. I don't get paid enough for this shit.";
var oakResponse3 = "Seriously, kid. No touching. I won't tell you again.";
var oakResponse4 = "YOU'RE DONE TWERP! AAARRRRGGHHHHHH!!!!!";
var oakMad = 0;

var $pokemonList = $(PKMN_SEL);
var $imgTarget = $(IMG_SEL);
var txtTarget = document.querySelector(TXT_SEL);
var oakTarget = document.querySelector(OAK_SEL);
var option1Target = document.querySelector(OPTN1_SEL);
var option2Target = document.querySelector(OPTN2_SEL);
var ballBoxesTarget = document.querySelector(BLBXS_SEL);
var charTarget = document.querySelector(CHAR_SEL);
var squirtTarget = document.querySelector(SQUIRT_SEL);
var bulbTarget = document.querySelector(BULB_SEL);
var $ashTarget = $(ASH_SEL);
var $pikaTarget = $(PIKA_SEL);
var $ashPikaTarget = $(ASHPIKA_SEL);
var $ashImgTarget = $(ASHIMG_SEL);
var $pikaImgTarget = $(PIKAIMG_SEL);
var $mewTarget = $(MEW_SEL);
var $sigTarget = $(SIG_SEL);
var $shdwTarget = $(SHDW_SEL);

txtTarget.textContent = noText;


$pokemonList.each(function (i, pokeball) {
    pokeball.addEventListener('click', function (event) {
        event.preventDefault();

        function replaceImg() {
            $imgTarget.attr('src', pokeball.getAttribute('href'));
        }
        
        function hideBallBoxes() {
            ballBoxesTarget.setAttribute('class', 'hide ball-boxes');
        }

        function makeShadow() {
            $shdwTarget.removeClass('none');
        }
        
        function goPokemon(pkmn, pkmnTxt) {
            
            function replaceText(pkmnTxt) {
                txtTarget.textContent = pkmnTxt;
            }
            
            function openPokeball(pkmn) {
                pkmn.setAttribute('src', 'images/pokeball-sidebar-open.png');
            }
            
            function closePokeball(pkmn) {
                pkmn.setAttribute('src', 'images/pokeball-sidebar.png');
            }
            
            function sendBall(pkmn) {
                pkmn.setAttribute('class', 'ball-send');
            }
            
            function rmvSendBall(pkmn) {
                pkmn.removeAttribute('class');
            }

            setTimeout(replaceText, 1500, pkmnTxt);
            sendBall(pkmn);
            setTimeout(openPokeball, 1200, pkmn);
            setTimeout(closePokeball, 2000, pkmn);
            setTimeout(rmvSendBall, 3100, pkmn);
        }

        setTimeout(makeShadow, 1400);
        setTimeout(replaceImg, 1400);
        setTimeout(hideBallBoxes, 3000);
        
        if (pokeball.getAttribute('href') == "images/charmander.png") {
            goPokemon(charTarget, charText);
        
        } else if (pokeball.getAttribute('href') == "images/squirtle.png") {
            goPokemon(squirtTarget, squirtText);
                    
        } else {
            goPokemon(bulbTarget, bulbText);
        }

        option1Target.textContent = option1Text;
        option2Target.textContent = option2Text;
        txtTarget.setAttribute('data-yes-no','');
    });
});

oakTarget.addEventListener('click', function (event) {
    txtTarget.textContent = oakText;
    txtTarget.removeAttribute('data-yes-no');
    txtTarget.setAttribute('data-oak-text','');
    option1Target.textContent = sorryText;
    option2Target.textContent = yikesText;
});

option1Target.addEventListener('click', function (event) {

    if (txtTarget.hasAttribute('data-yes-no')) {
        txtTarget.textContent = yesText;
        $imgTarget.addClass('pokemon-cry');

    } else if (txtTarget.hasAttribute('data-oak-text')) {
        if (oakMad = 1) {
            oakResponse1 = oakResponse3;
        } else if (oakMad > 1) {
            oakResponse1 = oakResponse4;
            oakTarget.setAttribute('class', 'oak-flee');            
        }
        txtTarget.textContent = oakResponse1;
        ballBoxesTarget.setAttribute('class', 'ball-boxes show');
        oakMad++;
    }
});

option2Target.addEventListener('click', function (event) {

    if (txtTarget.hasAttribute('data-yes-no')) {
        txtTarget.textContent = noText;
        option1Target.textContent = '';
        option2Target.textContent = '';
        ballBoxesTarget.setAttribute('class', 'ball-boxes show');
        

    } else if (txtTarget.hasAttribute('data-oak-text')) {
        txtTarget.textContent = oakResponse2;
        oakTarget.setAttribute('class', 'oak-flee');
    }
});

$ashPikaTarget.on('click', function (event) {

    function turnCharacter(character, direction) {
        var whoTarget;
        var leftRight;

        if (character == "ash") {
            whoTarget = $ashImgTarget;

            if (direction =='left') {
                leftRight = 'images/ash-left.png';

            } else {
                leftRight = 'images/ash-right.png';
            }

        } else {
            whoTarget = $pikaImgTarget;

            if (direction =='left') {
                leftRight = 'images/pikachu-left.png';

            } else {
                leftRight = 'images/pikachu-right.png';
            }
        }
        whoTarget.attr('src', leftRight);
    }

    function pause(character) {

        if (character == "ash") {
            var whoTarget;

            whoTarget = $ashTarget;

        } else {
            whoTarget = $pikaTarget;
        }   
        whoTarget.addClass('pause');
    }

    function unpause(character) {
        
        if (character == "ash") {
            var whoTarget;

            whoTarget = $ashTarget;

        } else {
            whoTarget = $pikaTarget;
        }   
        whoTarget.removeClass('pause');
    }

    $ashTarget.addClass('ash-move');
    $pikaTarget.addClass('pikachu-move');
    $sigTarget.addClass('sig-move');

    function mewFly() {
        $mewTarget.addClass('mew-move');
    }

    setTimeout(pause, 10500, 'ash');
    setTimeout(turnCharacter, 10600, 'ash', 'right');
    setTimeout(turnCharacter, 12500, 'ash', 'left');
    setTimeout(unpause, 12500, 'ash');

    setTimeout(pause, 9500, 'pika');
    setTimeout(turnCharacter, 9800, 'pika', 'right');
    setTimeout(turnCharacter, 12000, 'pika', 'left');
    setTimeout(unpause, 12000, 'pika');

    setTimeout(mewFly, 8800);
});

// Lets balls move multiple times
// Make balls unclickable during ball move animation
// Fix Oak responses, new animation for ass-whooping
// Add audio to pokemon cry and oak?
// Add 'ending' to site when pokemon is selected