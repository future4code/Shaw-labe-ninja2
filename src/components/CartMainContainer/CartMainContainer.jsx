import React from 'react';
import { Button, Main } from './style';
import { getAllJobs } from '../../services/requests';
import ProductOnCartCard from '../ProductOnCartCard/ProductOnCartCard';




export default class CartMainContainer extends React.Component {

	state = {
		products: [
			{
				id: "",
				title: "",
				description: "",
				price: 40,
				paymentMethods: [
					"",
				],
				dueDate: "",
				taken: false
			}
		]
	}

	//Mostra produtos no carrinho quando é rodado a primeira vez.
	componentDidMount() {
		getAllJobs(this.getProduct)
	}

	//Pega os produtos salvos na API e guarda no state.
	getProduct = (product) => {
		this.setState({ products: product })
	}

	onClickBuy = () => {
		this.setState({ product: "" })
	}

	render() {

		//Mapeia os produtos e filtra apenas os com valores de 'taken = true'
		let productsList = []

		if (this.state.products.length > 0) {
			productsList = this.state.products.map((product) => {
				return product
			}).filter((product) => {
				return (product.taken === true)
			});
			}
		//Renderiza informações dos produtos selecionados no carrinho.
			let renderCards = productsList.map(() => {
				return <ProductOnCartCard/>
			})

		return (
			<Main>
				{renderCards}
				<button onClick={this.onClickBuy} >Concluir Compra</button>
			</Main>
		)

	}

}