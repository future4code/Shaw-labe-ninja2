import React from 'react';
import HomeScreen from '../HomeScreen/HomeScreen';
import Cart from '../Cart/Cart';
import Footer from '../../components/Footer/Footer';
import { ScreensContainer } from './style'

//LOGICA DE TROCA DE TELA AQUI

//TELAS HOMESCREEN (PRINCIPAL)
//      CART (CARRINHO)





export default class Screens extends React.Component {

	render() {

		return (
			<ScreensContainer>
				<HomeScreen />{/* OU  <Cart/>  */}
				<Cart />
				<Footer />
			</ScreensContainer>
		)

	}

}
