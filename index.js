const express = require("express");//importa modulo express
const path = require("path"); //importando path

const app = express();//instancia uma referencia do express no projeto
const port = process.env.PORT || 3000;// set port usando a var de ambiente ou a porta 3000.

app.set("view engine", "ejs"); // set engine para trabalhar com EJS
app.use(express.static(path.join(__dirname, "public"))); //set public como raiz
app.use(express.urlencoded());

//variaveis
let pokemons = [{img: "/img/bulba.jpg", num:"001", name: "Bulbassauro",type: "Planta",desc: "DescricaoHá uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.", alt: "0.7",peso: "6.9", hab:"Overgrow"},
{img: "/img/ivi.jpeg", num:"002", name: "Ivysauro",type: "Planta",desc: "Quando o bulbo em suas costas fica grande, parece perder a capacidade de ficar em pé sobre as patas traseiras.", alt: "1.0",peso: "13.0", hab:"Overgrow"},
{img: "/img/venu.jpg", num:"003", name: "Venusauro",type: "Planta",desc: "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar.", alt: "2.0",peso: "100.0", hab:"Overgrow"},
{img: "/img/charmander.jpg", num:"004", name: "Charmander",type: "Fogo",desc: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.", alt: "0.6",peso: "8.5", hab:"Chamas"},
{img: "/img/charmilion-2.jpg", num:"005", name: "Charmeleon",type: "Fogo",desc: "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda de fogo e o corta com garras afiadas.", alt: "1.1",peso: "19.0", hab:"Chamas"},
{img: "/img/charmander.jpg", num:"006", name: "Charizard",type: "Fogo",desc: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais ao soprar chamas.", alt: "1.7",peso: "90.5", hab:"Chamas"},
{img: "/img/squirtle.jpg", num:"007", name: "Squirtle",type: "Agua",desc: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.", alt: "0.5",peso: "9.0", hab:"Torrente"},
{img: "/img/wartotle.jpg", num:"008", name: "Wartotle",type: "Agua",desc: "É reconhecido como um símbolo de longevidade. Se sua casca contém algas, esse Wartortle é muito antigo.", alt: "1.0",peso: "22.5", hab:"Torrente"},
{img: "/img/blastoise.jpg", num:"009", name: "Blastoise",type: "Agua",desc: "Ele esmaga seu inimigo sob seu corpo pesado, causando desmaios. Em um piscar de olhos, ele se retirará para dentro de sua concha.", alt: "1.6",peso: "85.5", hab:"Torrente"}];

let message = "";
// app.get("/", (req, res) => {
//     res.send("Hello world uhuuuu");
// });

app.get("/", (req, res) => {
    
    const poke = pokemons;
    res.render("index", {poke: poke});
});

app.get("/test", (req, res) => {
    res.render("test", { test: "Hudson" });
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro");    
});

app.get("/detail", (req, res) => {
    
    res.render("detail", {pokemons: pokemons});
});

app.post("/details", (req, res) => {
    
    const {imagem, name, num, type, desc, hab, alt, peso} = req.body;

    const pokedados = {img: imagem, name: name, num: num, type: type, desc: desc, hab: hab, alt: alt, peso: peso};
    
    pokemons.push(pokedados);
    message = `Pokemon ${name} cadastrado com sucesso`;
    setTimeout(() => {
        message = "";
    }, 2000);
    console.log(pokemons);
    res.render("details", {pokemons: pokemons, message: message});
});

app.get("/formulario", (req, res) => {
        setTimeout(() => {
        message = "";
    }, 2000);

    res.render("formulario", {message});
});

app.post("/recebeform", (req,res) => {
    const {nome, email, senha} = req.body; // recuperando via http post
    message = `Usuário ${nome} cadastrado com sucesso. Um e-mail de confirmação foi enviado para ${email}.`;
     
   
    res.redirect("/formulario");   
    // res.render("recebeform", infor); //renderizando e usando o JSON para exibir na tela
});


//liga o servidor na porta 3000
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
