import React from 'react'  
import axios from 'axios'

class BundleDetail extends React.Component {

	constructor(props) {
		super(props);
		console.log(props);    
		this.state = {
				bundleId: props.match.params.id,
				bundle: []
		};
	}

	componentDidMount() {
		axios.get('http://localhost:3500/api/bundles/' + this.state.bundleId)
		.then(res =>{
			console.log(res.data);
			this.setState({
				bundle: res.data
			})
		});
	}

	render() {
		return (
			<div>
				<h1>{this.state.bundle.name}</h1>
			</div>
		);
	}

};

export default  BundleDetail;