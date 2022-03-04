import { useEffect, useState } from "react";
import "./App.css";

export interface Starships {
  count: number;
}

function App(): JSX.Element {
  const [countShips, setCountShips] = useState<Number[]>();

  useEffect(() => {
    (async () => {
      const getStarShips = async () => {
        const response = await fetch("http://swapi.dev/api/starships/");
        const starships = await response.json();
        return starships;
      };
      const ships = await getStarShips();
      setCountShips(ships.count);
    })();
  }, []);

  return (
    <div className="App">
      <div id="background-container">
        <header id="header-title">Star Wars Test</header>
        <main id="main-container">
          <h2>Starships:</h2>
          <p id="total-ships">Total ships: {countShips} </p>

          <h2>Starships by class:</h2>
        </main>
      </div>
    </div>
  );
}

export default App;
