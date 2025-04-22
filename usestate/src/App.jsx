import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";
import { useState } from 'react';

const [restaurantState, setRestaurants] = useState([...restaurants]);

function App() {
  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState}/>
    </div>
  );
}

export default App;
