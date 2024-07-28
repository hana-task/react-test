import React from 'react';
import Home from './components/Home';
import ItemDetails from './components/ItemDetails';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/item/:id" element={<ItemDetails/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;