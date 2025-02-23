import { ZeldaCard } from "../components/ZeldaCard";
import React, { useState, useEffect } from "react";
import { MaterialsApi } from "../Api/materials.api";

export function Materials() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await MaterialsApi();
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
