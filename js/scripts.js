
let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
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

    function hideModal() {
        let pokemonContainer = document.querySelector("#modal-container");
        pokemonContainer.classList.remove("is-visible");

    }
  
    function showDetails(item) {
      pokemonRepository.loadDetails(pokemon).then(function () {
        console.log(pokemon);
    
    let pokemonContainer = document.querySelector("#modal-container");
     pokemonContainer.innerHtml ="";

     let modal = document.createElement("div");
      modal.classList.add("modal");

      let closeButtonElement = document.createElement("button");
      closeButtonElement.classList.ass("modal-close");
      closeButtonElement.innerText = "close";
      closeButtonElement.addEventListener("click", hidemodal);

      let titleElement = document.createElement("h1");
      titleElement.innerText = pokemon.name;

      let contentElementh = document.createElement("p");
      contentElement.innerText = height + ":" + pokemon.height;

      let contentElementt = document.createElement("p");
      contentElement.innerText = types + ":" + pokemon.types;

      let imageElement = document.createElement("img");
      imageElement.src = pokemon.imageUrl;

      modal.appendChild(closeButtonElement);
      
      modal.appendChild(titleElementElement);
      modal.appendChild(contentElementh);
      modal.appendChild(contentElementt);
      modal.appendChild(closeButtonElement);
      modal.appendChild(imageElement);
      pokemonContainer.appendChild(modal);

    pokemonContainer.classList.add("is-visible");
    
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pokemonContainer.classList.contains('is-visible')) {
          hideModal();
     }
  });

      pokemonContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === pokemonContainer) {
          hideModal();
        }
      });
        
  
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      hideModal: hideModal,
    };

   })();
  
  
  pokemonRepository.loadList().then(function () {
    
    pokemonRepository.getAll().forEach(function (pokemon) {
      pokemonRepository.addListItem(pokemon);
    });
  });
  
// email validation and password
  //function validateEmail() {
    //let value = emailImput.value;
    //let hasAtSign = value.indexOf("@") > -1;
    //let hasDot = value.indexOf(".") > -1;
    //return value && hasAtSign && hasDot;
  //}
  
  //function validatePassword() {
    //  let value = passwordImput.value;
      //return value && value.lenght >=8;
  //}


 // let message = document.querySelector('.message');

  //let showLoadingMessage = document.querySelector('.show-loading-message');
  
  //let hideLoadingMessage = document.querySelector('.hide-loading-message');
  
  //showLoadingMessage.addEventListener('submit', function(event){
    //message.classList.add('visible');
    //event.target.classList.remove('visible');
    //hideLoadingMessage.classList.add('visible');
 
//});
  
//hideLoadingMessage.addEventListener('submit', function(){
  // message.classList.remove('visible');
    //event.target.classList.remove('visible');
    //showLoadingMessage.classList.add('visible');
  //});


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
