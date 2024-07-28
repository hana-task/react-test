import React from 'react';
import Home from './components/Home';
import ItemDetails from './components/ItemDetails';
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/item/:id" element={<ItemDetails/>} />
            </Routes>
        </div>
    );
}

export default App;