import "./App.css";

import Header from "./components/Header/Header";
import image from "./images/01.jpg";
import PlantaeList from "./components/PlantaeList/PlantaeList";
import Hero from "./components/Hero/Hero";


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <PlantaeList />
        </div>
    );
}

export default App;
