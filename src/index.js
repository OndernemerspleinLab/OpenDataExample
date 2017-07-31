import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import 'muicss/dist/css/mui.min.css';
import './index.css';

render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
);
