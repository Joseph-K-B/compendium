import { characterMunger, planetMunger, speciesMunger } from "../utils/helper"



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

    console.log('PLANET MAP', planetMap);
    return planetMap;
    }

   export const fetchHomeworld = async (homeworld) => {
       
        const res = await fetch(homeworld);
        const homeworldData = await res.json();
        const homeworldMap = await homeworldData.residents.map((item) =>
        item);
        // const residentMap = await homeworldMap.map((item) =>
        //     fetchResidents(item))
        // const jsonHomeworld = await residentMap.json();
        // const characterMap = await residentMap.map((item) =>
        // characterMunger(item))
        
        console.log('FETCH HOMEWORLD', homeworldMap);
        return homeworldMap;
        
    }
    
// export const fetchResidents = async (url) => {
//     const res = await fetch(url);
//     const planetData = await res.json();
//     const residentMap = await planetData.residents.map((item) => 
//         fetchHomeworld(item).then(value => {
//         console.log('VALUE', value)
//         return value
//         })
//         );
    //     console.log('RESIDENTS', residentMap);
//     return residentMap
// }

        

export const fetchResidents = async (url) => {
    const res = await fetch(url);
    const homeworldData = await res.json();

    console.log('HOMEWORLD', characterMunger(homeworldData));
    return characterMunger(homeworldData);
    }

// export const fetchSpecies = async () => {
//     const res = await fetch('https://swapi.dev/api/species/');
//     const speciesData = await res.json();
//     const speciesMap = await speciesData.results.map((item) => 
//         speciesMunger(item));

//     return speciesMap;
// }

