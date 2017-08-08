import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import BrandBar from './components/brandBar';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, orangeTheme } from './styles/theme';
import { ThemeSwitcher } from './components/theme-switcher';
import { PreContent } from './components/pre-content';

class App extends Component {
	constructor(props) {
		super(props);

		this.changeTheme = this.changeTheme.bind(this);

		this.state = {
			theme: defaultTheme,
		};
	}

	changeTheme() {
		this.setState({
			theme: this.state.theme === defaultTheme ? orangeTheme : defaultTheme,
		});
	}

	render() {
		return (
			<ThemeProvider theme={this.state.theme}>
				<div>
					<Header />
					<BrandBar />
					<PreContent>
						<ThemeSwitcher switchTheme={this.changeTheme} />
					</PreContent>
					<Main />
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
