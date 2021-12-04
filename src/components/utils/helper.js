
export const characterMunger = (character) => {
    return {
        name: (character.name),
        birthYear: (character.birth_year),
        eyeColor: (character.eye_color),
        height: (character.height),
        mass: (character.mass),
        homeworld: (character.homeworld)
    };
};

export const planetMunger = (planet) => {
    return {
        url: (planet.url),
        name: (planet.name),
    };
};

export const speciesMunger = (species) => {
    return {
        name: (species.name),        
    };
};