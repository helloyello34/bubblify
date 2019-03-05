import React from 'react'
import PropTypes from 'prop-types'
import BubbleServices from '../../services/BubbleServices/BubbleServices'

class BundleDetail extends React.Component {

	constructor(props) {
		super(props);
		const {id} = props.match.params;
		console.log(id);
		this.state = {
				id: id,
				bundle: []
		};
	}

	componentDidMount() {
		BubbleServices.getBundleById(this.state.id).then(res => {
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

BundleDetail.propTypes = {
	id: PropTypes.string.isRequired
}

export default  BundleDetail;
