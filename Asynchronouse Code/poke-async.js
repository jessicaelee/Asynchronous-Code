$(function () {

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  let ALL_POKEMON = null;

  async function getAllPokemon() {

    axios.get(`${BASE_URL}?offset=0&limit=964`)
      .then(function (pokemonPromise) {
        let allPokemon = pokemonPromise;
        return allPokemon.data.results;
      })
      .then(function (results) {
        let random3Poke = _.sampleSize(results, 3);
        return random3Poke.map(pokemon => pokemon)
      })
      .then(function (pokemonNameArray) {
        for (let pokemon of pokemonNameArray) {
          axios.get(`${BASE_URL}${pokemon.name}`)
            .then(async function (pokemonData) {
              let pokemonURL = pokemonData.data.species.url;
              let result = await axios.get(pokemonURL)
              let flavors = result.data.flavor_text_entries;
              for (let i = 0; i < flavors.length; i++) {
                if (flavors[i].language.name === "en") {
                  console.log(`${pokemon.name}: ${flavors[i].flavor_text}`);
                  break;
                }
              }
            })
          // .then(function (pokemonURLReq) {
          //   console.log(pokemonURLReq)
          //   let flavors = pokemonURLReq.data.flavor_text_entries;
          //   for (let i = 0; i < flavors.length; i++) {
          //     if (flavors[i].language.name === "en") {
          //       console.log(`${pokemonURLReq.data.name}: ${flavors[i].flavor_text}`);

          //       break;
          //     }

        }

      })

  }

  // let pokemonPromise = axios.get(`${BASE_URL}?offset=0&limit=964`)

  // let allPokemon = await pokemonPromise;
  // let results = allPokemon.data.results;

  //   ALL_POKEMON = results;

  //   getRandomPokemon(ALL_POKEMON);

  // }

  //   // returns array of 3 pokemon names 
  //   function getRandomPokemon(ALL_POKEMON) {

  //     let random3Poke = _.sampleSize(ALL_POKEMON, 3);
  //     let pokemonNameArray = random3Poke.map(pokemon => {
  //       return pokemon.name;
  //     });

  //     getPokemonDetails(pokemonNameArray);

  //   }


  //   async function getPokemonDetails(pokemonNameArray) {

  //     for (let pokeName of pokemonNameArray) {

  //       axios.get(`${BASE_URL}${pokeName}`)
  //         .then(function (pokemonData) {
  //           let pokemonURL = pokemonData.data.species.url;
  //           let pokemonURLReq = axios.get(pokemonURL)
  //           return pokemonURLReq;
  //         })
  //         .then(function (pokemonURLReq) {
  //           let flavors = pokemonURLReq.data.flavor_text_entries;

  //           for (let i = 0; i < flavors.length; i++) {
  //             if (flavors[i].language.name === "en") {
  //               console.log(`${pokeName}: ${flavors[i].flavor_text}`);

  //               break;
  //             }

  //           }

  //         })

  //     }

  //   }

  getAllPokemon();

})