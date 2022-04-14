import React from 'react';
import JobCard from '../JobCard/JobCard'
import {CardContainerMain} from './style'



export default class CardContainer extends React.Component {

	render() {

		// console.log("My Jobs", this.props.jobs)
		// let displayJobs = this.props.jobs; 

		let displayJobs = this.props.jobs.map( (job) => {
			return (<JobCard key={job.id} id = {job.id}/>)
		})

		return (
			<CardContainerMain>
				{displayJobs}
			</CardContainerMain>
		)

	}
	
}