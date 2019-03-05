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
            }
        }
    }

    componentDidMount() {
        BubbleServices.getAllBubbles().then(res => {
            console.log('setting result to bubbles');
            this.state.bubbles.setBubbles(res);
        });
        BubbleServices.getAllBundles().then(res => {
            console.log('setting result to bundle');
            this.state.bundles.setBundles(res);
        });
    }

    render() {
        return (
            <BubbleProvider value={this.state.bubbles}>
                <BundleProvider value={this.state.bundles}>
                    <div>
                        <Navbar />
                        <div className="container">
                            <Route exact path="/" component={Home} />
                            <Route path="/home" render={() => <Redirect to="/" />} />
                            <Route exact path="/bubbles" component={Bubbles} />
                            <Route exact path="/bubbles/:id" component={ProductDetail} />
                            <Route exact path="/bundles" component={Bundle} />
                            <Route exact path="/bundles/:id" component={BundleDetail} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/cart" component={Cart} />
                        </div>
                    </div>
                </BundleProvider>
            </BubbleProvider>
        );
    }
};

export default App;
