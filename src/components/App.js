import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then(res => res.json())
      .then(data => setPets(data))
  }, [])

  const onChangeType = (e) => {
    setFilters(e.target.value)
  }  
  
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} setPets={setPets} filters={filters}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
