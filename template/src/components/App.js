import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import Home from './Home/Home'
import Bubbles from './Bubbles/Bubbles'
import About from './About/About'
import Bundle from './Bundle/Bundle'
import Cart from './Cart/Cart'
import Navbar from './Navbar/Navbar'
import ProductDetail from './ProductDetail/ProductDetail'
import BundleDetail from './BundleDetail/BundleDetail'
import { BubbleProvider } from '../context/BubbleContext/BubbleContext'
import { BundleProvider } from '../context/BundleContext/BundleContext'
import BubbleServices from '../services/BubbleServices/BubbleServices'

class App extends React.Component {

    constructor() {
        super();
        //localStorage.clear();
        this.state = {
            bubbles: {
                data: [],
                setBubbles: data => {
                    this.setState({
                        bubbles: {
                            ...this.state.bubbles,
                            data: data
                        }
                    });
                }
            },
            bundles: {
                data: [],
                setBundles: data => {
                    this.setState({
                        bundles: {
                            ...this.state.bundles,
                            data: data
                        }
                    });
                }
            },
            cart: {
                bubbles: [],
                setCart: data => {
                    this.setState({
                        cart: {
                            ...this.state.cart,
                            bubbles: data
                        }
                    })
                }
            }
        }
    }

    addToCartHandler = (item) => {
        //setState of cart and save to localStorage

        var arr = this.state.cart.bubbles;
        arr = [...arr, item];
        this.setState({
            bubbles: this.state.bubbles,
            bundles: this.state.bundles,
            cart: { ...this.state.cart, bubbles: arr },
        })
    }

    removeFromCartHandler = (id) => {
        // Remove from the cart

        var arr = this.state.cart.bubbles;

        if(arr.length > -1) {
            arr.splice(id, 1);
        }

        this.setState({
            bubbles: {...this.state.bubbles},
            bundles: {...this.state.bundles},
            cart: {...this.state.cart, bubbles: arr}
        });
    }

    componentDidUpdate() {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    componentDidMount() {
        BubbleServices.getAllBubbles().then(res => {
            this.state.bubbles.setBubbles(res);
        });
        BubbleServices.getAllBundles().then(res => {
            this.state.bundles.setBundles(res);
        });
        var myCart = JSON.parse(localStorage.getItem('cart'));
        if (myCart != null) {
            this.state.cart.setCart(myCart.bubbles);
        }
    }

    render() {
        return (
            <BubbleProvider value={this.state.bubbles}>
                <BundleProvider value={this.state.bundles}>
                    <div>
                        <Navbar length={this.state.cart.bubbles.length} />
                        <div className="container">
                            <Route exact path="/" component={Home} />
                            <Route path="/home" render={() => <Redirect to="/" />} />
                            <Route exact path="/bubbles"
                                render={(routeProps) => (
                                    <Bubbles {...routeProps} {...this.props} addToCart={this.addToCartHandler} />
                                )} />
                            <Route exact path="/cart"
                                render={(routeProps) => (
                                    <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCartHandler} />
                                )} />
                            <Route exact path="/bubbles/:id" component={ProductDetail} />
                            <Route exact path="/bundles" component={Bundle} />
                            <Route exact path="/bundles/:id" component={BundleDetail} />
                            <Route exact path="/about" component={About} />
                        </div>
                    </div>
                </BundleProvider>
            </BubbleProvider>
        );
    }
};

export default App;
