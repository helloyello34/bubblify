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
import DeliveryCheckout from './DeliveryCheckout/DeliveryCheckout.js'
import DeliveryStore from './DeliveryStore/DeliveryStore.js'
import { BubbleProvider } from '../context/BubbleContext/BubbleContext'
import { BundleProvider } from '../context/BundleContext/BundleContext'
import BubbleServices from '../services/BubbleServices/BubbleServices'
import ReviewOrder from './ReviewOrder/ReviewOrder';
import Success from './Success/Success.js'

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
                total: 0,
                setCart: (data, total) => {
                    this.setState({
                        cart: {
                            ...this.state.cart,
                            total: total,
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
            cart: { ...this.state.cart, total: this.state.cart.total + item.price, bubbles: arr },
        })
    }

    addBundleToCartHandler = (bundle) => {
        var arr = this.state.cart.bubbles;
        let tempArr = [];
        let price = this.state.cart.total;
        for (let i = 0; i < bundle.items.length; i++) {
            tempArr.push(this.state.bubbles.data[bundle.items[i] - 1]);
            price += this.state.bubbles.data[bundle.items[i] - 1].price
        }
        arr = [...arr, ...tempArr];
        this.setState({
            bubbles: this.state.bubbles,
            bundles: this.state.bundles,
            cart: { ...this.state.cart, total: price, bubbles: arr }
        })
    }

    removeFromCartHandler = (id) => {
        // Remove from the cart

        var arr = this.state.cart.bubbles;
        var total = this.state.cart.total - this.state.cart.bubbles[id].price;
        if (arr.length > -1) {
            arr.splice(id, 1);
        }

        this.setState({
            bubbles: { ...this.state.bubbles },
            bundles: { ...this.state.bundles },
            cart: { ...this.state.cart, total: total, bubbles: arr }
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
            this.state.cart.setCart(myCart.bubbles, myCart.total);
        }
    }

    render() {
        return (
            <BubbleProvider value={this.state.bubbles}>
                <BundleProvider value={this.state.bundles}>
                    <div>
                        <Navbar cartCount={this.state.cart.bubbles.length} />
                        <div className="container">
                            <Route exact path="/" component={Home} />
                            <Route path="/home" render={() => <Redirect to="/" />} />
                            <Route exact path="/bubbles"
                                render={(routeProps) => (
                                    <Bubbles {...routeProps} {...this.props} addToCart={this.addToCartHandler} />
                                )} />
                            <Route exact path="/bubbles/:id"
                                render={(routeProps) => (
                                    <ProductDetail {...routeProps} {...this.props} addToCart={this.addToCartHandler} />
                                )} />
                            <Route exact path="/bundles"
                                render={(routeProps) => (
                                    <Bundle {...routeProps} {...this.props} addToCart={this.addBundleToCartHandler} />
                                )} />
                            <Route exact path="/bundles/:id"
                                render={(routeProps) => (
                                    <BundleDetail {...routeProps} {...this.props} addToCart={this.addBundleToCartHandler} />
                                )} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/checkoutdelivery"
                                render={() => (
                                    <DeliveryCheckout cartItems={this.state.cart} />
                                )} />
                            <Route exact path="/checkout"
                                render={() => (
                                    <DeliveryStore cartItems={this.state.cart} />
                                )} />
                            <Route exact path="/cart"
                                render={(routeProps) => (
                                    <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCartHandler} />
                                )} />
                        </div>
                    </div>
                </BundleProvider>
            </BubbleProvider>
        );
    }
};

export default App;
