import React from "react";
import "../../App.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Catalog from "../../components/Catalog/Catalog";

function HomePage() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <h1>Все товары</h1>
            <Catalog/>
        </div>
    );
}

export default HomePage;
