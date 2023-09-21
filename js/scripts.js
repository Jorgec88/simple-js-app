
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
      let pokemonList = 
      document.querySelector(".pokemon-list");
      let listpokemon = 
      document.createElement("li");
      let button = 
      document.createElement("button");
      listpokemon.classList.add("list-group-item");
      button.innerText = pokemon.name;

      function newItem() {

        let li = $('<li></li>');
        let inputValue = $('#input').val();
        li.append(inputValue);
    
        if(inputValue === '') {
            alert('you must write something!!');
        } else {
            $('#list').append(li);
        }
    
        li.on('dblclick', function crossOut() {
            li.toggleClass('strike');
        });
    
        let crossOutButton =$('<crossOutButton></crossOutButton>');
        crossOutButton.append(document.createTextNode('X'));
        li.append(crossOutButton);
    
        crossOutButton.on('click', deleteListItem);
        function deleteListItem() {
            li.addClass('delete')
        }
    
        $('#list').sortable();
    }
      
      button.classList.add("btn", "btn-primary", "btn-lg");
      button.setAttribute("data-target", "#exampleModal");
      button.setAttribute("data-toggle", "modal");
      listpokemon.appendChild(button);
      pokemonList.appendChild(listpokemon);
      button.addEventListener("click", function(event) {
        showDetails(pokemon);
      });
    }

    function showModal(pokemon) {
     let modalTitle = $(".modal-title");
     let modalBody = $(".modal-body");
     let modalHeader = $(".modal-header");

     modalTitle.empty();
     modalBody.empty();
}
  
  let nameElement = $('<h5 class= "modal-title">' + pokemon.name + '</h5>');
  let imageElement = $('<img class="modal-img">');
    imageElement.attr("src", pokemon.imageUrl);
    let heightElement = $("height : " + pokemon.height);
    let typesElement = $("Types: " + pokemon.types.join);    


    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    //function hideModal() {
      //  let pokemonContainer = 
        //document.querySelector("#modal-container");
        //pokemonContainer.classList.remove("is-visible");

    //}
  
   //console.log(item);
      
   // let pokemonContainer = 
    //document.querySelector("#modal-container");
     //pokemonContainer.innerHtml = "";

     //let modal = 
     //document.createElement("div");
      //modal.classList.add("modal");

      //let closeButtonElement = 
      //document.createElement("button");
      //closeButtonElement.classList.add("modal-close");
      //closeButtonElement.innerText = "close";
      //closeButtonElement.addEventListener("click", hideModal);

      //let titleElement = 
      //document.createElement("h1");
      //titleElement.innerText = item.name;

      //let contentElementh = 
      //document.createElement("p");
      //contentElement.innerText = "Height: " + item.height;

      //let contentElementt = 
      //document.createElement("p");
      //contentElement.innerText = "Types: " + item.types.map(t => t.type.name).join(', ');

      //let imageElement = 
      //document.createElement("img");
      //imageElement.src = item.imageUrl;

      
      //modal.appendChild(closeButtonElement);

      //modal.appendChild(titleElement);
      //modal.appendChild(contentElementh);
      //modal.appendChild(contentElementt);
      //modal.appendChild(imageElement);

      //pokemonContainer.appendChild(modal);

    //pokemonContainer.classList.add("is-visible");
    
    //window.addEventListener("keydown", (e) => {
      //  if (e.key === "Escape" && pokemonContainer.classList.contains("is-visible")) {
        //  hideModal();
     //}
  //});

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
      
      item.imageUrl = 
      details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showDetails(item) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon)

    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
   
    
  };
})();

pokemonRepository.loadList().then(function() {
    
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

      //pokemonContainer.addEventListener("click", (e) => {
        //let target = e.target;
        //if (target === pokemonContainer) {
          //hideModal();
        //}
      //});

    //});

  //}
        
  
   

   //})();
  
  
 
  
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
