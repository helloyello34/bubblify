import React from 'react'
import axios from 'axios'

export default class componentName extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            product: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3500/api/bundles')
        .then(res => {
            console.log(res);
            let res_data = res.data.map(data => data);
            this.setState({
                product: res_data
            })
        });
    };

    render() {
        console.log(this.state.product)
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }
}
