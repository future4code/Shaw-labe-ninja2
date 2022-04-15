import React from 'react';
import { getJobById, updateJob } from '../../services/requests';
import { Card, Img, ImgContainer } from './style';
import { Button } from '@mui/material';
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Rating from '@mui/material/Rating';


export default class JobCard extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
	}
	state = {
		job: [],
		taken: this.props.taken,
		rating: Math.floor((Math.random() * 5) + 2)
	}

	saveJob = (job) => {
		this.setState({ taken: job.taken })
	}

	botarNoCarrinho = () => {
		updateJob(this.props.id, !this.state.taken)
		getJobById(this.props.id, this.saveJob)
	}

	componentDidUpdate(prevProps) {
		if (prevProps.taken !== this.props.taken) {
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
		if (this.props.dueDate) {
			date = this.props.dueDate.slice(0, 10)

		}

		let pagamentos;
		if (this.props.paymentMethods) {
			pagamentos = this.props.paymentMethods.map((pagamento) => {
				return (<option key={pagamento}>{pagamento}</option>)
			})
		}
//220/160
		return (
			<Card>
				<Flippy
					flipOnHover={true} // default false
					flipOnClick={false} // default false
					flipDirection="horizontal" // horizontal or vertical
					ref={this.ref} // to use toggle method like ref.curret.toggle()
					// if you pass isFlipped prop component will be controlled component.
					// and other props, which will go to div
					style={{ width: '22vw', height: '22vw' }} /// these are optional style, it is not necessary

				>
					<FrontSide style={{ backgroundColor: '#C8C4C4', boxShadow: '2px 2px 10px black' }} animationDuration={1000}>
						<h3 style={{ fontSize:'24px', textAlign:'center', marginBottom:'10px'}}>{this.props.title}</h3>
						<ImgContainer>
							<Img src={'https://picsum.photos/220/160'} alt={''} />
							<p>R${this.props.price},00</p>
						</ImgContainer>
					</FrontSide>
					<BackSide style={{ backgroundImage: 'radial-gradient(circle at 27.95% 27.95%, #4c4732 0, #000104 50%, #000000 100%)', boxShadow: '2px 2px 10px black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }} animationDuration={1000}>
						<h3 style={{ color:' #FFE600', fontSize:'24px'}}>{this.props.title}</h3>
						<p style={{ textAlign: 'center'}}>{this.props.description}</p>
						<Rating name="read-only" value={this.state.rating} readOnly />
						<p>{date}</p>
						<p>{this.props.price} R$</p>
						<p>Pagamento: <select>{pagamentos}</select></p>
						{this.props.taken ?
							<Button onClick={() => this.props.processCardClick(this.props.id, !this.props.taken)} variant="contained" size="small" > No Carrinho!</Button>
							:
							<Button onClick={() => this.props.processCardClick(this.props.id, !this.props.taken)} variant="contained" size="small">Contratar</Button>
						}
					</BackSide>
				</Flippy>
				{/* // <Card> */}

				{/* // 	<h3>{this.props.title}</h3>
			// 	<p style={{textAlign:'center'}}>{this.props.description}</p>
			// 	<p>{date}</p>
			// 	<p>{this.props.price} R$</p>
			// 	<p>Pagamento: <select>{pagamentos}</select></p>
			// 	<Button onClick={() => this.props.processCardClick(this.props.id, !this.props.taken)} variant = "contained" >{this.props.taken ?  'No Carrinho!' : 'Contratar'}</Button> */}
			</Card>
		)

	}

}