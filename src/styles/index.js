import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export const baseStyles = () => injectGlobal`
	${styledNormalize}
	
	* {
		box-sizing: border-box;
	}
	
	html {
		font-size: 100%;
		
		@media (min-width: 35em) { font-size: 106.25%; }
		@media (min-width: 55em) { font-size: 112.5%; }
		@media (min-width: 81em) { font-size: 125%; }
	}
	
	body {
		line-height: 1.6;
		padding-bottom: 100px;
	}
	
`;
