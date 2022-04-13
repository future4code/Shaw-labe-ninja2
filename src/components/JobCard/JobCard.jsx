import React from 'react'; 
import { getJobById } from '../../services/requests';
import { Card } from './style';
import { Typography } from '@mui/material'; 
import { Button } from '@mui/material';





export default class JobCard extends React.Component {

	state = {
		job: [], 
	}


	saveJob = (job) => {
		this.setState({job: job})
	}

	componentDidMount(){
		getJobById(this.props.id, this.saveJob)
	}

	//receive id as props

	//jobs have 
	// title
	// description
	// dueDate
	// price
	// payment methods
	// taken


	render() {

		return (
			<Card>
				
				<Typography><h3>{this.state.job.title}</h3></Typography>
				<Typography><p>{this.state.job.description}</p></Typography>
				<Typography><p>{this.state.job.dueDate}</p></Typography>
				<Typography><p>{this.state.job.price} R$</p></Typography>
				<Typography><p>{this.state.job.paymentMethods}</p></Typography>
				<Button variant = "contained" color = "secondary"  >Contratar</Button>
				
				
				
			</Card>
		)

	}
	
}