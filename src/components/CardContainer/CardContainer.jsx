import React from 'react';
import JobCard from '../JobCard/JobCard'
import {CardContainerMain} from './style'
import {updateJob} from '../../services/requests'



export default class CardContainer extends React.Component {



	
	render() {

		let displayJobs = this.props.jobs.map( (job) => {
			return (<JobCard 
				key={job.id} 
				id = {job.id}
				title = {job.title}
				description = {job.description}
				dueDate = {job.dueDate}
				price = {job.price}
				paymentMethods = {job.paymentMethods}
				taken = {job.taken}
				processCardClick = {(id, takenStatus)=> this.props.cardClicked(id, takenStatus)}
				/>)
		})

		return (
			<CardContainerMain>
				{displayJobs}
			</CardContainerMain>
		)

	}
	
}