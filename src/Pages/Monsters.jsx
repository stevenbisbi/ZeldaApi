import { ZeldaCard } from "../components/ZeldaCard";
import React, { useState, useEffect } from "react";
import { MonstersApi } from "../Api/monsters.api";

export function Monsters() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await MonstersApi();
      const sortedData = data.data.sort((a, b) => a.id - b.id);
      setCreatures(sortedData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">Monsters</h1>
      <div className="container d-flex flex-wrap gap-3">
        {creatures.map((creature) => (
          <ZeldaCard key={creature.id} object={creature} />
        ))}
      </div>
    </div>
  );
}
