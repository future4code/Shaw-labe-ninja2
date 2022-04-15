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
				<img src={logo} alt={'logo'} onClick={()=>this.props.changePage('HomeScreen')}/>
				<ButtonsContainer>
					{
						this.props.page === 'Cart' ?
							<Button onClick={()=>this.props.changePage('HomeScreen')}>{this.props.buttonContent}</Button>
							:
							<>
							<Button onClick={this.props.handleButton}>{this.props.buttonContent}</Button>
							<ShoppingCartIcon sx={{ fontSize: '35px', cursor: 'pointer' }} onClick ={()=>this.props.changePage('Cart')} />
							</>
					}
				</ButtonsContainer>
			</HeaderContainer>
		)

	}

}