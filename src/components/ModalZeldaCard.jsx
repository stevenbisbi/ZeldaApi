import React from "react";

export function ModalZeldaCard({ selectedObject }) {
  return (
    // This is the modal that will be displayed when a card is clicked
    <div
      className="modal fade border-warning"
      id="modalZeldaCard"
      tabIndex="-1"
      aria-labelledby="modalZeldaCardLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5 text-center"
              id="modalZeldaCardLabel"
            >
              {selectedObject?.name}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="">
            <div className="modal-body">
              {selectedObject ? (
                <>
                  <div className="text-center">
                    <img
                      src={selectedObject.image}
                      alt={selectedObject.name}
                      className="img-fluid mb-3 text-center"
                    />
                  </div>
                  <p className="text-white">
                    {"#"}
                    {selectedObject.id}
                  </p>
                  <p>
                    <strong>Category:</strong> {selectedObject.category}
                  </p>
                  <p>
                    <strong>Description:</strong> {selectedObject.description}
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <strong>Common locations:</strong> <br />
                          {selectedObject?.common_locations?.length > 0
                            ? selectedObject.common_locations.join(", ")
                            : "No common locations"}
                        </p>
                      </div>
                      <div className="col-6">
                        {selectedObject?.drops ? (
                          <p>
                            <strong>Drops:</strong> <br />
                            {selectedObject?.drops?.length > 0
                              ? selectedObject.drops.join(", ")
                              : "No drops available"}
                          </p>
                        ) : selectedObject?.properties ? (
                          <>
                            <strong>Properties:</strong> <br />{" "}
                            <p>Attack : {selectedObject.properties.attack} </p>
                            <p>Defense : {selectedObject.properties.defense}</p>
                          </>
                        ) : selectedObject?.hearts_recovered ||
                          selectedObject.cooking_effect ? (
                          <>
                            <strong>Hearts recovered:</strong> <br />
                            <p>
                              {selectedObject.hearts_recovered} hearts recovered
                            </p>
                            <strong>Cooking effect:</strong> <br />
                            <p>{selectedObject.cooking_effect}</p>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <p>Cargando...</p>
              )}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning "
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
