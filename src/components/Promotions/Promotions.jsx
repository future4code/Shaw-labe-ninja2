import React from 'react'; 
import { MainContainer } from './style';
import { PromotionsBox } from './style';
import JobCard from '../JobCard/JobCard';
import { FieldSet } from './style';
import { Legend } from './style';
import OFF from '../../img/OFF.png'
import CardContainer from '../CardContainer/CardContainer';

export default class Promotions extends React.Component {

	render() {

		return (
			<MainContainer>
				<FieldSet class="fieldset-border">
					<Legend >Promoções do dia <img src={OFF}/></Legend>
					<PromotionsBox>
						<JobCard
						key = "3ed283bf-e224-42b8-a351-62053ba0b100"
						id = "3ed283bf-e224-42b8-a351-62053ba0b100"
						title = "Pintor Profissional"
						image = "https://www.politintas.com.br/wp-content/uploads/2016/11/dicas-contratar-bom-pintor.jpg"
						description = "Pinto na sala, pinto na cozinha, pinto em tudo que é lugar!"
						dueDate = "2023-06-16T00:00:00.000Z"
						price = "1200"
						paymentMethods = {["Boleto", "Paypal"]}
						taken = {false}
						processCardClick={(id, takenStatus) => this.props.cardClicked(id, takenStatus)}
						/>
						<JobCard
						key = "0fbfaa62-7b1f-4a92-b41f-4a11a0040b05"
						id = "0fbfaa62-7b1f-4a92-b41f-4a11a0040b05"
						title = "Crie animes rápido e fácil"
						description = "Com apenas 5 anos de treinamento intensivo, aprenda a criar seu próprio anime"
						image = "https://tse1.mm.bing.net/th?id=OIP.MFOG5HECTcTcQRNpR3mm2wHaEK&pid=Api&P=0&w=322&h=181"
						dueDate = "2033-04-22T00:00:00.000Z"
						price = "5788"
						paymentMethods = {["Débito", "Pix", "Paypal", "Boleto", "Crédito"]}
						taken =  {false}
						processCardClick={(id, takenStatus) => this.props.cardClicked(id, takenStatus)}
						/>
						<JobCard
						key = "6abe2204-fd49-452f-92f9-18ce47669f6b"
						id = "6abe2204-fd49-452f-92f9-18ce47669f6b"
						title = "Ganhe dinheiro em casa"
						description = "Ganhe dinheiro de forma fácil com apenas seu celular"
						image = "https://tse1.mm.bing.net/th?id=OIP.AOF-pkk5sGllD4SLg3GHJwHaEO&pid=Api&P=0&w=306&h=174"
						dueDate = "2022-04-20T00:00:00.000Z"
						price = "197"
						paymentMethods = {['Débito', 'Pix', 'Paypal', 'Boleto', 'Crédito']}
						taken = {false}
						processCardClick={(id, takenStatus) => this.props.cardClicked(id, takenStatus)}
						/>
					</PromotionsBox>
				</FieldSet>
			</MainContainer>	
		)

	}
	
}