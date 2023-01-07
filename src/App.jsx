import React from 'react';
import './App.css';
import Calendar1 from './Calendar1';
import Calendar2 from './Calendar2';

function App() {

    return (
        <div className="App">
            <Calendar1 />
            <Calendar2 />
            <div className='calendar' />
        </div>
    );
}

export default App;
