const left = document.querySelector("#left");
const pokemon = document.querySelector("#pokemon");
const pok = document.querySelector("#name");
const right = document.querySelector("#right");
const tipo = document.querySelector("#tipo");
const evo1 = document.querySelector("#evo1");
const evo2 = document.querySelector("#evo2");
const evo3 = document.querySelector("#evo3");


left.addEventListener("click", function() {
    if (pok.textContent == "Charmander") {
        pokemon.src = "img/squirtle.jpg";
        pok.textContent = "Squirtle";
        tipo.textContent = "Agua";
    } else if (pok.textContent == "Squirtle") {
    //     pokemon.src = "img/charizard.jpg";
    //     pok.textContent = "Charizard";
    // } else if (pok.textContent == "Charizard") {
        pokemon.src = "img/bulba.jpg";
        pok.textContent = "Bulbassauro";
        tipo.textContent = "Planta";
    } else {
    pokemon.src = "img/charmander.jpg";
    pok.textContent = "Charmander";
    tipo.textContent = "Fogo";
    }
});

right.addEventListener("click", function() {
    if (pok.textContent == "Charmander") {
        pokemon.src = "img/bulba.jpg";
        pok.textContent = "Bulbassauro";
        tipo.textContent = "Planta";
    } else if (pok.textContent == "Bulbassauro") {
    //     pokemon.src = "img/charmilion.jpg";
    //     pok.textContent = "Charmeleon";
        pokemon.src = "img/squirtle.jpg";
        pok.textContent = "Squirtle";
        tipo.textContent = "Agua";
    } else {
        pokemon.src = "img/charmander.jpg";
        pok.textContent = "Charmander";
        tipo.textContent = "Fogo";
    }
});

evo2.addEventListener("click", function(){
    if (pok.textContent == "Charmander" || pok.textContent == "Charizard") {
        pokemon.src = "img/charmilion-2.jpg";
        pok.textContent = "Charmeleon";
        tipo.textContent = "Fogo";
    } else if (pok.textContent == "Bulbassauro" || pok.textContent == "Venussauro") {
        pokemon.src = "img/ivi.jpeg";
        pok.textContent = "Ivysauro";
        tipo.textContent = "Planta";
    } else if (pok.textContent == "Squirtle" || pok.textContent == "Blastoise"){
        pokemon.src = "img/wartotle.jpg";
        pok.textContent = "Wartotle";
        tipo.textContent = "Agua";
    } else {

    };
});

evo3.addEventListener("click", function(){
    if (pok.textContent == "Charmeleon" || pok.textContent == "Charmander") {
        pokemon.src = "img/charizard.jpg";
        pok.textContent = "Charizard";
        tipo.textContent = "Fogo";
    } else if (pok.textContent == "Ivysauro" || pok.textContent == "Bulbassauro") {
        pokemon.src = "img/venu.jpg";
        pok.textContent = "Venussauro";
        tipo.textContent = "Planta";
    } else if (pok.textContent == "Wartotle" || pok.textContent == "Squirtle"){
        pokemon.src = "img/blastoise.jpg";
        pok.textContent = "Blastoise";
        tipo.textContent = "Agua";
    } else {

    };
});

evo1.addEventListener("click", function(){
    if (pok.textContent == "Charmeleon" || pok.textContent == "Charizard") {
        pokemon.src = "img/charmander.jpg";
        pok.textContent = "Charmander";
        tipo.textContent = "Fogo";
    } else if (pok.textContent == "Ivysauro" || pok.textContent == "Venussauro") {
        pokemon.src = "img/bulba.jpg";
        pok.textContent = "Bulbassauro";
        tipo.textContent = "Planta";
    } else if (pok.textContent == "Wartotle" || pok.textContent == "Blastoise"){
        pokemon.src = "img/squirtle.jpg";
        pok.textContent = "Squirtle";
        tipo.textContent = "Agua";
    } else {

    };
});

