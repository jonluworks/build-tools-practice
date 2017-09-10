import React from 'react';
import ReactDOM from 'react-dom';
import './app.styl'

const App = () => {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    )
};

const container = document.getElementById('container');


ReactDOM.render(<App/>, container);