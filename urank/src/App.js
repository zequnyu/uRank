import React from 'react';

import Body from  './components/Body'
import Header from './components/Header'
import Navbar from './components/Navbar'

import './App.css';


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <Body/>
        </div>
    )
}

export default App;
