var PKMN_SEL = "[data-pokemon]";
var IMG_SEL = "[data-image-target]";
var TXT_SEL = "[data-text-target]";
var OAK_SEL = "[data-oak]";
var OPTN1_SEL = "[data-option1]";
var OPTN2_SEL = "[data-option2]";

var charText = "So! You want the fire POKéMON, Charmander?";
var squirtText = "So! You want the water POKéMON, Squirtle?";
var bulbText = "So! You want the plant POKéMON, Bulbasaur?";
var oakText = "THOSE ARE NOT THE RIGHT BALLS YOU LITTLE PERVERT!";
var option1Text = "Yes";
var option2Text = "No";
var sorryText = "Sorry!";
var yikesText = "C'mere Gramps!";

var pokemonList = document.querySelectorAll(PKMN_SEL);
var imgTarget = document.querySelector(IMG_SEL);
var txtTarget = document.querySelector(TXT_SEL);
var oakTarget = document.querySelector(OAK_SEL);
var option1Target = document.querySelector(OPTN1_SEL);
var option2Target = document.querySelector(OPTN2_SEL);

pokemonList.forEach(function(pokeball) {
    pokeball.addEventListener('click', function(event) {
        event.preventDefault();
        imgTarget.setAttribute('src', pokeball.getAttribute('href'));

        if (pokeball.getAttribute('href') == "images/charmander.png") {
            txtTarget.textContent = charText;
        
        } else if (pokeball.getAttribute('href') == "images/squirtle.png") {
            txtTarget.textContent = squirtText;
        
        } else {
            txtTarget.textContent = bulbText;
        }
        option1Target.textContent = option1Text;
        option2Target.textContent = option2Text;
    });
});

oakTarget.addEventListener('click', function(event) {
    txtTarget.textContent = oakText;
    option1Target.textContent = sorryText;
    option2Target.textContent = yikesText;
});