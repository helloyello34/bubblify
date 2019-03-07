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
            },
            errors: {
                nameError: '',
                telephoneError: '',
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

        const { name, telephone } = this.state.fields;
        const { nameError, telephoneError } = this.state.errors;
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
                </Form>
            </div>
        );
    }
}

export default DeliveryCheckout;