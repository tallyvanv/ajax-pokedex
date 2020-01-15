https://pokeapi.co/api/v2/pokemon/

    //console.log(currentDate + "today is");
    document.getElementById("submit").addEventListener("click", function () {
        let city = document.getElementById("search").value;
        let inputCity = document.getElementById("currentCity");
        inputCity.innerHTML = city;

        let searchPokemon = document.getElementById("pokeSearch").value;
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
            }



            /*THINGS TO GET
            The ID-number
            An image (sprite)
            At least 4 "moves"
            The previous evolution, only if it exists, along with their name and image.
            Be carefull, you cannot just do ID-1 to get the previous form,
            for example look into "magmar" - "magmortar". You have to use a seperate api call for this!*/





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
            }