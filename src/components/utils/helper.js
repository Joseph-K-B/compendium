
export const characterMunger = (character) => {
    return {
        name: (character.name),
        birthYear: (character.birth_year),
        eyeColor: (character.eye_color),
        height: (character.height),
        mass: (character.mass),
        species: (character.species.map((item) => item)),
        homeworld: (character.homeworld),
        starships: (character.starships.map((item) => item))
    }
}

export const speciesMunger = (species) => {
    return {
        name: (species.name),        
    }
}