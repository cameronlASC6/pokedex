let url = "https://pokeapi.co/api/v2/pokemon/chimchar";

fetch(url)
.then((Response)=> Response.json())
.then(function(data) {
    console.log(data)
})


.catch(function(error){});


