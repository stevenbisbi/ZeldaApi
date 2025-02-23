import { ZeldaCard } from "../components/ZeldaCard";
import React, { useState, useEffect } from "react";
import { ZeldaApi } from "../Api/object.api";

export function ZeldaList() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ZeldaApi();
      const sortedData = data.data.sort((a, b) => a.id - b.id);
      setCreatures(sortedData);
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
