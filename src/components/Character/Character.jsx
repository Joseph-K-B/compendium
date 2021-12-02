

function Character({ character }) {
    const { name, birthYear, species, homeworld, starships } = character

    return (
        <article aria-label='character'>
            <h2>{name}</h2>
            <p>{birthYear}</p>
            <p>{species}</p>
            <p>{homeworld}</p>
            <p>{starships}</p>
        </article>
    )
}

export default Character