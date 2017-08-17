import { grijs, hemelblauw, oranje, violet } from './colors';

export const defaultTheme = {
	maxWidth: '80rem',
	fontScale: '1em',
	primaryColor: hemelblauw.default,
	brandBarBackground: hemelblauw.default,

	primaryButtonBackground: violet.default,
	primaryButtonHoverBackground: violet.dark,
	primaryButtonShadow: violet.dark,
	primaryButtonHoverShadow: violet.dark,

	secondaryButtonBackground: hemelblauw.default,
	secondaryButtonHoverBackground: hemelblauw.dark,
	secondaryButtonShadow: hemelblauw.dark,
	secondaryButtonHoverShadow: hemelblauw.dark,

	linkColor: hemelblauw.grijscontrast,
	linkColorHover: hemelblauw.grijscontrast,
};

export const orangeTheme = {
	maxWidth: '60rem',
	fontScale: '0.85em',
	primaryColor: oranje.default,
	brandBarBackground: oranje.default,

	primaryButtonBackground: hemelblauw.default,
	primaryButtonHoverBackground: oranje.default,
	primaryButtonShadow: hemelblauw.dark,
	primaryButtonHoverShadow: oranje.text,

	secondaryButtonBackground: grijs.default,
	secondaryButtonHoverBackground: grijs.grijs7,
	secondaryButtonShadow: grijs.grijs7,
	secondaryButtonHoverShadow: grijs.grijs7,

	linkColor: oranje.default,
	linkColorHover: oranje.text,
};
