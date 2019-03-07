import React, { Component } from 'react';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import { Route, Redirect } from 'react-router-dom'
import ReviewOrder from '../ReviewOrder/ReviewOrder.js';
import PropTypes from 'prop-types'

class DeliveryCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                telephone: '',
                city: '',
                address: '',
                postalCode: ''
            },
            errors: {
                nameError: '',
                telephoneError: '',
                cityError: '',
                addressError: '',
                postalCodeError: ''
            },
            isValid: false
        };
    }

    componentDidMount() {
        var user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            this.setState({
                fields: user,
            });
        }

    }

    componentWillUnmount() {
        this.setState({
            isValid: false
        });
    }


    validateForm() {
        const { name, address, telephone, city, postalCode } = this.state.fields;
        const errors = {};
        //Gera betri validation
        if (name === '') { errors.nameError = 'Full name is required'; }
        if (city === '') { errors.cityError = 'City is required'; }
        if (address === '') { errors.addressError = 'Address is required'; }
        if (!telephone.match(/[0-9]{7}/)) { errors.telephoneError = 'Telephone number is invalid'; }
        if (!postalCode.match(/[0-9]{3}/)) { errors.postalCodeError = 'Postal code is required'; }


        if (Object.keys(errors).length > 0) {
            this.setState({ ...this.state.errors, errors });
            return false;
        }
        return true;
    }
    onChange(e) {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    };

    submitForm(e) {
        e.preventDefault();
        if (!this.validateForm()) {
        } else {
            this.setState({
                fields: this.state.fields,
                errors: this.state.errors,
                isValid: true
            })
            localStorage.setItem('user', JSON.stringify(this.state.fields));
        }
    }

    render() {
        const { name, address, telephone, city, postalCode } = this.state.fields;
        const { nameError, telephoneError, cityError, addressError, postalCodeError } = this.state.errors;
        if (this.state.isValid) {
            return <Route to='/review'
                render={() => (
                    <ReviewOrder telephoneNumber={telephone} cartItems={this.props.cartItems} emptyCart={this.props.emptyCart} />
                )} />
        } else {
            return (
                <div>
                    <Form onSubmit={e => this.submitForm(e)}>
                        <Input
                            type="text"
                            name="name"
                            value={name}
                            htmlId="name"
                            label="Full name"
                            errorMessage={nameError}
                            onChange={e => this.onChange(e)}
                        />
                        <Input
                            type="text"
                            name="city"
                            value={city}
                            htmlId="city"
                            label="City"
                            errorMessage={cityError}
                            onChange={e => this.onChange(e)}
                        />
                        <Input
                            type="text"
                            name="address"
                            value={address}
                            htmlId="address"
                            label="Address"
                            errorMessage={addressError}
                            onChange={e => this.onChange(e)}
                        />
                        <Input
                            type="text"
                            name="postalCode"
                            value={postalCode}
                            htmlId="postalCode"
                            label="Postal Code"
                            errorMessage={postalCodeError}
                            onChange={e => this.onChange(e)}
                        />
                        <Input
                            type="text"
                            name="telephone"
                            value={telephone}
                            htmlId="telephone"
                            label="Phonenumber"
                            errorMessage={telephoneError}
                            onChange={e => this.onChange(e)}
                        />
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </Form>
                </div>
            );
        }
    }
}

DeliveryCheckout.propTypes = {
    cartItems: PropTypes.object,
    emptyCart: PropTypes.func
}

export default DeliveryCheckout;
