import React from 'react';
import { FilterStyle} from './style';


export default class Filter extends React.Component {

	render() {

		return (

			<FilterStyle>

				<input
					placeholder="Buscar"
					value={this.props.query}
					onChange={this.props.updateQuery}

				/>

				<input className='numbers'
					type='number'
					placeholder="R$ Min"
					value={this.props.minPrice}
					onChange={this.props.updateMinPrice}

				/>

				<input  className='numbers'
					type='number'
					placeholder="R$ Max"
					value={this.props.maxPrice}
					onChange={this.props.updateMaxPrice}

				/>


				<span>
					<label for="sort">Ordenar por:</label>
					<select
						name='sort'
						value={this.props.sortingParameter}
						onChange={this.props.updateSortingParameter}
					>
						<option value="title">Titulo</option>
						<option value="Price">Preço</option>
						<option value="dueDate">Data</option>
					</select>

					<select
						name='order'
						value={this.props.order}
						onChange={this.props.updateOrder}
					>
						<option value={1}>Crescente</option>
						<option value={-1}>Decrescente</option>

					</select>
				</span>
			</FilterStyle>
		)
	}
}