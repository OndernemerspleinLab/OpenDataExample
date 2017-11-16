import React from 'react';
import styled from 'styled-components';
import { Button } from './button';
import { space } from '../styles/grid';

const SwitchButton = styled(Button)`
	display: block;
	margin-bottom: ${space};
`;

export const ThemeSwitcher = props =>
	<SwitchButton onClick={props.clickHandler} primary>
		<span>
			{'Wijzig stijl'}
		</span>
	</SwitchButton>;
