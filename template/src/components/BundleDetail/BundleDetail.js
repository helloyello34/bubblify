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
			}
		};
	}

	componentDidMount() {
		BubbleServices.getBundleById(this.state.id).then(res => {
			console.log(res);
			this.setState({
				bundle: res
			});
		});
	}

	render() {
		return (
			<>
				<div>
					<h1>{this.state.bundle.name}</h1>
				</div>
				<BubbleConsumer>
					{
						BubbleContext => {
							return (
								BubbleContext.data.map(product => {
									if (this.state.bundle.items.indexOf(product.id) != -1) {
										//Veit ekki hvort það er 'ideal' að re-use productItem, annars bara bua til annan nanast eins component
										return BundleDetailItem(product);
									}
								})
							)
						}
					}
				</BubbleConsumer>
			</>
		);
	}

};
/*
BundleDetail.propTypes = {
	id: PropTypes.string.isRequired
}
*/
export default BundleDetail;
