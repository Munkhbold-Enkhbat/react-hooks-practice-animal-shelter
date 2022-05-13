import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  console.log(pets)
  const renderPets = () => {
    return pets.map(pet => {
      return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet}/>
    })
  }

  return <div className="ui cards">
    {renderPets()}
  </div>;
}

export default PetBrowser;
