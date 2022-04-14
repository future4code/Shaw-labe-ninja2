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
						<JobCard id="0a207f19-e26e-4731-b425-8ee8e4a528de"/>
						<JobCard id="0defcc32-464a-44fe-bb87-71d8f5de0c1c"/>
						<JobCard id="40632e69-19d9-486c-8ede-982385dab829"/>
					</PromotionsBox>
				</FieldSet>
			</MainContainer>	
		)

	}
	
}
