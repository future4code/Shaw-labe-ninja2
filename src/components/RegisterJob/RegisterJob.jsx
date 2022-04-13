import React from 'react'
import Select from 'react-select'
import { Input, FormContainer, customStyles,ContainerButton,Main } from './style'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';


const options = [
	{ value: 'credito', label: 'Crédito' },
	{ value: 'debito', label: 'Débito' },
	{ value: 'paypal', label: 'Paypal' },
	{ value: 'pix', label: 'Pix' },
	{ value: 'boleto', label: 'Boleto' }
]
export default class RegisterJob extends React.Component {
	state = {
        inputTitle:'',
        inputDescription:'',
        inputDueDate: '',
        inputPrice:'',
        inputImage:'',
        inputPaymentMethods:'',
        selectedOption:[],
        showModal: true,

    }
	onChangeInputTitle = (event) => {
		this.setState({ inputTitle: event.target.value })
	}
	onChangeInputDescription = (event) => {
		this.setState({ inputDescription: event.target.value })
	}
	onChangeinputDueDate = (event) => {
		this.setState({ inputDueDate: event.target.value })
	}
	onChangeInputPrice = (event) => {
		this.setState({ inputPrice: event.target.value })
	}
	onChangeInputPaymentMethods = (event) => {

		this.setState({ inputPaymentMethods: event.target.value })
	}
	onChangeInputImage = (event) => {

		this.setState({ inputImage: event.target.value })
	}
	onChangeSelectedOption = selectedOption => {
		this.setState({ selectedOption });

		this.setState({ paymentMethods: options })
	};
	handleModal = () => {
		this.setState({ showModal: !this.state.showModal })
	}
	addJob = () => {
		const options = this.state.selectedOption.map((option) => {
			return option.label
		})
		// ============================================================
		// VER AQUI O CREATE JOB
		// createJob(this.state.inputTitle, this.state.inputImage, this.state.inputDescription, this.state.inputPrice, options, this.state.inputDueDate)
		
	}
	render() {

		if (!this.state.showModal) {
			return <span></span>
		} else {
			return (
		
				<Main>
					<FormContainer>
						<Typography>Cadastrar Serviço</Typography>
						<Input
							value={this.state.inputTitle}
							placeholder={'Título'}
							onChange={this.onChangeInputTitle}
							type={'text'}
						/>

						<Input
							value={this.state.inputDescription}
							placeholder={'Descrição'}
							onChange={this.onChangeInputDescription}
							type={'text'}
						/>

						<Input
							value={this.state.inputDueDate}
							onChange={this.onChangeinputDueDate}
							type={'date'}
						/>


						<Input
							value={this.state.inputPrice}
							placeholder={'Valor'}
							onChange={this.onChangeInputPrice}
							type={'number'}
						/>
						<Input
							value={this.state.inputPriceImage}
							placeholder={'Imagem'}
							onChange={this.onChangeInputImage}
							type={'text'}
						/>
						<span>Formas de Pagamento:</span>
						<Select
							styles={customStyles}
							onChange={this.onChangeSelectedOption}
							defaultValue={''}
							isMulti
							options={options}
							value={this.state.selectedOption}
						>

                    </Select>
						<ContainerButton>
							<Button onClick={this.addJob} color='success' ><Typography> Cadastrar</Typography></Button>
							<Button onClick={this.handleModal}> Close</Button>
						</ContainerButton>
					</FormContainer>

				</Main>
				
			)
		}

	}

}