import React from 'react';
import './assets/css/App.css'
import Kanbanboard from './Kanbanboard';

function App(props) {
    return (
        <div id='App' className={'App'}>
            <Kanbanboard />
        </div>
    );
}

export default App;
