import React from "react";
import { ThemeProvider } from 'styled-components';
import "../../App.css";
import { Header, Hero, Catalog } from "../../components";
import { Button } from "../../ui/components";
import { theme } from "../../ui/components/Button/styles";

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
