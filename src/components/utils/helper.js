
export const characterMunger = (character) => {
    return {
        name: (character.name),
        birthYear: (character.birth_year),
        eyeColor: (character.eye_color),
        height: (character.height),
        mass: (character.mass),
        // speciesId: (character.species.map((item) => item.slice(-2))),
        // homeworld: (character.homeworld.slice(-2)),
        // starships: (character.starships.map((item) => item))
    };
};

export const planetMunger = (planet) => {
    return {
        name: (planet.name),
        // residents: (planet.residents)
    };
};

export const speciesMunger = (species) => {
    return {
        name: (species.name),        
    };
};