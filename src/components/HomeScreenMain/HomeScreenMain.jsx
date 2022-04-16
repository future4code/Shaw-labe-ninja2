import React from 'react';
import Filter from '../Filter/Filter';
import Promotions from '../Promotions/Promotions';
import CardContainer from '../CardContainer/CardContainer'
import RegisterJob from '../RegisterJob/RegisterJob';
import { HomeScreenMainContainer } from './style';
import { getAllJobs } from '../../services/requests'
import { updateJob } from '../../services/requests'

//COMPONENTE PRINCIPAL DE HOME SCREEN
//RENDERIZA COMPONENTES <HEADER>, <PROMOTIONS>, <FILTER>, <CARDCONTAINER>


export default class HomeScreenMain extends React.Component {


	state = {
		jobs: [],
		query: "",
		minPrice: "",
		maxPrice: "",
		sortingParameter: "title",
		order: "asc",
		clicked: false,
		loading: true
	}

	componentDidMount() {
		getAllJobs(this.saveData, this.setTrue)
	}

	//guarda jobs no state
	saveData = (data) => {
		this.setState({
			jobs: data,
			loading: false
		})

	}
	setTrue = () => {
		this.setState({loading:true})
	}

	//FUNCAO DE PROCESSAR CARD CLICK, PARA MUDAR BOTAO DE CARD NO CARRINHO OU N
	processCardClick = (id, takenStatus) => {
		updateJob(id, takenStatus, this.saveData, this.setTrue);
		this.setState({ clicked: !this.state.clicked })

	}

	updateQuery = (event) => {
		this.setState({
			query: event.target.value
		})
	}

	updateMinPrice = (event) => {
		this.setState({
			minPrice: event.target.value
		})
	}

	updateMaxPrice = (event) => {
		this.setState({
			maxPrice: event.target.value
		})
	}

	updateSortingParameter = (event) => {
		this.setState({
			sortingParameter: event.target.value
		})
	}
	updateOrder = (event) => {
		this.setState({
			order: event.target.value
		})
	}
	render() {

		let jobsFiltered = [

		];

		if (this.state.jobs.length > 0) {
			jobsFiltered = this.state.jobs
				.filter(job => {

					return job.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
						job.description.toLowerCase().includes(this.state.query.toLowerCase())
				})

				.filter(job => {
					return this.state.minPrice === "" || job.price >= this.state.minPrice
				})

				.filter(job => {
					return this.state.maxPrice === "" || job.price <= this.state.maxPrice
				})

				.sort((currentJob, nextJob) => {
					switch (this.state.sortingParameter) {
						case "title":
							return this.state.order * currentJob.title.localeCompare(nextJob.title)
						case "dueDate":
							return this.state.order * (new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime())
						default:
							return this.state.order * (currentJob.price - nextJob.price)
					}
				})
		}

		return (
			<HomeScreenMainContainer>
				<Promotions 
				state = {this.state}
				/>
				
				<Filter
					updateQuery={this.updateQuery}
					updateMaxPrice={this.updateMaxPrice}
					updateMinPrice={this.updateMinPrice}
					updateSortingParameter={this.updateSortingParameter}
					updateOrder={this.updateOrder}
					query={this.state.query}
					minPrice={this.state.minPrice}
					maxPrice={this.state.maxPrice}
					sortingParameter={this.state.sortingParameter}
					order={this.state.order}
				/>
				<CardContainer
					jobs={jobsFiltered}
					cardClicked={(id, takenStatus) => this.processCardClick(id, takenStatus)}
					loading = {this.state.loading}
				/>
				{/* Só será mostrado quando clicado no botão que está no header */}
				<RegisterJob
					handleModal={this.props.handleModal}
					showModal={this.props.showModal}
					saveData = {this.saveData}
					setTrue = {this.setTrue}
				/>

			</HomeScreenMainContainer>
		)

	}

}