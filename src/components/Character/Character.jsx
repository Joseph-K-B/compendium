

function Character({ character }) {
    const { 
        name, 
        birthYear, 
        eyeColor, 
        mass, 
        height 
    } = character

    return (
        <article aria-label='character'>
            <h2>{name}</h2>
            <p>D.O.B.:{birthYear}</p>
            <p>eye-color:{eyeColor}</p>
            <p>mass:{mass}</p>
            <p>height:{height}</p>
        </article>
    )
}

export default Character