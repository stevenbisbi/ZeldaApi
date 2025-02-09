export function ZeldaCard({ object }) {
  return (
    <div>
      <img src={object.image} alt="iamgen" />
      <p>{object.id}</p>
      <p>{object.name}</p>
      <p>{object.category}</p>
      <p>{object.description}</p>
    </div>
  );
}
