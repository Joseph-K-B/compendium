import { characterMunger, planetMunger } from "../utils/helper"



export const fetchCharacters = async () => {
    const res = await fetch('https://swapi.dev/api/people/');
    const characterData = await res.json();
    const characterMap = await characterData.results.map((item) => 
         characterMunger(item));

    return characterMap;   
}

export const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets/');
    const planetData = await res.json();
    const planetMap = await planetData.results.map((item) => 
        planetMunger(item));
    return planetMap;
}

export const fetchHomeworld = async (homeworld) => {
    
    const res = await fetch(homeworld);
    const homeworldData = await res.json();
    const homeworldMap = await homeworldData.residents.map((item) =>
    item);        
    return homeworldMap;    
}

       
export const fetchResidents = async (arr) => {
    const characters = [];
    arr.map(async (item) => {
        const res = await fetch(item);
        const homeworldData = await res.json();
        const charInfo = characterMunger(homeworldData);
        characters.push(charInfo);
    });
    console.log('CHARACTERS', characters);
    return characters;
}

// export const fetchSpecies = async () => {
//     const res = await fetch('https://swapi.dev/api/species/');
//     const speciesData = await res.json();
//     const speciesMap = await speciesData.results.map((item) => 
//         speciesMunger(item));

//     return speciesMap;
// }

