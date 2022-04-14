import React from 'react'; 
import { getAllJobs } from '../../services/requests';
import JobCard from '../JobCard/JobCard'
import {CardContainerMain} from './style'



export default class CardContainer extends React.Component {

	//chama todos os jobs necessarios
	//state = {
		//jobs: this.props.jobs, 
	//}

	//funcao de atualizar a lista de jobs
	// updateJobs = (jobsList) => 
	// {
	// 	this.setState({jobs: jobsList})
	// }

	//assim que montar o componente atualizar jobs
	//componentDidMount() {
		//getAllJobs(this.updateJobs)
	//}

	

	render() {

		console.log("My Jobs", this.props.jobs)

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