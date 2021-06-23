import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import CatalogPage from "./Pages/CatalogPage/CatalogPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage}/>
      <Route path="/catalog" exact component={CatalogPage}/>
    </BrowserRouter>
  );
}

export default App;
