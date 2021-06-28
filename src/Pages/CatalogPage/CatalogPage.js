import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Catalog from "../../components/Catalog/Catalog";
import Counter from "../../components/Counter/Counter";

function CatalogPage() {
  return (
    <div className="App">
      <Header/>
      <Catalog/>
      <Counter/>
    </div>
  );
}

export default CatalogPage;
