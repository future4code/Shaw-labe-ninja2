import React from 'react'; 
import { getJobById, updateJob } from '../../services/requests';
import { Card } from './style';
import { MenuItem, Typography } from '@mui/material'; 
import { Button } from '@mui/material';


export default class JobCard extends React.Component {

	state = {
		job: [], 
		taken: this.props.taken,
	}

	saveJob = (job) => {
		this.setState({ taken: job.taken})
	}

	// componentDidMount(){
	// 	getJobById(this.props.id, this.saveJob)
	// }

	botarNoCarrinho = () => {
		updateJob(this.props.id, !this.state.taken)
		getJobById(this.props.id, this.saveJob)
	  }

	componentDidUpdate(prevProps) 
	{
		if(prevProps.taken !== this.props.taken)
		{
			this.forceUpdate();
		}
	}


	//receive id as props

				// key={job.id} 
				// id = {job.id}
				// title = {job.title}
				// description = {job.description}
				// dueDate = {job.dueDate}
				// price = {job.price}
				// paymentMethods = {job.paymentMethods}
				// taken = {job.taken}


	render() {
		//0-9
		let date;
		if(this.props.dueDate) 
		{
			date = this.props.dueDate.slice(0,10)
			
		}
		
		let pagamentos; 
		if (this.props.paymentMethods)
		{
			pagamentos = this.props.paymentMethods.map( (pagamento) => {
				return (<option key= {pagamento}>{pagamento}</option>)
			})
		}
	
		
  		
		

		return (
			<Card>
				
				<Typography><h3>{this.props.title}</h3></Typography>
				<Typography><p>{this.props.description}</p></Typography>
				<Typography><p>{date}</p></Typography>
				<Typography><p>{this.props.price} R$</p></Typography>
				<Typography>Pagamento: <select>{pagamentos}</select></Typography>
				{this.state.taken ? <Button onClick={() => this.props.processCardClick(this.props.id, !this.props.taken)} variant = "contained" >No Carrinho!</Button>:<Button onClick={() =>this.props.processCardClick(this.props.id, !this.props.taken)} variant = "contained" >Contratar</Button>}
				
				
				
			</Card>
		)

	}
	
}