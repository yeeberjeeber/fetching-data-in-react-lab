import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = ({ starships }) => {
  if (starships.length === 0) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h2>Starships</h2>
      <ul>
        {starships.map((starship, index) => (
          <StarshipCard key={index} starship={starship} />
        ))}
      </ul>
    </section>
  );
};

export default StarshipList;