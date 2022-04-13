import React from 'react'; 
import HomeScreen from '../HomeScreen/HomeScreen';
import Cart from '../Cart/Cart';
import Footer from '../../components/Footer/Footer';
import {ScreensContainer} from './style'
import { List } from '@mui/material';
import Header from '../../components/Header/Header';

//LOGICA DE TROCA DE TELA AQUI

//TELAS HOMESCREEN (PRINCIPAL)
//      CART (CARRINHO)


export default class Screens extends React.Component {

	state= {
		page:"Cart"
	}

	choosePage = () => {
		switch(this.state.page){

			case "Cart":
			return <Cart />

			case "HomeScreen":
			return  <HomeScreen />
		
			default:
			return <HomeScreen />
		}

	}

	changePage = (screen) => {
		this.setState({page:screen})
	}
	

	render() {

		return (
			<ScreensContainer>
				<Header/> 
				<button onClick={() => this.changePage("Cart")}>Carrinho</button>
				<button onClick={() => this.changePage("HomeScreen")}>HomeScreen</button>
				{this.choosePage()}

				<Footer/>
			</ScreensContainer>
		)

	}
	
}
