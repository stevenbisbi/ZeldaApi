export function ZeldaCard({ object, setSelectedObject }) {
  return (
    <div
      className="btn card bg-transparent px-5 pt-5 custom-max-width text-align-center border-info border-2 rounded-4"
      onClick={() => setSelectedObject(object)}
      data-bs-toggle="modal"
      data-bs-target="#modalZeldaCard"
    >
      <img
        src={object.image}
        alt="imagen"
        className="rounded-circle img-hover"
      />
      <div className="card-body body-hover">
        <p>{object.id}</p>
        <h2>{object.name}</h2>
      </div>
    </div>
  );
}
