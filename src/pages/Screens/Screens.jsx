import React from 'react';
import HomeScreen from '../HomeScreen/HomeScreen';
import Cart from '../Cart/Cart';
import {ScreensContainer} from './style'


//LOGICA DE TROCA DE TELA AQUI

//TELAS HOMESCREEN (PRINCIPAL)
//      CART (CARRINHO)


export default class Screens extends React.Component {

	state= {
		page:"HomeScreen"
	}

	choosePage = () => {
		switch(this.state.page){

			case "Cart":
			return <Cart changePage ={this.changePage}/>

			case "HomeScreen":
			return  <HomeScreen changePage ={this.changePage}/>
		
			default:
			return <HomeScreen changePage ={this.changePage}/>
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
