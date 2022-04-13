import React from 'react'; 
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import Promotions from '../Promotions/Promotions';
import CardContainer from '../CardContainer/CardContainer'
import { HomeScreenMainContainer } from './style';

//COMPONENTE PRINCIPAL DE HOME SCREEN
//RENDERIZA COMPONENTES <HEADER>, <PROMOTIONS>, <FILTER>, <CARDCONTAINER>


export default class HomeScreenMain extends React.Component {

	render() {

		return (
			<HomeScreenMainContainer>
				<Header/>
				<Promotions/> 
				<Filter/> 
				<CardContainer/>
				
			</HomeScreenMainContainer>
		)

	}
	
}