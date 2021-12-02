import React from 'react';
import FilterForm from '../Forms/FilterForm';

function Controls({
    name,
    species,
    selectedSpecies,
    filterChange
}) {
    return(
        <div>
            <FilterForm species={species} filterChange={filterChange} selectedSpecies={selectedSpecies}/>
        </div>
    )
}

export default Controls