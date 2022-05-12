import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets }) {
  const renderPets = () => {
    return pets.map(pet => {
      return <Pet key={pet.id} pet={pet}/>
    })
  }

  return <div className="ui cards">
    {renderPets()}
  </div>;
}

export default PetBrowser;
