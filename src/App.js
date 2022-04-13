import React from 'react';
import Screens from './pages/Screens/Screens';
import { createGlobalStyle } from 'styled-components';
import theme from './constants/theme';
import { ThemeProvider } from 'react-jss';

const GlobalStyle = createGlobalStyle`
* {
	margin: 0; 
	padding: 0; 
	box-sizing: border-box; 
}
`
export default class App extends React.Component {

	render() {

		return (

			<div>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
				<Screens />
				</ThemeProvider>
			</div>
		)

	}

}

