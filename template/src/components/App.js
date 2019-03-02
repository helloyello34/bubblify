import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import Home from './Home/Home'
import Bubbles from './Bubbles/Bubbles'
import About from './About/About'
import Bundle from './Bundle/Bundle'
import Cart from './Cart/Cart'
import Navbar from './Navbar/Navbar'
import ProductDetail from './ProductDetail/ProductDetail'


const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Route exact path="/" component={ Home } />
                <Route path="/home" render={ () => <Redirect to="/" /> } />
                <Route exact path="/bubbles" component={ Bubbles } />
                <Route exact path="/bubbles/:id" component={ ProductDetail } />
                <Route exact path="/bundles" component={ Bundle } />
                {/* <Route exact path="/bundles/:id" component={ Bundle } /> */}
                <Route exact path="/about" component={ About } />     

                <Route exact path="/cart" component={ Cart } />
            </div>
        </div>
    )
};

export default App;
