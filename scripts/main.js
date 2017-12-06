var PKMN_SEL = "[data-pokemon]";
var IMG_SEL = "[data-image-target]";
var TXT_SEL = "[data-text-target]";
var OAK_SEL = "[data-oak]";
var OPTN1_SEL = "[data-option1]";
var OPTN2_SEL = "[data-option2]";
var BLBXS_SEL = "[data-ball-boxes]";

var charText = "So! You want the fire POKéMON, Charmander?";
var squirtText = "So! You want the water POKéMON, Squirtle?";
var bulbText = "So! You want the plant POKéMON, Bulbasaur?";
var oakText = "THOSE ARE NOT THE RIGHT BALLS YOU LITTLE PERVERT!";
var option1Text = "Yes";
var option2Text = "No";
var sorryText = "Sorry!";
var yikesText = "C'mere Gramps!";
var yesText = "This POKéMON is really energetic!";
var noText = "Now, USER, which POKéMON do you want? (click a pokéball!)";
var oakResponse1 = "Just don't do it again... Here. Pick a POKéMON.";
var oakResponse2 = "I'm out of here. I don't get paid enough for this shit.";

var pokemonList = document.querySelectorAll(PKMN_SEL);
var imgTarget = document.querySelector(IMG_SEL);
var txtTarget = document.querySelector(TXT_SEL);
var oakTarget = document.querySelector(OAK_SEL);
var option1Target = document.querySelector(OPTN1_SEL);
var option2Target = document.querySelector(OPTN2_SEL);
var ballBoxesTarget = document.querySelector(BLBXS_SEL);

pokemonList.forEach(function (pokeball) {
    pokeball.addEventListener('click', function (event) {
        event.preventDefault();
        imgTarget.setAttribute('src', pokeball.getAttribute('href'));
        ballBoxesTarget.setAttribute('class', 'hide ball-boxes');

        if (pokeball.getAttribute('href') == "images/charmander.png") {
            txtTarget.textContent = charText;
        
        } else if (pokeball.getAttribute('href') == "images/squirtle.png") {
            txtTarget.textContent = squirtText;
        
        } else {
            txtTarget.textContent = bulbText;
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
        imgTarget.setAttribute('class', 'pokemon-cry');

    } else if (txtTarget.hasAttribute('data-oak-text')) {
        txtTarget.textContent = oakResponse1;
        ballBoxesTarget.setAttribute('class', 'ball-boxes show');
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

// Add pokeball move/open animation
// Wait for animation to spawn pokemon
// Move Oak when clicked
// Move Ash and Pikachu when clicked
// Change text when yes/no is clicked
// Count Oak responses, do something
// Make pokemon move when spawned and 'yes' is selected.