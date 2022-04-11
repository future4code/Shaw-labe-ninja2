import React from 'react'; 
import Header from '../../components/Header/Header';
import CartMainContainer from '../../components/CartMainContainer/CartMainContainer';

//CART SCREEN IMPORTS HEADER, CARTMAINCONTAINER, FOOTER


export default class Cart extends React.Component {

	render() {

		return (
			<div>
				<Header/> 
				<CartMainContainer/> 
				
			</div>
		)

	}
	
}