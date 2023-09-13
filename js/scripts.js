
let pokemonRepository = (function () {
let repository = [
{ 
    name: "Bulbasaur",
    type: ["grass" , "poison"],
    height: 2.04,
    weight: 15.2,
    category: "seed"
},
{
    name: "Charizard",
    type: ["fire" , "flying"],
    height: 5.07,
    weight: 199.5,
    category: "flame"
},
{
    name: "Alakazam",
    type: ["psychic"],
    height: 4.11,
    weight: 105.8,
    category: "psi"
},
{
    name: "Articuno",
    type: ["ice" , "flying"],
    height: 5.07,
    weight: 122.1,
    category: "freeze"
},
{
    name: "Pikachu",
    type: ["electric"],
    height: 1.04,
    weight: 13.2,
    category: "mouse"   
},
{
    name: "Larvitar",
    type: ["rock" , "ground"],
    height: 2.0,
    weight: 158.7,
    category: "rock skin"
},
{
    name: "Dragonite",
    type: ["dragon" , "flying"],
    height: 7.03,
    weight: 463,
    category: "dragon" 
},

];

 function add(pokemon) {
    if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "type" in pokemon &&
        "weight" in pokemon &&
        "category" in pokemon 
        ) {
        repository.push(pokemon);
    } else {
        console.log("incorrect pokemon");
    }
}
 function getAll(){
        return repository;
    }
 function addListItem(pokemom) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener("click", function(event){
         showDetails(pokemon);
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);  
    }
function showDetails(pokemon) {
 console.log(pokemon);
}  
 }
return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
     };
    
 })();


pokemonRepository.add({ name: "charmander", type: ["psychic"],
height: 4.11, weight: 105.8, category: "psi" });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
        
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