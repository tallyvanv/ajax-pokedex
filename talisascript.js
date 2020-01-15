(() => {
    document.getElementById("run").addEventListener("click", function() {
    let pokemonInput = document.getElementById("pokemonToGet").value;
        async function getPokemon() {
            let path = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;
            const data = await axios.get(path);
            //const data = await pokedex.json();
            console.log(data);
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