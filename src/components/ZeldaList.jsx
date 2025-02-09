import { ZeldaCard } from "../components/ZeldaCard";
import React, { useState, useEffect } from "react";
import { ZeldaApi } from "../Api/object.api";

export function ZeldaList() {
  const [creatures, setCreatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ZeldaApi();
      setCreatures(data.data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {creatures.map((creature) => (
        <ZeldaCard key={creature.id} object={creature} />
      ))}
    </div>
  );
}
