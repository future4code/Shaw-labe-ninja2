import React from 'react';
import { MainCardContainer, CardStyle, CardDetail } from './style';
import DeleteIcon from '@mui/icons-material/Delete';
import deleteJob from '../../services/requests'


let showOnScreen = false;

export default class ProductOnCartCard extends React.Component {

	state = {
		productCard: []
	}

	/* 	selectedProducts = (product) => {
			this.setState({ productList: product })
		}
	 */
	render() {

		/* let showOnScreen = this.state.productList.map((products) => {
			if (showOnScreen = !showOnScreen) {
				return (
					<CardStyle key={products.id} >
						{products.title}, {products.description}, {products.price}, {products.paymentMethods}
					</CardStyle>
				)
			}
		}) */

		return (
			<MainCardContainer>
				<CardStyle>
					<h2>Informações do Produto</h2>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi debitis fuga, voluptatum ipsum quaerat voluptas atque accusamus ad, in nemo, porro inventore maiores labore modi delectus necessitatibus. Eligendi, voluptates optio?</p>
					<DeleteIcon sx={{ fontSize: '35px', cursor: 'pointer' }} onClick={() => this.deleteJob()} />
				</CardStyle>
			</MainCardContainer>
		)

	}

}