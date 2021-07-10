import React from "react";
import { ThemeProvider } from 'styled-components';
import "../../App.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Catalog from "../../components/Catalog/Catalog";
import Button from "../../ui/components/Button/Button";

function HomePage() {
  return (
    <div className="App">
      <Button>Button</Button>
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
      <Header/>
      <Hero/>
      <h1>Все товары</h1>
      <Catalog/>
    </div>
  );
}

export default HomePage;
