import React from 'react';
import BubbleServices from '../../services/BubbleServices/BubbleServices'
import Form from '../Form/Form'
import Input from '../Input/Input'
import {Link, Route} from 'react-router-dom'

class OldOrders extends React.Component {
    constructor(props) {
        const {currentCart} = props;
        console.log(currentCart);
        super(props);
        this.state = {
            currCart: currentCart,
            oldorders: [],
            telephoneError: '',
            telephone: ''
        }
    }

    submitForm(e) {
        e.preventDefault();
            BubbleServices.getOrders(this.state.telephone).then(res => {
                this.setState({
                    oldorders: res
                });
            })
    }

    onChange(e) {
        this.setState({
            telephone: e.target.value
        });
    }

    // setOrder(e, order) {
    //     e.preventDefault();
    //     this.setState({
    //         currCart: {...this.state.currCart, bubbles: }
    //     })
    //     localStorage.setItem('cart', JSON.stringify(order.cart));
    //     return <Route to='/cart'
    //         render={() => (
    //             <Cart cartItems={order.cart} />
    //         )} />
    // }


    render() {
        const {telephone, oldorders} = this.state;
        return (
            <div>
                <Form onSubmit={e => this.submitForm(e)}>
                    <Input
                        type="text"
                        name="telephone"
                        value={telephone}
                        htmlId="telephone"
                        label="Enter telephone number"
                        onChange={e => this.onChange(e)}
                    />
                    <input type="submit" value="get orders" />
                </Form>
                {
                    oldorders.map((order, index) => {
                        console.log(order);
                        return (<div>
                                <Link to="/cart" bubbles={order.cart.bubbles} total={order.cart.total}>{`get order no.${index}`}</Link>
                            </div>)
                    })
                }
            </div>
        );
    }
}

export default OldOrders;
