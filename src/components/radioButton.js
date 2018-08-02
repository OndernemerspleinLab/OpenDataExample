import React from 'react';
import styled from 'styled-components';

export const InputRadio = styled.input`margin-right: .5rem;`;
export const LabelRadio = styled.label`
	display: inline-block;
	margin-right: 1rem;
`;

export const RadioButton = ({
	id,
	group,
	value,
	checked,
	onClick,
	children,
}) => {
	return (
		<LabelRadio>
			<InputRadio
				type="radio"
				id={id}
				name={group}
				value={value}
				defaultChecked={checked}
				onClick={onClick}
			/>
			{children}
		</LabelRadio>
	);
};
