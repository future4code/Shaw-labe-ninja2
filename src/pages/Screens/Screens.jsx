import React from 'react';
import HomeScreen from '../HomeScreen/HomeScreen';
import Cart from '../Cart/Cart';
import {ScreensContainer} from './style'


//LOGICA DE TROCA DE TELA AQUI

//TELAS HOMESCREEN (PRINCIPAL)
//      CART (CARRINHO)


export default class Screens extends React.Component {

	state= {
		page:"HomeScreen",
		paymentMethodoCart: []
	}

	setPaymentMethodoCart = (id, payMeth) => {
		const arrayPayMeht = [...this.state.paymentMethodoCart]
		arrayPayMeht.push({
			id: id,
			paymentMethodo: payMeth
		})
		this.setState({
			paymentMethodoCart:arrayPayMeht
		})
	}

	choosePage = () => {
		switch(this.state.page){

			case "Cart":
			return <Cart changePage ={this.changePage} paymentMethodo = {this.state.paymentMethodoCart} />

			case "HomeScreen":
			return  <HomeScreen changePage ={this.changePage} setPaymentMethodoCart = {this.setPaymentMethodoCart}/>
		
			default:
			return <HomeScreen changePage ={this.changePage} setPaymentMethodoCart = {this.setPaymentMethodoCart}/>
		}

	}

	changePage = (screen) => {
		this.setState({page:screen})
	}
	

	render() {

		return (
			<ScreensContainer>
				{this.choosePage()}
			</ScreensContainer>
		)

	}

}
