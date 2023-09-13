
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "type" in pokemon
      ) {
        pokemonList.push(pokemon);
      } else {
        console.log("incorrect pokemon");
      }
    }
    function getAll() {
      return pokemonList;
    }
    function addListItem(pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listpokemon = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function(event) {
        showDetails(pokemon);
      });
    }
  
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }
  
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }
  
    function showDetails(item) {
      pokemonRepository.loadDetails(item).then(function () {
        console.log(item);
      });
    }
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
    };
  })();
  
  
  pokemonRepository.loadList().then(function () {
    
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
  

//for (let i=0; i < pokemonList.length; i++){
   //if (pokemonList[i].height <6 && pokemonList[i].height >0.6){
    //  document.write(pokemonList[i].name + " : " + pokemonList[i].height + "" + "<br>");
    
    //} else { 
        
     // document.write(pokemonList[i].name + " : " + pokemonList[i].height + " Wow, that its Big!" + "<br>");
    //}
  //}
  
  
//pokemonRepository.getAll().forEach(function(pokemon) {
//document.write(pokemon.name + " : " + pokemon.height + "<br>");
//pokemonRepository.add();
//});

//Object.keys(pokemonRepository).forEach(function(property) {
  //  console.log(pokemonRepository[property]);
  //});
//  console.log(pokemonRepository.getAll()); 

//{ 
  //  name: "Bulbasaur",
    //type: ["grass" , "poison"],
    //height: 2.04,
    //weight: 15.2,
    //category: "seed"
//},
//{
  //  name: "Charizard",
   // type: ["fire" , "flying"],
    //height: 5.07,
    //weight: 199.5,
    //category: "flame"
//},
//{
  //  name: "Alakazam",
    //type: ["psychic"],
    //height: 4.11,
    //weight: 105.8,
    //category: "psi"
//},
//{
  //  name: "Articuno",
    //type: ["ice" , "flying"],
    //height: 5.07,
    //weight: 122.1,
    //category: "freeze"
//},
