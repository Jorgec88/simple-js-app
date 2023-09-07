

let pokemonList = [
{ 
    name: 'Bulbasaur',
    type: ['grass' , 'poison'],
    height: 2.04,
    weight: 15.2,
    category: 'seed'
},
{
    name: 'Charizard',
    type: ['fire' , 'flying'],
    height: 5.07,
    weight: 199.5,
    category: 'flame'
},
{
    name: 'Alakazam',
    type: ['psychic'],
    height: 4.11,
    weight: 105.8,
    category: 'psi'
},
{
    name: 'Articuno',
    type: ['ice' , 'flying'],
    height: 5.07,
    weight: 122.1,
    category: 'freeze'
},
{
    name: 'Pikachu',
    type: ['electric'],
    height: 1.04,
    weight: 13.2,
    category: 'mouse'   
},
{
    name: 'Larvitar',
    type: ['rock' , 'ground'],
    height: 2.0,
    weight: 158.7,
    category: 'rock skin'
},
{
    name: 'Dragonite',
    type: ['dragon' , 'flying'],
    height: 7.03,
    weight: 463,
    category: 'dragon' 
}

]

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height <6 && pokemonList[i].height >0.6){
      document.write("<div>" + pokemonList[i].name + pokemonList[i].height + "" + "</div>)");
    
    }else {
      document.write("<div>" + pokemonList[i].name + pokemonList[i].height + " Wow, that its Big!" + "</div>");
    }
  }