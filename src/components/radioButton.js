import React from 'react';
import styled from 'styled-components';

export const InputRadio = styled.input`margin-right: .5rem;`;
export const LabelRadio = styled.label`
	display: inline-block;
	margin-right: 1rem;
`;

export const RadioButton = props => {
	return (
		<LabelRadio>
			<InputRadio
				type="radio"
				id={props.id}
				name={props.group}
				value={props.value}
				defaultChecked={props.checked}
				onClick={props.onClick}
			/>
			{props.children}
		</LabelRadio>
	);
};
