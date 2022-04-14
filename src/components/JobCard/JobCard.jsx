import React from 'react'; 
import { getJobById, updateJob } from '../../services/requests';
import { Card } from './style';
import { Button } from '@mui/material';


export default class JobCard extends React.Component {

	state = {
		job: [], 
		taken: this.props.taken,
	}

	saveJob = (job) => {
		this.setState({ taken: job.taken})
	}

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
				
				<h3>{this.props.title}</h3>
				<p style={{textAlign:'center'}}>{this.props.description}</p>
				<p>{date}</p>
				<p>{this.props.price} R$</p>
				<p>Pagamento: <select>{pagamentos}</select></p>
				<Button onClick={() => this.props.processCardClick(this.props.id, !this.props.taken)} variant = "contained" >{this.props.taken ?  'No Carrinho!' : 'Contratar'}</Button>
			</Card>
		)

	}
	
}