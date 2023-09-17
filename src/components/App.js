import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [allPlants, setPlants] = useState([]);
  const [searchIterm, setSearchItem] = useState("");
 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch((error) => {
        console.error(error);
      });
    
  }, [])  

  const plants = allPlants.filter((item) =>
  item.name.toLowerCase().includes(searchIterm.toLowerCase())
);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} searchIterm={searchIterm} setSearchItem={setSearchItem} />
    </div>
  );
}

export default App;
