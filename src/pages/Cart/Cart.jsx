import React from 'react'; 
import Header from '../../components/Header/Header';
import CartMainContainer from '../../components/CartMainContainer/CartMainContainer';
import Footer from '../../components/Footer/Footer';
import { CartStyle } from './style';

//CART SCREEN IMPORTS HEADER, CARTMAINCONTAINER, FOOTER


export default class Cart extends React.Component {

	render() {

		return (
			<CartStyle>
				<Header
				buttonContent = {"Loja"}
				handleButton = {this.props.changePage}
				changePage = {this.props.changePage}
				page= {"Cart"}
				/>
				<CartMainContainer
					paymentMethodo = {this.props.paymentMethodo}
				/> 
				<Footer/>
			</CartStyle>
		)

	}
	
}