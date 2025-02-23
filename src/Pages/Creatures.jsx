import { ZeldaCard } from "../components/ZeldaCard";
import React, { useState, useEffect } from "react";
import { CreaturesApi } from "../Api/creatures.api";

export function Creatures() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await CreaturesApi();
      const sortedData = data.data.sort((a, b) => a.id - b.id);
      setCreatures(sortedData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center">Creatures</h1>
      <div className="container d-flex flex-wrap gap-3">
        {creatures.map((creature) => (
          <ZeldaCard key={creature.id} object={creature} />
        ))}
      </div>
    </div>
  );
}
