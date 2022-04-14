import React from 'react'; 
import { getJobById, updateJob } from '../../services/requests';
import { Card } from './style';
import { MenuItem, Typography } from '@mui/material'; 
import { Button } from '@mui/material';








export default class JobCard extends React.Component {

	state = {
		job: [], 
		taken: false,
	}


	saveJob = (job) => {
		this.setState({job: job, taken: job.taken})
	}

	componentDidMount(){
		getJobById(this.props.id, this.saveJob)
	}

	botarNoCarrinho = () => {
		updateJob(this.props.id, !this.state.job.taken)
		getJobById(this.props.id, this.saveJob)
	  }

	  componentDidUpdate(prevState)
	  {
		 
			  if(prevState.taken !== this.state.taken )
			  {
				  getJobById(this.props.id, this.saveJob)
			  }
		  
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
		//0-9
		let date;
		if(this.state.job.dueDate) 
		{
			date = this.state.job.dueDate.slice(0,10)
			
		}
		
		let pagamentos; 
		if (this.state.job.paymentMethods)
		{
			pagamentos = this.state.job.paymentMethods.map( (pagamento) => {
				return (<option key= {pagamento}>{pagamento}</option>)
			})
		}
	
		
  		
		

		return (
			<Card>
				
				<Typography><h3>{this.state.job.title}</h3></Typography>
				<Typography><p>{this.state.job.description}</p></Typography>
				<Typography><p>{date}</p></Typography>
				<Typography><p>{this.state.job.price} R$</p></Typography>
				<Typography>Pagamento: <select>{pagamentos}</select></Typography>
				{this.state.job.taken ? <Button onClick={() => this.botarNoCarrinho()} variant = "contained" >No Carrinho!</Button>:<Button onClick={() =>this.botarNoCarrinho()} variant = "contained" >Contratar</Button>}
				
				
				
			</Card>
		)

	}
	
}