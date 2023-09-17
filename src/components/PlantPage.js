import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setSearchItem }) {
  return (
    <main>
      <NewPlantForm />
      <Search setSearchItem={setSearchItem} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
