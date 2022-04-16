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
						key = "7656561d-0407-4f0d-9da6-1af92425c473"
						id = "7656561d-0407-4f0d-9da6-1af92425c473"
						title = "Advogado"
						image = "https://tse4.mm.bing.net/th?id=OIP.DTRSr-uFNZ1hfVGnxn1zBgHaEz&pid=Api&P=0&w=266&h=172"
						description = "Melhor advogado do País, formado em Harvard"
						dueDate = "2065-02-10T00:00:00.000Z"
						price = "5000"
						paymentMethods = {["Débito", "Pix"]}
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
						key = "1e3c652c-732b-487c-b8ce-a12a12399797"
						id = "1e3c652c-732b-487c-b8ce-a12a12399797"
						title = "Desenvolvedor Full Stack"
						description = "Formado na Labenu, desenvolvo os melhores sites para sua empresa."
						image = "https://tse4.mm.bing.net/th?id=OIP.fxCp61-TvmLvmnM5JN0xqQHaEl&pid=Api&P=0&w=271&h=168"
						dueDate = "2033-02-20T00:00:00.000Z"
						price = "3000"
						paymentMethods = {["Débito", "Pix"]}
						taken = {false}
						processCardClick={(id, takenStatus) => this.props.cardClicked(id, takenStatus)}
						/>
					</PromotionsBox>
				</FieldSet>
			</MainContainer>	
		)

	}
	
}