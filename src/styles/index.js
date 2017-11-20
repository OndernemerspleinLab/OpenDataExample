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


	/**** Sizing iFrames ****/
	.chartContainer,
	.videoContainer {
		width: 100%;
		height: 0;
		position: relative;
		display: block;
	}
	.chartContainer {
		padding-bottom: 71.42857%;
	}
	.videoContainer {
		padding-bottom: 56.25%;
	}
	iframe {
		border: none;
	}
	.iframe {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
`;
