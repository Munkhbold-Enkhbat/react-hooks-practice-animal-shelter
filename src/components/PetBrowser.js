import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, setPets, filters}) {
  // console.log(filters)

  const renderAllPets = () => {
    
    const filteredPets = pets.filter(pet => {
      if(filters.type === 'all') {
        return pet
      } else {
        return pet.type === filters
      }      
    })

    return filteredPets.map(pet => {
      return <Pet key={pet.id} pet={pet}/>
    })
  }

  return <div className="ui cards">
    {renderAllPets()}
  </div>;
}

export default PetBrowser;
