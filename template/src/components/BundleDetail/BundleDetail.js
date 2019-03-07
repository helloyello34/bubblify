import React from 'react'
import PropTypes from 'prop-types'
import BubbleServices from '../../services/BubbleServices/BubbleServices'
import { BubbleConsumer } from '../../context/BubbleContext/BubbleContext'
import BundleDetailItem from '../BundleDetailItem/BundleDetailtem.js'

class BundleDetail extends React.Component {

	constructor(props) {
		super(props);
		const { id } = props.match.params;
		this.state = {
			id: id,
			bundle: {
				id: 0,
				items: []
			},
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
			<React.Fragment>
				<div>
					<h1>{this.state.bundle.name}</h1>
				</div>
				<button type="button" className="btn btn-primary" onClick={() => this.props.addToCart(this.state.bundle)}>Add to cart</button>
				<BubbleConsumer>
					{
						BubbleContext => {
							return (
								BubbleContext.data.map(product => {
									if (this.state.bundle.items.indexOf(product.id) != -1) {
										return BundleDetailItem(product);
									}
								})
							)
						}
					}
				</BubbleConsumer>
			</React.Fragment>
		);
	}

};

export default BundleDetail;

BundleDetail.propTypes = {
	id: PropTypes.number
}
