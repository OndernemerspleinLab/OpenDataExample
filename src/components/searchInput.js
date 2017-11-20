import React from 'react';
import { debounce } from '../helpers/functional';
import styled from 'styled-components';
import { mediaObjectText } from '../styles/mediaObject';

const TextInput = styled.input`
	${mediaObjectText};

	padding: 0.5rem 0 0.65rem;
	padding-left: 1rem;
	border: 1px solid #033054;
`;

export class SearchInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		this.handleSearchDebounced = debounce(
			() =>
				this.props.handleSearch.apply(this, [
					{ searchTerm: this.state.searchTerm, offset: 0 },
				]),
			400
		);
	}

	handleChange(event) {
		this.setState({ searchTerm: event.target.value });
		this.handleSearchDebounced();
	}

	render() {
		return (
			<TextInput
				{...this.props}
				type="search"
				value={this.state.searchTerm}
				onChange={this.handleChange}
			/>
		);
	}
}
