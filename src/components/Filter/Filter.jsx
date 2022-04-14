import React from 'react';
import { FilterStyle, List } from './style';


export default class Filter extends React.Component {

	render() {

		return (

			<FilterStyle FilterStyle>

				<input
					placeholder="search"
					value={this.props.query}
					onChange={this.props.updateQuery}

				/>

				<input
					type='number'
					placeholder="Min Price"
					value={this.props.minPrice}
					onChange={this.props.updateMinPrice}

				/>

				<input
					type='number'
					placeholder="Max Price"
					value={this.props.maxPrice}
					onChange={this.props.updateMaxPrice}

				/>


				<span>
					<label for="sort">Ordination</label>
					<select
						name='sort'
						value={this.props.sortingParameter}
						onChange={this.props.upSortingParameter}
					>
						<option value="title">Title</option>
						<option value="Price">Price</option>
						<option value="dueDate">Term</option>
					</select>

					<select
						name='order'
						value={this.props.order}
						onChange={this.props.updateOrder}
					>
						<option value={1}>Crescents</option>
						<option value={-1}>Decreasing</option>

					</select>
				</span>
			</FilterStyle>
		)
	}
}
