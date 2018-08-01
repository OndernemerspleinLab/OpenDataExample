import React from 'react';
import { RadioButton } from './radioButton';
import { debounce } from '../helpers/functional';

export class SearchTypes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checkedValue: props.checkedValue[0], // for now only the first
			options: props.options,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillMount() {
		this.debouncedHandleSelect = debounce(
			() =>
				this.props.handleCheck.apply(this, [
					{ [this.props.name]: this.state.checkedValue },
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
			checkedValue: event.target.value,
		});
		this.debouncedHandleSelect();
	}

	render() {
		const { checkedValue, options } = this.state;

		if (!options) {
			return null;
		}

		return (
			<div>
				{options.map((option, index) =>
					<RadioButton
						key={index}
						group={this.props.name}
						value={option.value}
						id={`${this.props.name}-${index}`}
						checked={checkedValue === option.value}
						onClick={this.handleChange}
					>
						{option.title}
					</RadioButton>
				)}
			</div>
		);
	}
}
