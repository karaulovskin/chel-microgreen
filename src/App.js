import "./App.css";

import Header from "./components/Header/Header";
import PlantaeList from "./components/PlantaeList/PlantaeList";
import Hero from "./components/Hero/Hero";
import Counter from "./components/Counter/Counter";


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <PlantaeList />
            <Counter />
        </div>
    );
}

export default App;
