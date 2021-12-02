

function Character({ character }) {
    const { name, birthYear, eyeColor, mass, height, species, homeworld, starships } = character

    return (
        <article aria-label='character'>
            <h2>{name}</h2>
            <p>D.O.B.:{birthYear}</p>
            <p>eye-color:{eyeColor}</p>
            <p>mass:{mass}</p>
            <p>height:{height}</p>
            {/* <a href={`${species}`}>species</a>
            <a href={homeworld}>homeworld</a>
            <a href={starships}>starships</a> */}
        </article>
    )
}

export default Character