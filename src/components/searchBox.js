import React from 'react';
import { debounce } from '../helpers/functional';
// import styled from 'styled-components';
// import { mediaObjectText } from '../styles/mediaObject';

// const TextInput = styled.input`
// 	${mediaObjectText};
//
// 	padding: 0.5rem 0 0.65rem;
// 	padding-left: 1rem;
// 	border: 1px solid #033054;
// `;

const searchBoxRef = 'searchBox';

export class SearchBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: '',
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		this.handleSearchDebounced = debounce(
			() => this.props.handleSearch.apply(this, [this.state.value]),
			400
		);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		this.handleSearchDebounced();
	}

	render() {
		return (
			<input
				className={this.props.className}
				ref={searchBoxRef}
				type="search"
				value={this.state.value}
				onChange={this.handleChange}
			/>
		);
	}
}
