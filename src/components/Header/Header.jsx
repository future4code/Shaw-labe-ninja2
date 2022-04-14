import React from 'react';
import logo from '../../assets/logo.png'
import { HeaderContainer, ButtonsContainer, Button } from './style'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

//RECEBE PROPS DE RENDERIZAÇÃO 
//Depende se for HomeScreen ou Cart



export default class Header extends React.Component {

	render() {

		return (
			<HeaderContainer>
				<img src={logo} alt={'logo'} />
				<ButtonsContainer>
					<Button onClick={this.props.handleButton}>{this.props.buttonContent}</Button>
					{
						this.props.page === 'home' ?
							<span></span>
							:
							<ShoppingCartIcon sx={{ fontSize: '35px', cursor: 'pointer' }} />
					}
				</ButtonsContainer>
			</HeaderContainer>
		)

	}

}