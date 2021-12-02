import { munger } from "../utils/helper"


export const fetchCharacters = async () => {
    const fetchedCharacters = await fetch('https://swapi.dev/api/people/')
    const characterData = await fetchedCharacters.json()
    const characterMap = await characterData.results.map((data) => 
         munger(data)
    )

    console.log('CHARACHTER DATA', characterMap)
    return characterMap;   
}
