import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export const baseStyles = () => injectGlobal`
	${styledNormalize}
	
	* {
		box-sizing: border-box;
	}
	
	body {
		line-height: 1.6;
		padding-bottom: 100px;
	}
`;
