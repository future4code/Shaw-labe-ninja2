import React from 'react';
import { MainCardContainer, CardStyle } from './style';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteJob } from '../../services/requests'

export default class ProductOnCartCard extends React.Component {

	state = {
		jobsTaken: []
	}

	/* componentDidMount() {
		deleteJob(this.jobsTaken.id)
	} */

	componentDidMount() {
		this.updateState()
	}

	removeCardCat = (id) => {
		deleteJob(this.state.jobsTaken.id)
	}

	updateState = (props) => {
		this.setState({ jobsTaken: props })
	}

	render() {

		/* let cardComponents = this.props.jobsTaken.map((item) => {
			return <CardStyle key={item.id} title={item.title} price={item.price} />
		}) */

		return (
			<MainCardContainer>
				<CardStyle>
					<DeleteIcon sx={{ fontSize: '35px', cursor: 'pointer' }} onClick={() => this.removeCardCat()} />
				</CardStyle>
			</MainCardContainer>
		)
	}
}