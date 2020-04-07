/*
(() => {
    document.getElementById("run").addEventListener("click", function() {
    let pokemonInput = document.getElementById("pokemonToGet").value;
        async function getPokemon() {
            let path = `https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`;
            const data = await axios.get(path);

            let pokeName = document.getElementById("pokeName");
            let pokeId = document.getElementById("pokeId");
            let moves = document.getElementById("moves");

            let whichPokemon = data.data.species.name;
            pokeName.innerHTML = whichPokemon.charAt(0).toUpperCase() + whichPokemon.slice(1);
            pokeId.innerHTML = data.data.id;


            let sprite = document.getElementById("sprite");
            let att = document.createAttribute("src");
            att.value = data.data.sprites.front_default;
            sprite.setAttributeNode(att);


        }
        async function getEvolution() {
            let path = `https://pokeapi.co/api/v2/pokemon-species/${pokemonInput}`;
            const data = await axios.get(path);
        }
        getPokemon();
        getEvolution();
    });

    function randNumb {
        while ...
    }

    empty array

})();*/
