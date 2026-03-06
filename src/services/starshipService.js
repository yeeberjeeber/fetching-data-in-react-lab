const BASE_URL = `http://swapi.info/api/starships`;

export const show = async () => {
  try {
    
    const res = await fetch(BASE_URL);
    if (!res.ok) {
    // Throw an error if we get a response that doesn't 
    // hold valid starship data.
    throw new Error('Failed to fetch starships.');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
