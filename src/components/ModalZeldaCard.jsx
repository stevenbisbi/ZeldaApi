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
          <div className="modal-body">
            {selectedObject ? (
              <>
                <img
                  src={selectedObject.image}
                  alt={selectedObject.name}
                  className="img-fluid mb-3"
                />
                <p>
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
                        <strong>Common locations:</strong>{" "}
                        {selectedObject?.common_locations?.length > 0
                          ? selectedObject.common_locations.join(", ")
                          : "No common locations"}
                      </p>
                      <p>
                        <strong>Drops:</strong>{" "}
                        {selectedObject?.drop?.length > 0
                          ? selectedObject.drop.join(", ")
                          : "No drops available"}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p>Cargando...</p>
            )}
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
