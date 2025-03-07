import React from "react";

export function ModalZeldaCard({ selectedObject }) {
  return (
    // This is the modal that will be displayed when a card is clicked
    <div
      className="modal fade border-warning"
      id="modalZeldaCard"
      tabIndex="-1"
      aria-labelledby="modalZeldaCardLabel"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="modalZeldaCardLabel">
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
                    />{" "}
                    <p>
                      <hr />
                    </p>
                  </div>
                  <p className="text-white">
                    {"#"}
                    {selectedObject.id}
                  </p>
                  <p>
                    <strong>Category:</strong> {selectedObject.category}
                  </p>
                  <p>
                    <strong>Description:</strong> {selectedObject.description}{" "}
                    <hr />
                  </p>
                  <div className="container">
                    <div className="row">
                      <div className="col-6">
                        <p className="d-flex flex-column text-center">
                          <strong>Common locations:</strong> <br />
                          {selectedObject?.common_locations?.length > 0
                            ? selectedObject.common_locations.map(
                                (common_location, index) => (
                                  <span key={index}>
                                    {common_location} <br />
                                  </span>
                                )
                              )
                            : "No common locations"}
                        </p>
                      </div>
                      <div className="col-6">
                        {selectedObject?.drops ? (
                          <p className="d-flex flex-column text-center">
                            <strong>Drops:</strong> <br />
                            {selectedObject?.drops?.length > 0
                              ? selectedObject.drops.map((drop, index) => (
                                  <span key={index}>
                                    {drop} <br />
                                  </span>
                                ))
                              : "No drops available"}
                          </p>
                        ) : selectedObject?.properties ? (
                          <p className="d-flex flex-column text-center">
                            <strong>Properties:</strong> <br />{" "}
                            <p>Attack : {selectedObject.properties.attack} </p>
                            <p>Defense : {selectedObject.properties.defense}</p>
                          </p>
                        ) : selectedObject?.hearts_recovered ||
                          selectedObject.cooking_effect ? (
                          <p className="d-flex flex-column text-center">
                            <strong>Hearts recovered:</strong> <br />
                            <p>
                              {selectedObject.hearts_recovered} hearts recovered
                            </p>
                            <strong>Cooking effect:</strong> <br />
                            {selectedObject.cooking_effect.length > 0 ? (
                              <p>{selectedObject.cooking_effect}</p>
                            ) : (
                              <p>No cooking effect available</p>
                            )}
                          </p>
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
