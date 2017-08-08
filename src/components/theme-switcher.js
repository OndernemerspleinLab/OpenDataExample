import React from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.div`float: right;`;
const SwitchText = styled.span`font-weight: bold;`;
const SwitchButton = styled.div`
	background: ${props => props.theme.alternativeThemeColor};
	width: 20px;
	height: 20px;
	margin-left: 6px;
	cursor: pointer;
	float: right;
`;

export const ThemeSwitcher = props =>
	<SwitchWrapper>
		<SwitchText>Wijzig kleurenschema:</SwitchText>{' '}
		<SwitchButton onClick={props.switchTheme} />
	</SwitchWrapper>;
