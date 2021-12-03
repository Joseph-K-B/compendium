import { useEffect, useState } from "react";
import CharacterList from "../../CharacterList/CharacterList";
import Controls from "../../Controls/Controls";
import { fetchCharacters, fetchPlanets, fetchResidents, fetchSpecies } from "../../services/character";


function Compendium() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [residents, setResidents] = useState([]);
    // const [species, setSpecies] = useState([]);
    // const [selectedSpecies, setSelectedSpecies] = useState('')
    const [selectedPlanet, setSelectedPlanet] = useState('main')

    // if(characters !== 0) {
        useEffect(() => {
            const getCharacters = async () => {
                const characterList = await fetchCharacters();
                setCharacters(characterList);
                setLoading(false)
            };
            getCharacters();
        }, []);
    // }

    // useEffect(() => {
    //     const getSpecies = async () => {
    //         const speciesList = await fetchSpecies();
    //         setSpecies(speciesList);
    //     };
    //     getSpecies();
    // }, []);

    useEffect(() => {
        const getPlanets = async () => {
            const planetsList = await fetchPlanets();
            setPlanets(planetsList);
        };
        getPlanets();
    }, []);

    useEffect(() => {
        const getResidents = async () => {
            const residentList = await fetchResidents();
            setResidents(residentList);
        };
        getResidents();
    }, []);

    return (
        <section>
            <main>
                <Controls 
                planets={planets}
                selectedPlanets={selectedPlanet}
                filterChange={setSelectedPlanet}
                />
                {loading ? (<h1>Loading...</h1>) : (
                    <CharacterList characters={characters}/>
                )}
            </main>
        </section>
    );
}

export default Compendium;