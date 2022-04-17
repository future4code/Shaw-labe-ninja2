import React from 'react';
import JobCard from '../JobCard/JobCard'
import { CardContainerMain } from './style'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



export default class CardContainer extends React.Component {




	render() {

		let displayJobs = this.props.jobs.map((job) => {
			const data = job.description.split('<>')
			//console.log(data)
			console.log(job)
			return (<JobCard
				key={job.id}
				id={job.id}
				title={job.title}
				image={data[1]}
				description={data[0]}
				dueDate={job.dueDate}
				price={job.price}
				paymentMethods={job.paymentMethods}
				taken={job.taken}
				processCardClick={(id, takenStatus) => this.props.cardClicked(id, takenStatus)}
			/>)
		})

		return (
			<CardContainerMain>

				{this.props.loading ?
					<Stack sx={{ backgroundColor:'black', width:'100%', height:'20vh', display:'flex', alignItems:'center', justifyContent:'center'}} >
						<CircularProgress sx={{ color: "#FFE600", height:'3.5rem' }} />
					</Stack>
					:
					displayJobs}
			</CardContainerMain>
		)

	}

}