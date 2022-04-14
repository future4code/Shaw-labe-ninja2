import React from 'react';
import { MainCardContainer } from './style';




export default class ProductOnCartCard extends React.Component {

	deleteProduct = () => {

	}

	render() {

		return (
			<MainCardContainer>
				<button onClick={this.deleteProduct} >X</button>
			</MainCardContainer>
		)

	}

}