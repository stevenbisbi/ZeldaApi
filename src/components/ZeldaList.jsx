import { ZeldaCard } from "../components/ZeldaCard";
import { ModalZeldaCard } from "../components/ModalZeldaCard";
import React, { useState, useEffect } from "react";

export function ZeldaList({ api }) {
  const [creatures, setCreatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedObject, setSelectedObject] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await api;
      const sortedData = data.data.sort((a, b) => a.id - b.id);
      setCreatures(sortedData);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex gap-3 justify-content-center">
        {loading ? (
          <div className="d-flex justify-content-center w-100 my-5">
            <div className="spinner-border text-warning " role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          creatures.map((object) => (
            <ZeldaCard
              key={object.id}
              object={object}
              setSelectedObject={setSelectedObject}
            />
          ))
        )}
      </div>
      {/* Renderiza el modal fuera del mapeo para evitar múltiples instancias */}
      <ModalZeldaCard selectedObject={selectedObject} />
    </div>
  );
}
