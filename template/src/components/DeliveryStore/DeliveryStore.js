import React, { Component } from 'react';
import Form from '../Form/Form.js';
import Input from '../Input/Input.js';
import { Route } from 'react-router-dom';
import ReviewOrder from '../ReviewOrder/ReviewOrder.js';

class DeliveryStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                telephone: '',
            },
            errors: {
                nameError: '',
                telephoneError: '',
            },
            isValid: false
        };
    }

    componentWillUnmount() {
        this.setState({
            isValid: false
        });
    }

    validateForm() {
        const { name, telephone } = this.state.fields;
        const errors = {};
        //Gera betri validation
        if (name === '') { errors.nameError = 'Full name is required'; }
        if (!telephone.match(/[0-9]{7}/)) { errors.telephoneError = 'Telephone number is invalid'; }


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
        const { name, telephone } = this.state.fields;
        const { nameError, telephoneError } = this.state.errors;

        if (this.state.isValid) {
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
                            name="telephone"
                            value={telephone}
                            htmlId="telephone"
                            label="Enter telephone"
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

export default DeliveryStore;
