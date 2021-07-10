import React from "react";
import "../../App.css";
import { Header, Catalog, Counter } from "../../components";

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
