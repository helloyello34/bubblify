import React from 'react'
import BubbleServices from '../../services/BubbleServices/BubbleServices'

class BundleDetail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
				bundleId: props.match.params.id,
				bundle: []
		};
	}

	componentDidMount() {
		BubbleServices.getBundleById(this.state.bundleId).then(res => {
			this.setState({
				bundle: res
			});
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
