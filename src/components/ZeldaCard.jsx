export function ZeldaCard({ object }) {
  return (
    <div className="card bg-transparent px-5 py-5 my-1 custom-max-width text-align-center border-info">
      <img src={object.image} alt="imagen" />
      <div className="card-body">
        <p>{object.id}</p>
        <h2>{object.name}</h2>
        <p>{object.category}</p>
        <p>{object.description}</p>
      </div>
    </div>
  );
}
