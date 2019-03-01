import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Bubbles from './Bubbles/Bubbles';
import About from './About/About';
import Bundles from './Bundles/Bundles';
import Cart from './Cart/Cart';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Route exact path="/" component={ Home } />
                <Route path="/home" render={ () => <Redirect to="/" /> } />
                <Route exact path="/bubbles" component={ Bubbles } />
                <Route path="/bubbles/:id" component={ Bubbles } />
                <Route exact path="/bundles" component={ Bundles } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/cart" component={ Cart } />
            </div>
        </div>
    )
};

export default App;
