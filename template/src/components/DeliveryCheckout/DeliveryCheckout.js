import React, { Component } from 'react';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import { Route, Redirect } from 'react-router-dom'
import ReviewOrder from '../ReviewOrder/ReviewOrder.js';

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


    validateForm() {
        const { name, address, telephone, city, postalCode } = this.state.fields;
        const errors = {};
        //Gera betri validation
        if (name === '') { errors.nameError = 'Full name is required'; }
        if (city === '') { errors.cityError = 'City is required'; }
        if (address === '') { errors.addressError = 'Address is required'; }
        if (telephone === '') { errors.telephoneError = 'Telephone is required'; }
        if (postalCode === '') { errors.postalCodeError = 'Postal code is required'; }


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
        }

    }

    render() {
        const { name, address, telephone, city, postalCode } = this.state.fields;
        const { nameError, telephoneError, cityError, addressError, postalCodeError } = this.state.errors;
        if (this.state.isValid) {
            console.log('telephone is', telephone);
            return <Route to='/review'
                render={() => (
                    <ReviewOrder telephoneNumber={telephone} cartItems={this.props.cartItems} />
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
                            label="Enter name"
                            errorMessage={nameError}
                            onChange={e => this.onChange(e)}
                        />
                        <Input
                            type="text"
                            name="city"
                            value={city}
                            htmlId="city"
                            label="Enter city"
                            errorMessage={cityError}
                            onChange={e => this.onChange(e)}
                        />
                        <Input
                            type="text"
                            name="address"
                            value={address}
                            htmlId="address"
                            label="Enter your address"
                            errorMessage={addressError}
                            onChange={e => this.onChange(e)}
                        />
                        <Input
                            type="text"
                            name="postalCode"
                            value={postalCode}
                            htmlId="postalCode"
                            label="Enter postalCode"
                            errorMessage={postalCodeError}
                            onChange={e => this.onChange(e)}
                        />
                        <Input
                            type="text"
                            name="telephone"
                            value={telephone}
                            htmlId="telephone"
                            label="Enter telephone number"
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

export default DeliveryCheckout;