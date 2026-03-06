import { useState, useEffect } from "react";
import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch/StarshipSearch";
import StarshipList from "./components/StarshipList/StarshipList";

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);

  useEffect(() => {
    const fetchAllStarships = async () => {
      const data = await starshipService.show();
      setStarshipsData(data);
      setDisplayedStarships(data);
    };
    fetchAllStarships();
  }, []);

  const handleSearch = (term) => {
    const filteredResults = starshipsData.filter((ship) =>
      ship.name.toLowerCase().includes(term.toLowerCase()),
    );
    setDisplayedStarships(filteredResults);
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch
        fetchData={handleSearch}
        totalResults={displayedStarships.length}
      />
      <StarshipList starships={displayedStarships} />
    </main>
  );
};

export default App;