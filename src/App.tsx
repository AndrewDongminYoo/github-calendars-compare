import React from 'react';
import './App.css';
import Calendar1 from './Calendar2';
import Calendar2 from './Calendar1';
import Calendar3 from './Calendar3';

function App() {

    return (
        <div className="App">
            <div className='calendar' />
            <Calendar1 />
            <Calendar2 />
            <Calendar3 />
        </div>
    );
}

export default App;
