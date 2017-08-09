import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { baseStyles } from './styles/index';
import './index.css';

const render = () => {
	baseStyles();

	ReactDOM.render(
		<HashRouter>
			<App />
		</HashRouter>,
		document.getElementById('root')
	);
};

render();
