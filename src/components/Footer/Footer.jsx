import React from 'react'; 
import { FooterContainer } from './style';
import { LogoContainer } from './style';
import { InformationsContainer } from './style';
import logo from '../../img/logo.png'





export default class Footer extends React.Component {

	render() {

		return (
			
			<FooterContainer>
				<LogoContainer>
					<img src={logo} />
				</LogoContainer>
				<InformationsContainer>
					<p>Copyright © 2022-2022 Ebazar.com.br LTDA. <br/>
CNPJ n.º 00.000.000/0000-00 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - Labeninjas S.A.</p>
				</InformationsContainer>
			</FooterContainer>
		)

	}
	
}

