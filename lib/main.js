let url = "https://pokeapi.co/api/v2/pokemon/meloetta-pirouette";

let fluidCOntainer = document.getElementsByClassName("container-fluid")[0]

function createPokemonElement(pokemon){
    //p tag for type
    //h1 for name
    // ul for moves
    // ul for abilities
    //h2 tag for number
    // div container for pokemon object
    let h1 = document.createElement("h1")
    h1.innerText = pokemon.name

    let p = document.createElement("p")
    for (let type of pokemon.types){
        p.innerText += `${type} `
    }
    let h2 = document.createElement("h2")
    h2.innerText = pokemon.number

    let moveUl = document.createElement("ul")
    for (let move of pokemon.moves) {
        moveUl.innerHTML += `<li>${move}</li>`;
    }

    let abilityUl = document.createElement("ul")
    for (let ability of pokemon.moves) {
        abilityUl.innerHTML += `<li>${ability}</li>`
    }
    let spriteh1 = document.createElement("img")
    spriteh1.src = pokemon.sprites 

    let div = document.createElement("div");
    div.append(spriteh1,h1, h2, p, moveUl, abilityUl)
    fluidCOntainer.appendChild(div);
    
}

    function getTypes(pokemonJSON){
    let types = []
    for (let type of pokemonJSON.types) {
types.push(type.type.name)
    }
    return types;
}
    function getMoves(pokemonJSON){
    let moves = []
    for (let move of pokemonJSON.moves){
        moves.push(move.move.name)
    }
    return moves
}
    function getAbilities(pokemonJSON){
    let abilities = []
    for (let ability of pokemonJSON.abilities){
        abilities.push(ability.ability.name)
    }
    return abilities
}
    

fetch(url)
.then((Response)=> Response.json())
.then(function(data) {
    console.log(data)
let name= data.name    
let number = data.id;
let types = getTypes(data);
let moves = getMoves(data);
let abilities = getAbilities(data)
let sprites = data.sprites.front_shiny
let chimchar = new Pokemon (name, number, types, moves, abilities, sprites)
console.log(chimchar)
createPokemonElement(chimchar)
})
.catch(function(error){
    console.log(error)
});

