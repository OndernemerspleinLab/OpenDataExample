// @flow

import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import BrandBar from './components/brandBar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<BrandBar />
				<Main />
			</div>
		);
	}
}

export default App;
