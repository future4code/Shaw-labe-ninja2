import React from 'react'
import Select from 'react-select'
import { Input, FormContainer, customStyles,ContainerButton,Main } from './style'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import {createJob} from '../../services/requests'
import TextField from '@mui/material/TextField'


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
        // inputImage:'',
        inputPaymentMethods:'',
        selectedOption:[],

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
	addJob = () => {
		const options = this.state.selectedOption.map((option) => {
			return option.label
		});
		createJob(this.state.inputTitle, this.state.inputDescription, Number(this.state.inputPrice), options, this.state.inputDueDate)

		this.setState({
			inputTitle:'',
			inputDescription:'',
			inputDueDate: '',
			inputPrice:'',
			// inputImage:'',
			inputPaymentMethods:''
		})
		
	}
	handleDateFocus = (event) => {
        event.target.type="date"
    }
    handleDateBlur = (event) => {
        event.target.type="text"
    }
	render() {

		if (!this.props.showModal) {
			return <span></span>
		} else {
			return (
		
				<Main>
					<FormContainer>
						<Typography sx={{fontSize:'22px'}}>Cadastrar Serviço</Typography>

						<TextField sx={{}}
							label={'Título'}
							variant={"outlined"}
							value={this.state.inputTitle}
							onChange={this.onChangeInputTitle}
							type={'text'}
							size={"small"}
						/>

						<TextField 
							label={'Descrição'}
							variant={"outlined"}
							value={this.state.inputDescription}
							onChange={this.onChangeInputDescription}
							type={'text'}
							size={"small"}
						/>

						<TextField
							label={'Prazo'}
							variant={"outlined"}
							value={this.state.inputDueDate}
							onChange={this.onChangeinputDueDate}
							type = {'text'}
							onFocus={this.handleDateFocus}
							onBlur = {this.handleDateBlur}
							size={"small"}
						/>


						<TextField
							label={'Valor'}
							variant={"outlined"}
							value={this.state.inputPrice}
							onChange={this.onChangeInputPrice}
							type={'number'}
							size={"small"}
						/>
						{/* <Input
							value={this.state.inputPriceImage}
							placeholder={'Imagem'}
							onChange={this.onChangeInputImage}
							type={'text'}
						/> */}
						<span><Typography sx={{fontSize:'14px'}}>Formas de Pagamento:</Typography></span>

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
							<Button onClick={this.addJob}> Cadastrar</Button>
							<Button onClick={this.props.handleModal}> Cancelar</Button>
						</ContainerButton>
					</FormContainer>

				</Main>
				
			)
		}

	}

}