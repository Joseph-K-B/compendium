import { useEffect, useState } from "react";
import CharacterList from "../../CharacterList/CharacterList";
import Controls from "../../Controls/Controls";
import { fetchCharacters, fetchSpecies } from "../../services/character";


function Compendium() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [species, setSpecies] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState('')

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

    useEffect(() => {
        const getSpecies = async () => {
            const speciesList = await fetchSpecies();
            setSpecies(speciesList);
        };
        getSpecies();
    }, []);

    return (
        <section>
            <main>
                <Controls 
                species={species}
                selectedSpecies={selectedSpecies}                
                filterChange={setSelectedSpecies}
                />
                {loading ? (<h1>Loading...</h1>) : (
                    <CharacterList characters={characters}/>
                )}
            </main>
        </section>
    );
}

export default Compendium;