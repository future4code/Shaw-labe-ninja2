import React from 'react';
import { FilterStyle } from './style';

export default class Filter extends React.Component {


		render() {
	
			return (
				
				<FilterStyle>
					SOU O FILTRO
				</FilterStyle>
			)
	
		}
		
	}
	
	

/*	 state = {
		jobs: jobList,
		query: "",
		minPrice:"",
		maxPrice:"",
		sortingParameter:"title",
		order:"asc",
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
			sortingParamete: event.target.value
		})
	}

	updateOrder = (event) => {
		this.setState({
			order: event.target.value
		})
	}
	render() {

		return <>

		export funcion Filter(props){
			return
				<input
					placeholder="search"
					value={props.query}
					onChange={this.updateQuery}

				/>

				<input
					type='number'
					placeholder="Min Price"
					value={props.minPrice}
					onChange={this.updateMinPrice}

				/>

				<input
					type='number'
					placeholder="Max Price"
					value={props.maxPrice}
					onChange={this.updateMaxPrice}

				/>


			<span>
			<label for="sort">Ordination</label>
				<select 
				name='sort'	
				value={props.sortingParameter}
				onChange={this.upSortingParameter}
				>
					<option value="title">Title</option>
					<option value="Price">Price</option>
					<option value="dueDate">Term</option>
				</select>

				<select 
				name='order'	
				value={props.order}
				onChange={this.updateOrder}
				>
					<option value={1}>Crescents</option>
					<option value={-1}>Decreasing</option>
				
				</select>
			</span>


				<filter>
					<List>
						{this.state.jobs
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


						.sort((currentJob,nextJob) =>{
							switch (this.state.sortingParameter){
								case "title":
									return this.state.order * currentJob.title.localeCompare(nextJob.title)

								case "dueDate":
									return this.state.order * (new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime())
								default:
									return this.state.order * (currentJob.price - nextJob.price)
							}
						})
						.map(job =>{
							return <Card key={job.id} job={job} />
					})}

				</List>
	
				</filter>
}*/
