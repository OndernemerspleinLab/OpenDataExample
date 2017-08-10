import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { baseStyles } from './styles/index';
import './index.css';

Array.from(document.getElementsByClassName('removeOnLoad')).forEach(element =>
	element.parentNode.removeChild(element)
);

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
