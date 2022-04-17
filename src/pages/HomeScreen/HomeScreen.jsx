import React from 'react'; 
import HomeScreenMain from '../../components/HomeScreenMain/HomeScreenMain';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


//IMPORT style from style.jsx in same folder




export default class HomeScreen extends React.Component {
	state = {
        showModal: false,
	}
	handleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	render() {

		return (
			<div>
				<Header
				buttonContent = {"Cadastrar Serviço"}
				handleButton = {this.handleModal}
				changePage = {this.props.changePage}
				page= {"HomeScreen"}
				/>
                <HomeScreenMain
				handleModal = {this.handleModal}
				showModal = {this.state.showModal}
				setPaymentMethodoCart = {this.props.setPaymentMethodoCart}
				/> 
				<Footer/>
			</div>
		)

	}
	
}