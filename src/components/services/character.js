import { munger } from "../utils/helper"


export const fetchCharacters = async () => {
    // const charachterList = await Promise.all(
    const fetchedCharacters = await fetch('https://swapi.dev/api/people/')
    const charachterData = await fetchedCharacters.json()
    console.log('CHARACHTER DATA', charachterData)
    let charachterList= await charachterData.results.map((data) => {
        return data;
    })
    // );
    return charachterList
}