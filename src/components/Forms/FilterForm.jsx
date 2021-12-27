

function FilterForm({
    // url,
    planets, 
    filterChange, 
    selectedPlanet
}) {
    return (
        <section>
            <div>
            <h3>Filter by homeworld</h3>
            <select 
                value={selectedPlanet} 
                onChange={(e) => filterChange(e.target.value)}
            >
                <option value='main' key='main'>main</option>
                {planets.map(({url, name}) => (
                    <option value={url} key={name}>{name}</option>
                ))}
            </select>
            </div>
        </section>
    )
}

export default FilterForm