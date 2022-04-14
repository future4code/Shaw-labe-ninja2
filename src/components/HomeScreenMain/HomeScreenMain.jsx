import React from 'react'; 
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import Promotions from '../Promotions/Promotions';
import CardContainer from '../CardContainer/CardContainer'
import RegisterJob from '../RegisterJob/RegisterJob';
import { HomeScreenMainContainer } from './style';

//COMPONENTE PRINCIPAL DE HOME SCREEN
//RENDERIZA COMPONENTES <HEADER>, <PROMOTIONS>, <FILTER>, <CARDCONTAINER>


export default class HomeScreenMain extends React.Component {
	state = {
        showModal: false,
	}
	handleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}
	render() {

		return (
			<HomeScreenMainContainer>
				<Header/>
				<Promotions/> 
				<Filter/> 
				<CardContainer/>
				{/* Só será mostrado quando clicado no botão que está no header */}
				<RegisterJob 
					handleModal = {this.handleModal}
					showModal = {this.state.showModal}
				/>
				
			</HomeScreenMainContainer>
		)

	}
	
}