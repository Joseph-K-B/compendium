import { useEffect, useState } from "react";
import CharacterList from "../../CharacterList/CharacterList";
import { fetchCharacters } from "../../services/character";


function Compendium() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState(true);

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

    return (
        <section>
            <main>
                {loading ? (<h1>Loading...</h1>) : (
                    <CharacterList characters={characters}/>
                )}
            </main>
        </section>
    );
}

export default Compendium;