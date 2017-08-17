import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export const baseStyles = () => injectGlobal`
	${styledNormalize}
	
	* {
		box-sizing: border-box;
	}
	
	html {
		font-size: 100%;
		
		@media (min-width: 35em) { font-size: 101.25%; }
		@media (min-width: 55em) { font-size: 107.5%; }
		@media (min-width: 81em) { font-size: 120%; }
	}
	
	body {
		line-height: 1.6;
		padding-bottom: 100px;
	}
	
	h1, h2, h3 {
		line-height: 1.1;
	}
	
	h2 {
		margin-top: 2em;
		margin-bottom: 0.4em;
		font-size: 1.5rem;
	}
	
	h3 {
		margin-top: 2em;
		font-size: 1.1rem;
	}
	
`;
