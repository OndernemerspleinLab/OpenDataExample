import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/header';
import Main from './components/main';
import BrandBar from './components/brandBar';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, orangeTheme } from './styles/theme';
import { ThemeSwitcher } from './components/theme-switcher';
import { PreContent } from './components/pre-content';

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
`;

const Page = styled.div`
	min-height: 100vh;
	max-width: 96rem;
	display: flex;
	flex-direction: column;
	padding-top: 1px;
	margin: -1px auto 0 auto;
`;

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
				<Container>
					<Page>
						<Header />
						<PreContent>
							<ThemeSwitcher switchTheme={this.changeTheme} />
						</PreContent>
						<Main />
					</Page>
				</Container>
			</ThemeProvider>
		);
	}
}

export default App;
