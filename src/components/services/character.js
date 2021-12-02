import { characterMunger, speciesMunger } from "../utils/helper"


export const fetchCharacters = async () => {
    const res = await fetch('https://swapi.dev/api/people/')
    const characterData = await res.json();
    const characterMap = await characterData.results.map((data) => 
         characterMunger(data)
    )

    return characterMap;   
}

export const fetchSpecies = async () => {
    const res = await fetch('https://swapi.dev/api/species/');
    const speciesData = await res.json();
    const speciesMap = await speciesData.results.map((item) => 
    speciesMunger(item)
    )
    console.log('SPECIES DATA', speciesMap)
    return speciesMap;
}

export const fetchHomeworldId = async (id) => {
    const res = await fetch('https://swapi.dev/api/homeworld/2/')
    const homeworldData = await res.json()
    console.log('HOMEWORLD', homeworldData)
    return homeworldData
}
