import Character from "../Character/Character"


function CharacterList({ characters }) {
    return (
        <ul aria-label='characterList'>
            {characters.map((character) => {
                return (
                    <li key={character.name}>
                        <Character character={character} />
                    </li>
                )
            })}
        </ul>
    )
}

export default CharacterList;