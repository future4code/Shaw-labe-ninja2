import React from 'react'; 
import HomeScreenMain from '../../components/HomeScreenMain/HomeScreenMain';
import RegisterJob from '../../components/RegisterJob/RegisterJob';

//IMPORT style from style.jsx in same folder




export default class HomeScreen extends React.Component {

	render() {

		return (
			<div>
                <HomeScreenMain/> 
                <RegisterJob/> 
			</div>
		)

	}
	
}