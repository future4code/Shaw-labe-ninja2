import React from 'react'; 
import { MainContainer } from './style';
import { PromotionsBox } from './style';
import JobCard from '../JobCard/JobCard';
import { FieldSet } from './style';
import { Legend } from './style';
import OFF from '../../img/OFF.png'

export default class Promotions extends React.Component {

	render() {

		return (
			<MainContainer>
				<FieldSet class="fieldset-border">
					<Legend >Promoções do dia <img src={OFF}/></Legend>
					<PromotionsBox>
						{/* <JobCard/>
						<JobCard/>
						<JobCard/> */}
					</PromotionsBox>
				</FieldSet>
			</MainContainer>	
		)

	}
	
}