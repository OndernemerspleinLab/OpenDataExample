import React from 'react';
import styled from 'styled-components';
import { getLineHeight } from '../styles/mixins/fontSize';
import { grijs } from '../styles/colors';
import { debounce } from '../helpers/functional';

export const Select = styled.select`
	${getLineHeight('formField')};
	padding: 0.5rem 0.65rem;
	color: ${grijs.darkest};

	& + & {
		margin-left: 1rem;
	}

	&::-ms-expand {
		display: none;
	}
`;

export class SearchSelect extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedValue: props.defaultValue,
			options: props.options,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		this.debouncedHandleSelect = debounce(
			() =>
				this.props.handleSelect.apply(this, [
					{ [this.props.name]: this.state.selectedValue },
				]),
			100
		);

		this.setState({
			selectedValue: this.props.value,
		});
	}

	handleChange(event) {
		this.setState({
			...this.state,
			selectedValue: event.target.value,
		});
		this.debouncedHandleSelect();
	}

	render() {
		const { selectedValue, options } = this.state;

		if (!options) {
			return null;
		}

		return (
			<Select
				{...this.props}
				value={selectedValue}
				onChange={this.handleChange}
			>
				{options.map((option, key) =>
					<option value={option.value} key={key}>
						{option.title}
					</option>
				)}
			</Select>
		);
	}
}
