import React, { useState } from 'react';
import './App.css';



function App() {
    const [value,setValue] = useState(0)

    return (
        <div>
        <h1>My value is</h1>
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