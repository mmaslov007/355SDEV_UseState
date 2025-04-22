import { useState } from 'react'

function Restaurant(props) {
  const [hours, setHours] = useState(false); // defaults to false
  const [menu, setMenu] = useState(false); // defaults to false

  const handleHours = () => { 
    setHours((prev) => !prev); // toggle logic for hours current state
  };
  const handleMenu = () => {
    setMenu((prev) => !prev); // toggle logic for menu current state
  };

  // both buttons call onto their respective toggle functions to compare current states
  // and render if the state is set to 'true'
  // conditional logic below buttons to render menu map if useState is true
  // conditional logic to render restaurant hours if useState is true
  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}
      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;
