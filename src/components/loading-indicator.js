import styled from 'styled-components';
import { Zandloper } from './svg/zandloper';

export const LoadingIndicator = styled(Zandloper)`
	animation-name: rotate;
	animation-duration: 1.5s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	
	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(360deg);
		}
		50% {
			transform: rotate(0deg);
		}
	}
`;
