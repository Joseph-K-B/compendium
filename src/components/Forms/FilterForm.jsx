

function FilterForm({planets, filterChange, selectedPlanet}) {
    return (
        <section>
            <div>
            <h3>Filter by homeworld</h3>
            <select 
                value={selectedPlanet} 
                onChange={(e) => filterChange(e.target.value)}
            >
                <option value='main' key='main'>main</option>
                {planets.map(({name}) => (
                    <option value={name} key={name}>{name}</option>
                ))}
            </select>
            </div>
        </section>
    )
}

export default FilterForm