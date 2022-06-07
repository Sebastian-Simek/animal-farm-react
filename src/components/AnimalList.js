export default function Animal({ name, type, says }) {
  return <div>
    <p>{name}</p>
    <p>{type}</p>
    <p>{says}</p>
    <img src={`/animals/${type}.svg`} />  
  </div>;
}