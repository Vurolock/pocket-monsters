var PKMN_SEL = "[data-pokemon]";
var IMG_SEL = "[data-target]";

var pokemonList = document.querySelectorAll(PKMN_SEL);
var imgTarget = document.querySelector(IMG_SEL);

pokemonList.forEach(function(pokeball) {
    pokeball.addEventListener('click', function(event) {
        event.preventDefault();
        imgTarget.setAttribute('src', pokeball.getAttribute('href'));
    });
});