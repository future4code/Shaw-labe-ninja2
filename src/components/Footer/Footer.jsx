import React from 'react'; 
import { FooterContainer } from './style';
import { LogoContainer } from './style';
import { InformationsContainer } from './style';
import logo from '../../img/logo.png'
import { IconsContainer } from './style';
import iconFacebook from '../../img/iconFacebook.png'
import iconTwitter from '../../img/iconTwitter.png'
import iconLinkedin from '../../img/iconLinkedin.png'
import iconYoutube from '../../img/iconYoutube.png'



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
				<IconsContainer>
					<a href="https://www.linkedin.com/" target="_blank"><img src={iconLinkedin}/></a>
					<a href="https://www.instagram.com/" target="_blank"><img src={iconTwitter}/></a>
					<a href="https://www.facebook.com/" target="_blank"><img src={iconFacebook}/></a>
					<a href="https://www.youtube.com/" target="_blank"><img src={iconYoutube}/></a>
				</IconsContainer>
			</FooterContainer>
		)

	}
	
}

