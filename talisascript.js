(() => {
    let pokemonInput = document.getElementById("pokemonToGet").value;
    async function getPokemon() {
        let path = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;
        const response = await axios.get(path);
        //const data = await pokedex.json();
        console.log(response);
    }
    document.getElementById("run").addEventListener("click", function() {
        getPokemon()
    })
})();