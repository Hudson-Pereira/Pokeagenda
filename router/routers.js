const express = require("express");

const router = express.Router();

module.exports = router;

//variaveis
let pokemons = [
  {
    img: "/img/bulba.jpg",
    num: "001",
    name: "Bulbassauro",
    type: "Planta",
    desc: "Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.",
    alt: "0.7",
    peso: "6.9",
    hab: "Overgrow",
  },
  {
    img: "/img/ivi.jpeg",
    num: "002",
    name: "Ivysauro",
    type: "Planta",
    desc: "Quando o bulbo em suas costas fica grande, parece perder a capacidade de ficar em pé sobre as patas traseiras.",
    alt: "1.0",
    peso: "13.0",
    hab: "Overgrow",
  },
  {
    img: "/img/venu.jpg",
    num: "003",
    name: "Venusauro",
    type: "Planta",
    desc: "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar.",
    alt: "2.0",
    peso: "100.0",
    hab: "Overgrow",
  },
  {
    img: "/img/charmander.jpg",
    num: "004",
    name: "Charmander",
    type: "Fogo",
    desc: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
    alt: "0.6",
    peso: "8.5",
    hab: "Chamas",
  },
  {
    img: "/img/charmilion-2.jpg",
    num: "005",
    name: "Charmeleon",
    type: "Fogo",
    desc: "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda de fogo e o corta com garras afiadas.",
    alt: "1.1",
    peso: "19.0",
    hab: "Chamas",
  },
  {
    img: "/img/charmander.jpg",
    num: "006",
    name: "Charizard",
    type: "Fogo",
    desc: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais ao soprar chamas.",
    alt: "1.7",
    peso: "90.5",
    hab: "Chamas",
  },
  {
    img: "/img/squirtle.jpg",
    num: "007",
    name: "Squirtle",
    type: "Agua",
    desc: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
    alt: "0.5",
    peso: "9.0",
    hab: "Torrente",
  },
  {
    img: "/img/wartotle.jpg",
    num: "008",
    name: "Wartotle",
    type: "Agua",
    desc: "É reconhecido como um símbolo de longevidade. Se sua casca contém algas, esse Wartortle é muito antigo.",
    alt: "1.0",
    peso: "22.5",
    hab: "Torrente",
  },
  {
    img: "/img/blastoise.jpg",
    num: "009",
    name: "Blastoise",
    type: "Agua",
    desc: "Ele esmaga seu inimigo sob seu corpo pesado, causando desmaios. Em um piscar de olhos, ele se retirará para dentro de sua concha.",
    alt: "1.6",
    peso: "85.5",
    hab: "Torrente",
  },
];

let message = "";

router.get("/cadastro", (req, res) => {
  res.status(200).render("cadastro");
});

router.get("/catalogo", (req, res) => {
  res.status(200).render("catalogo", { pokemons });
});

router.get("/pokemon/:id", (req, res) => {
  const title = pokemons[req.params.id].name;
  res
    .status(200)
    .render("pokemon", { titulo: title, pokemon: pokemons[req.params.id] });
});

router.post("/details", (req, res) => {
  const { imagem, name, num, type, desc, hab, alt, peso } = req.body;

  const pokedados = {
    img: imagem,
    name: name,
    num: num,
    type: type,
    desc: desc,
    hab: hab,
    alt: alt,
    peso: peso,
  };

  pokemons.push(pokedados);
  message = `Pokemon ${name} cadastrado com sucesso`;
  setTimeout(() => {
    message = "";
  }, 5000);
  console.log(pokemons);
  res.status(200).render("details", { pokemons, message });
});

router.post("/details", (req, res) => {
  res.status(200).render("details", { message, pokemons });
});
