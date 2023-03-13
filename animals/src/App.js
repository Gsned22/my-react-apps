import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAmimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([]);

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    })
    return(
        <div className="app">
            <button onClick = {() => setAnimals([...animals, getRandomAmimal()])}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    )
}

export default App;