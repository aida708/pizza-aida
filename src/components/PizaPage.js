export default function PizaPage(props) {
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <p>{props.price}</p>
    </li>
  );
}
