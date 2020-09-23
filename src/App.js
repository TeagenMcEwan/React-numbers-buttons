import React, { useState } from 'react';
import './App.css';



function App() {
    const [value,setValue] = useState(0)

    return (
        <div>
        <h1>Webpages with React</h1>
        <h2>Exercise 1 - Numbers and Buttons</h2>
        <h3>My value is</h3>
        <p>{value}</p>
        <button onClick={() => {
            setValue(value +1)
        }}>Increase</button>
        <button onClick={() => {
            setValue(value -1)
        }}>Decrease</button>
        </div>
    );
}

export default App;