import React, { Component } from 'react';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';

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
            }
        };
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
    }

    render() {
        console.log(this.state.fields.name);

        const { name, address, telephone, city, postalCode } = this.state.fields;
        const { nameError, telephoneError, cityError, addressError, postalCodeError } = this.state.errors;
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
                </Form>
            </div>
        );
    }
}

export default DeliveryCheckout;