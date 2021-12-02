

function FilterForm({species, filterChange, selectedSpecies}) {
    return (
        <section>
            <h3>Filter by species</h3>
            <select value={selectedSpecies} onChange={(e) => filterChange(e.target.value)}>
                {species.map(({name}) => (
                    <option value={name} key={name}>{name}</option>
                ))}
            </select>
        </section>
    )
}

export default FilterForm