let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  
    function add(pokemon) {
      if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "detailsUrl" in pokemon 
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
        pokemonRepository.loadDetails(item).then(function() {
            console.log(item);
  
            let pokemonContainer = document.querySelector("#modal-container");
            pokemonContainer.innerHTML = "";
  
            let modal = document.createElement("div");
            modal.classList.add("modal");
  
            let closeButtonElement = document.createElement("button");
            closeButtonElement.classList.add("modal-close");
            closeButtonElement.innerText = "close";
            closeButtonElement.addEventListener("click", hideModal);
  
            let titleElement = document.createElement("h1");
            titleElement.innerText = item.name;
  
            let contentElementh = document.createElement("p");
            contentElementh.innerText = "Height: " + item.height;
  
            let contentElementt = document.createElement("p");
            contentElementt.innerText = "Types: " + item.types.map(t => t.type.name).join(', ');
  
            let imageElement = document.createElement("img");
            imageElement.src = item.imageUrl;
  
            modal.appendChild(closeButtonElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElementh);
            modal.appendChild(contentElementt);
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
        });
    }
  
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
  
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
  });
  
  
  
  