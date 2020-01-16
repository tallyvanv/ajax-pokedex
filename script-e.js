/*    //console.log(currentDate + "today is");
    document.getElementById("submit").addEventListener("click", function () {

        const input;
        let searchPokemon = document.getElementById("pokemonToGet").value;
        //let inputPokemon = document.getElementById("currentPokemon");
        inputPokemon.innerHTML = searchPokemon;

        if (number.isInteger(searchPokemon) === true) ;
        {
            inputPokemon.innerHTML = pokeID;
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
                .then((response) => {
                    return response.json();
                })
                .then((allPokemon) => {
                    console.log(allPokemon);
                })
        else
            {
                inputPokemon.innerHTML = pokeName;
                fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((allPokemon) => {
                            console.log(allPokemon);
                        }
                    )
            }*/

(() => {

    let DATA;
    document.getElementById("run").addEventListener("click", function () {
        let pokemonInput = (document.getElementById("pokemonToGet").value).toLowerCase();

        function randomNumber(thelenght){
            return Math.round(Math.random() * thelenght);
        }

        async function getPokemon() {
            let path = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}`;
            const data = await axios.get(path);

            console.log(data);

            let pokeName = document.getElementById("pokeName");
            let pokeId = document.getElementById("pokeId");
            let moves = document.getElementById("moves");

            pokeName.innerHTML = data.data.species.name;
            pokeId.innerHTML = data.data.id;


            let sprite = document.getElementById("sprite");
            let att = document.createAttribute("src");
            att.value = data.data.sprites.front_default;
            sprite.setAttributeNode(att);

            let movesArr = [];
            let lengthArr = data.moves.length -1;
            for (let i=0; i < data.moves.length; i++) {
                movesArr.push(data.moves[randomNumber(lengthArr).move.name]);
            }

            let filterMoves = movesArr.filter((item, index) => {
                return movesArr.indexOf(item) === index;
            });

            for (j =1; j < 5; j++) {
                document.getElementById("move" + j + "").innerHTML = filterMoves[j];


            }

            /*            let movesArr = [];
                        let movesData;
                        while (movesArr.length < 4) {
                            movesData = data.data.moves;
                            let randomMove = Math.floor(Math.random() * movesData.length);
                            if (movesArr.indexOf(randomMove) === -1) {
                                movesArr.push(randomMove);
                            }
                            console.log(movesArr);
                        }*/

            let dataArrMove = data.data;

            // poke Moves


            //let movesData;
            //function testing(movePlaceholder) {
            for (let i = 0; i < data.data.moves.length; i++) {
                movesData = movePlaceholder[i].move.name;
                movesArr.push(movesData);
            }
            console.log(movesData);
            for (let i = 0; i < movesArr.length; i++) {
                moves.innerHTML = movesData;
            }

            // }

            moves.innerHTML = testing(dataArrMove);
            console.log(testing(dataArrMove));


            /*            let move = [];
                        let fourMoves;

                        function getMoves() {

                            for (let i = 0; i < movesArr.length; i++) {
                                fourMoves = movesData[Math.floor(Math.random() * movesData.length)];
                                move.push(fourMoves);

                                console.log(move);
                                console.log(fourMoves);
                                return move
                            }
                            moves.innerHTML = getMoves(movesData);
                        }

                        getMoves(movesData);*/


            //Getting evolution
            let evolveSprite;

            async function getEvolution() {
                let path = `https://pokeapi.co/api/v2/pokemon-species/${pokemonInput}`;
                const dataEvol = await axios.get(path);
                console.log(dataEvol);


                if (dataEvol.data.evolves_from_species === null) {
                    document.getElementById("evolutionsInfo").innerHTML = " ";
                    let evolSprite = document.querySelector("#Pevolution");
                    let evolAtt = document.createAttribute("src");
                    evolAtt.value = " ";
                    evolSprite.setAttributeNode(evolAtt);
                } else {
                    //getting img using the name found in the evolve info
                    let evolvesFromName = dataEvol.data.evolves_from_species.name;

                    async function getEvolutionPic() {
                        let path = `https://pokeapi.co/api/v2/pokemon/${evolvesFromName}`;
                        const evolvePicData = await axios.get(path);

                        let img = evolvePicData.data.sprites.front_default;

                        evolveSprite = (evolvePicData.data.sprites.front_default);

                        let evolSprite = document.querySelector("#Pevolution");
                        let evolAtt = document.createAttribute("src");
                        evolAtt.value = img;
                        evolSprite.setAttributeNode(evolAtt);

                        document.getElementById("evolutionsInfo").innerHTML = "Evolves from " + evolvesFromName;
                    }

                    getEvolutionPic();
                }


                //document.getElementById("evolutionsInfo").innerHTML = "Evolves from " + evolvesFromName;
            }

            getEvolution();


            /*THINGS TO GET
                The ID-number
                An image (sprite)
                At least 4 "moves"
                The previous evolution, only if it exists, along with their name and image.
                Be carefull, you cannot just do ID-1 to get the previous form,
                for example look into "magmar" - "magmortar". You have to use a seperate api call for this!*/


        }

        getPokemon();

    });

})();


/*

            function pokeSubmit() {
                var param = document.getElementById("pokeInput").value;
                var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;
                var pokeURL2 = "http://pokeapi.co/api/v2/pokemon/" + param;

                $.getJSON(pokeURL, function (data) {
                    //console.log(data);
                    var pokeID = data.national_id;
                    var pokeName = data.name;
                    var pokeType1 = data.types[0].name;
                    if (data.types.length == 2) {
                        var pokeType2 = data.types[1].name;
                    } else var pokeType2 = null;
                    var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;
                    var pokeDescription = "";

                    $.getJSON(descriptionURI, function (data2) {
                        //console.log(data2);
                        pokeDescription = data2.description;
                    });

                    $.getJSON(pokeURL2, function (data3) {
                        //console.log(data3);

                        //console.log(JSON.stringify(data, null, "  "));
                        var imageURI = data3.sprites.front_default;

                        console.log("Number: ", pokeID);
                        console.log("Name: ", pokeName);
                        console.log("Type 1: ", pokeType1);
                        console.log("Type 2: ", pokeType2);
                        console.log("Description URI: ", descriptionURI);
                        console.log("Description: ", pokeDescription);
                        console.log("Image URI: ", imageURI);

                        // append data to HTML
                        // empty string to hold HTML
                        var li = "";
                        li += '<li><img src="' + imageURI + '">';
                        li += '<h1>#' + pokeID + ' ' + pokeName + '</h1>';
                        li += '<p>Type 1: ' + pokeType1 + '</p>';

                        // only display Type 2 if it is not null
                        if (pokeType2 != null) {
                            li += '<p>Type 2: ' + pokeType2 + '</p>';
                        }

                        li += '<p>' + pokeDescription + '</p>';
                        li += '</li>';

                        // empty the listview
                        $("#pokeDetails").empty();

                        // append new li to listview
                        $("#pokeDetails").append(li).promise().done(function () {
                            $(this).listview("refresh");
                        });

                    });

                });
            }}
            }*/
