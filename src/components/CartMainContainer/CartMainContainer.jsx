import React from 'react';
import { Main } from './style';




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
		this.getProduct()
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
		/* let productsList = this.state.products.map((product) => {
			return product
		}).filter((product) => {
			return (product.taken === true)
		}) */

		return (
			<Main>
				<h2>Sou o Carrinho</h2>
				{/* {productsList} */}
				<button onClick={this.onClickBuy} >Concluir Compra</button>
			</Main>
		)

	}

}