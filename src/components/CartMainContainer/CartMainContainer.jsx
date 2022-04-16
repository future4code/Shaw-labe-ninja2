import React from 'react';
import { Main } from './style';
import { getAllJobs, updateJob, removeJobFromCart, deleteJob } from '../../services/requests';
import ProductOnCartCard from '../ProductOnCartCard/ProductOnCartCard';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

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
				taken: false,
				loading: true
			}
		], cartProducts: []
	}

	//Mostra produtos no carrinho quando é rodado a primeira vez.
	componentDidMount() {
		getAllJobs(this.getProduct, this.setTrue)
		this.deliverProduct()
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.products !== this.state.products) { this.deliverProduct() }
	}

	//Pega os produtos salvos na API e guarda no state.
	getProduct = (product) => {
		this.setState({ products: product })
	}

	removeProduct = (id) => 
	{
		removeJobFromCart(id, this.getProduct)
	}

	setTrue = () => {
		this.setState({ loading: true })
	}

	onClickBuy = () => {
		for (const elemento of this.state.cartProducts) {
			deleteJob(elemento.id, this.getProduct, this.setTrue)
		} 
		getAllJobs(this.getProduct, this.setTrue)

	}

	deliverProduct = () => {
		//Mapeia os produtos e filtra apenas os com valores de 'taken = true'
		let prodOnCart = this.state.products.map((product) => {
			return product
		}).filter((product) => {
			return (product.taken === true)

		});
		this.setState({ cartProducts: prodOnCart })
	}

	render() {

		if (this.state.products.length > 0) {
			//Renderiza informações dos produtos selecionados no carrinho.
			let renderCards = this.state.cartProducts.map((product) => {
				return <ProductOnCartCard 
										key={product.id}
										keyCard={product.id} 
										  titleCard={product.title} 
										  descCard={product.description} 
										  priceCard={product.price} 
										  paymentCard={product.paymentMethods} 
										  removeItem = {(id) => this.removeProduct(id)}
										  />
			})

			let showTotalValue = 0

			this.state.cartProducts.forEach((item) => {
				showTotalValue += item.price
			})

			return (
				<Main>
					{renderCards.length > 0 ? renderCards : <RemoveShoppingCartIcon sx={{ fontSize: '490px' }} />}
					<span>Total: R$ {showTotalValue.toFixed(2)}</span>
					<button onClick={this.onClickBuy} >Concluir Compra</button>
				</Main>
			)
		}
	}
}