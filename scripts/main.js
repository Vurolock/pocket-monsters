var PKMN_SEL = "[data-pokemon]";
var IMG_SEL = "[data-image-target]";
var TXT_SEL = "[data-text-target]";

var charText = "So! You want the fire POKEMON, Charmander?";
var squirtText = "So! You want the water POKEMON, Squirtle?";
var bulbText = "So! You want the plant POKEMON, Bulbasaur?";

var pokemonList = document.querySelectorAll(PKMN_SEL);
var imgTarget = document.querySelector(IMG_SEL);
var txtTarget = document.querySelector(TXT_SEL);

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
    });
});
