import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search-box/search-box.component";

function App() {
  const [monster, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  const filteredMonsters = monster.filter((monsters) =>
    monsters.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <Search
        placeholder="Search monster"
        handleChange={(e) => setSearchField(e.target.value)}
      />
      <CardList data={filteredMonsters} />
    </div>
  );
}

export default App;
