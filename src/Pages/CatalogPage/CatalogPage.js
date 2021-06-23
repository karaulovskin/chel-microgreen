import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import PlantaeList from "../../components/PlantaeList/PlantaeList";
import Counter from "../../components/Counter/Counter";

function CatalogPage() {
  return (
    <div className="App">
      <Header/>
      <PlantaeList/>
      <Counter/>
    </div>
  );
}

export default CatalogPage;
