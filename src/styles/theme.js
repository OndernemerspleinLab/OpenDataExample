import { hemelblauw, oranje, violet } from './colors';

export const defaultTheme = {
	alternativeThemeColor: oranje.default,
	brandBarBackground: hemelblauw.default,

	primaryButtonBackground: violet.default,
	primaryButtonHoverBackground: violet.dark,
	primaryButtonShadow: violet.dark,
	primaryButtonHoverShadow: violet.dark,

	linkColor: hemelblauw.default,
	linkColorHover: hemelblauw.dark,
};

export const orangeTheme = {
	alternativeThemeColor: hemelblauw.default,
	brandBarBackground: oranje.default,

	primaryButtonBackground: hemelblauw.default,
	primaryButtonHoverBackground: oranje.default,
	primaryButtonShadow: hemelblauw.dark,
	primaryButtonHoverShadow: oranje.text,

	linkColor: oranje.default,
	linkColorHover: oranje.text,
};
