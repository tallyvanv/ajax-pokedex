(() => {
    document.getElementById("run").addEventListener("click", function() {
        let pokemonInput = document.getElementById("pokemonToGet").value;
        async function getPokemon() {
            let path = `https://pokeapi.co/api/v2/pokemon/${pokemonInput.toLowerCase()}`;
            const data = await axios.get(path);
            console.log(data);

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
        let evolveSprite;
        async function getEvolution() {
            let path = `https://pokeapi.co/api/v2/pokemon-species/${pokemonInput.toLowerCase()}`;
            const dataEvol = await axios.get(path);
            console.log(dataEvol);



            if (dataEvol.data.evolves_from_species === null) {
                document.getElementById("evolutionsInfo").innerHTML = " ";
                let evolSprite = document.getElementById("Pevolution");
                let evolAtt = document.createAttribute("src");
                evolAtt.value = " ";
                evolSprite.setAttributeNode(evolAtt);

            }
            else {
                //getting img using the name found in the evolve info
                let findEvol = dataEvol.data.evolves_from_species.name;
                let evolvesFromName = findEvol.charAt(0).toUpperCase() + findEvol.slice(1);
                document.getElementById("evolutionsInfo").innerHTML = "Evolves from " + evolvesFromName;

                console.log(document.getElementById("evolutionsInfo").innerHTML);
                async function getEvolutionPic() {
                    let path = `https://pokeapi.co/api/v2/pokemon/${evolvesFromName.toLowerCase()}`;
                    const evolvePicData = await axios.get(path);

                    let img = evolvePicData.data.sprites.front_default;

                    evolveSprite = (evolvePicData.data.sprites.front_default);

                    let evolSprite = document.getElementById("Pevolution");
                    let evolAtt = document.createAttribute("src");
                    evolAtt.value = img;
                    evolSprite.setAttributeNode(evolAtt);
                }

                getEvolutionPic();
            }
        }
        getPokemon();
        getEvolution();
    });
})();