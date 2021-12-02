

export const fetchCharacters = async () => {
    const fetchCharacters = await fetch('https://swapi.dev/api/people/')
    const charachterData = await fetchCharacters.json()
    console.log('CHARACHTER DATA', charachterData)
    return charachterData
}