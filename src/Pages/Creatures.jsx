import { ZeldaCard } from "../components/ZeldaCard";
import React, { useState, useEffect } from "react";
import { CreaturesApi } from "../Api/creatures.api";

export function Creatures() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await CreaturesApi();
      setCreatures(data.data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container d-flex flex-wrap gap-3">
      {creatures.map((creature) => (
        <ZeldaCard key={creature.id} object={creature} />
      ))}
    </div>
  );
}
