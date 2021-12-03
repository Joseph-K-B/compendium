import { useEffect, useState } from "react";
import CharacterList from "../../CharacterList/CharacterList";
import Controls from "../../Controls/Controls";
import { fetchCharacters, fetchHomeworld, fetchPlanets, fetchResidents, fetchSpecies } from "../../services/character";
import { characterMunger } from "../../utils/helper";


function Compendium() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    // const [residents, setResidents] = useState([]);
    // const [species, setSpecies] = useState([]);
    // const [selectedSpecies, setSelectedSpecies] = useState('')
    const [selectedPlanet, setSelectedPlanet] = useState('main')

        useEffect(() => {
            const getCharacters = async () => {
                const characterList = await fetchCharacters();
                setCharacters(characterList);
                setLoading(false)
            };
            getCharacters();
        }, []);


    useEffect(() => {
        const getPlanets = async () => {
            const planetsList = await fetchPlanets();
            setPlanets(planetsList);
        };
        getPlanets();
    }, []);

    useEffect(() => {
        const getResidents = async () => {
            if(!selectedPlanet) return;
            setLoading(true);
            if (selectedPlanet !== 'main') {
            const residentList = await fetchHomeworld(selectedPlanet);
            const residentInfo = await residentList.map((item) => fetchResidents(item)
                .then(value => {
                    
                    setCharacters([value])
                    })
                )              
            console.log('AT USE EFFECT', residentList, residentInfo)
            // setCharacters(residentInfo);
            } else {
                const characterList = await fetchCharacters();
                setCharacters(characterList);
            }
            setLoading(false);
        };
        getResidents();
    }, [selectedPlanet]);

    return (
        <section>
            <main>
                <Controls 
                planets={planets}
                selectedPlanet={selectedPlanet}
                filterChange={setSelectedPlanet}
                />
                {loading ? (<h1>Loading...</h1>) : (
                    <CharacterList characters={characters} />
                )}
            </main>
        </section>
    );
}

export default Compendium;