import React, { useState, useEffect } from "react";
import { ZeldaCard } from "../components/ZeldaCard";
import { ModalZeldaCard } from "../components/ModalZeldaCard";
import { Pagination } from "../components/Pagination";

export function ZeldaList({ api }) {
  const [creatures, setCreatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedObject, setSelectedObject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 44;

  useEffect(() => {
    async function fetchData() {
      const data = await api;
      const sortedData = data.data.sort((a, b) => a.id - b.id);
      setCreatures(sortedData);
      setLoading(false);
    }
    fetchData();
  }, [api]);

  // Calcular los objetos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = creatures.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid">
      {currentPage != 1 ? (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={creatures.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : (
        <div> hola</div>
      )}

      <div className="row d-flex gap-3 justify-content-center">
        {loading ? (
          <div className="d-flex justify-content-center w-100 my-5">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        ) : (
          currentItems.map((object) => (
            <ZeldaCard
              key={object.id}
              object={object}
              setSelectedObject={setSelectedObject}
            />
          ))
        )}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={creatures.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {/* Renderiza el modal fuera del mapeo para evitar múltiples instancias */}
      <ModalZeldaCard selectedObject={selectedObject} />
    </div>
  );
}
