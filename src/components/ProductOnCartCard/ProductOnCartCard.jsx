import React from 'react';
import { MainCardContainer, CardStyle } from './style';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeJobFromCart } from '../../services/requests'

export default class ProductOnCartCard extends React.Component {

	render() {

		return (
			<MainCardContainer>
				<CardStyle>
					<div>
						<h1>{this.props.titleCard}</h1>
					</div>

					<div>
						<h2>Preço R$: {this.props.priceCard.toFixed(2)}</h2>
						<h3>Forma de Pagamento: {this.props.paymentCard}</h3>
					</div>

					<div>
						<DeleteIcon sx={{ fontSize: '35px', cursor: 'pointer' }} onClick={() => deleteJob(this.props.keyCard)} />
					</div>
				</CardStyle>
			</MainCardContainer>
		)
	}
}