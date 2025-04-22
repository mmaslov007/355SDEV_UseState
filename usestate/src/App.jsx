import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";
import { useState } from "react"; // imported useState

// first element: current state
// second element: function used to update the current state
// ...restaurants is being passed to the function as a new array using the spread operator
function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);
  
  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState}/>
    </div>
  );
}

export default App;
