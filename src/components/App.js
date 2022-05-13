import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" }); 
  
  const onFindPetsClick = () => {    
    switch(filters.type) {      
      case 'all':
        fetch('http://localhost:3001/pets')
        .then(res => res.json())
        .then(data => setPets(data))
        break;
      case 'cat':
        fetch('http://localhost:3001/pets?type=cat')
        .then(res => res.json())
        .then(data => setPets(data))
        break;
      case 'dog':
        fetch('http://localhost:3001/pets?type=dog')
        .then(res => res.json())
        .then(data => setPets(data))
        break;
      case 'micropig':
        fetch('http://localhost:3001/pets?type=micropig')
        .then(res => res.json())
        .then(data => setPets(data))
        break;
      default:
        console.log("Sorry, we have no that kind of pets!")
    }
  }

  const onChangeType = (e) => {
    setFilters({ type: e.target.value })
  } 

  const onAdoptPet = (id) => {
    fetch(`http://localhost:3001/pets/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isAdopted: true
      })
    })
    const updatedPets = pets.map(pet => pet.id === id ? {...pet, isAdopted: true} : pet)
    setPets(updatedPets)    
  }
  
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
