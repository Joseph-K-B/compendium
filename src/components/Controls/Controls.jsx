import React from 'react';
import FilterForm from '../Forms/FilterForm';

function Controls({
    planets,
    selectedPlanet,
    filterChange
}) {
    return(
        <div>
            <FilterForm 
            planets={planets} 
            filterChange={filterChange} 
            selectedPlanet={selectedPlanet}
            />
        </div>
    )
}

export default Controls