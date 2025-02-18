export function ZeldaCard({ object }) {
  return (
    <div className="card bg-transparent px-5 py-5 my-1 custom-max-width text-align-center">
      <img src={object.image} alt="imagen" />
      <p>{object.id}</p>
      <h2>{object.name}</h2>
      <p>{object.category}</p>
      <p>{object.description}</p>
    </div>
  );
}
