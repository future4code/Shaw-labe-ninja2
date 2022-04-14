import React from 'react';
import { FilterStyle, List } from './style';
import { getAllJobs } from '../../services/requests';
import JobCard from '../JobCard/JobCard';


export default class Filter extends React.Component {

	state = {
		jobs: [],
		jobsFiltered: [],
		query: "",
		minPrice: "",
		maxPrice: "",
		sortingParameter: "title",
		order: "asc",
	}


	componentDidMount = () => {
		getAllJobs(this.saveDate)
		this.props.filteredJobs(this.state.jobsFiltered)
	}

	componentDidUpdate = (prevProps,prevState) => {
		if(prevState.jobsFiltered !== this.state.jobsFiltered){
			this.props.filteredJobs(this.state.jobsFiltered)	
		}
	}

	saveDate = (data) => {
		this.setState({
			jobs: data, jobsFiltered: data
		})
	}

	updateQuery = (event) => {
		this.setState({
			query: event.target.value
		})
		this.filterJobs()
	}

	updateMinPrice = (event) => {
		this.setState({
			minPrice: event.target.value
		})
		this.filterJobs()
	}

	updateMaxPrice = (event) => {
		this.setState({
			maxPrice: event.target.value
		})
		this.filterJobs()
	}

	updateSortingParameter = (event) => {
		this.setState({
			sortingParamete: event.target.value
		})
		this.filterJobs()
	}

	updateOrder = (event) => {
		this.setState({
			order: event.target.value
		})
		this.filterJobs()
	}

	filterJobs = () => {
		this.setState({
			jobsFiltered: this.state.jobs
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
		})
	}



	render() {

		return (

			<FilterStyle FilterStyle>

				<input
					placeholder="search"
					value={this.state.query}
					onChange={this.updateQuery}

				/>

				<input
					type='number'
					placeholder="Min Price"
					value={this.state.minPrice}
					onChange={this.updateMinPrice}

				/>

				<input
					type='number'
					placeholder="Max Price"
					value={this.state.maxPrice}
					onChange={this.updateMaxPrice}

				/>


				<span>
					<label for="sort">Ordination</label>
					<select
						name='sort'
						value={this.state.sortingParameter}
						onChange={this.upSortingParameter}
					>
						<option value="title">Title</option>
						<option value="Price">Price</option>
						<option value="dueDate">Term</option>
					</select>

					<select
						name='order'
						value={this.state.order}
						onChange={this.updateOrder}
					>
						<option value={1}>Crescents</option>
						<option value={-1}>Decreasing</option>

					</select>
				</span>


				<>
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
							.map(job => {
								return <JobCard key={job.id} id={job.id} />
							})} 

					</List>

				</>
			</FilterStyle>
		)
	}
}
