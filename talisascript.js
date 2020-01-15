(() => {
    document.getElementById("run").addEventListener("click", function() {
    let pokemonInput = document.getElementById("pokemonToGet").value;
        async function getPokemon() {
            let path = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;
            const data = await axios.get(path);
            //const data = await pokedex.json();
            console.log(data);

            let pokeName = document.getElementById("pokeName");
            let pokeId = document.getElementById("pokeId");
            let sprite = document.getElementById("sprite");
            let att = document.createAttribute("src");
            let moves = document.getElementById("moves");

            pokeName.innerHTML = data.data.species.name;
            console.log(data.data.species.name);
            pokeId.innerHTML = data.data.id;
            console.log(data.data.id);
            att.value = data.data.sprites.front_default;
            console.log(att.value);

        }
        async function getEvolution() {
            let path = `https://pokeapi.co/api/v2/pokemon-species/${pokemonInput}`;
            const data = await axios.get(path);
            console.log(data);
        }
        getPokemon();
        getEvolution();
    });
})();