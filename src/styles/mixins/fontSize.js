import { css } from 'styled-components';
import { getIn } from '../../helpers/functional';

const fontSizeMap = {
	root: '1rem',
	halfRoot: '0.5rem',
	small: '0.875rem',
	extrasmall: '0.75rem',
	menuLabelsExtraSmall: '0.45rem',
	menuLabelsSmall: '0.65rem',
	menuLabelsMedium: '0.68rem',
	menuLabels: '0.9rem',
	h1: {
		all: '1.7rem',
		small: '1.9rem',
		large: '2.2rem',
	},
	h2: {
		all: '1.3rem',
		small: '1.4rem',
		large: '1.5rem',
	},
	h3: {
		all: '1.1rem',
	},
	h4: {
		all: '1rem',
	},
	brandBarPageTitle: '1.75rem',
	introText: '1.2rem',
	payOff: '1.1rem',
};

const lineHeightMap = {
	root: 1.6,
	heading: 1.2,
	formField: 1.2,
	button: 1,
	textSize: 1,

	// Specific element lineHeights
	labelListItem: 1.3,
	bigBlockMore: 1.7,
	searchTabItem: 1.5,
	transactionGemeenteAlternative: 1.4,
	anchorBlockLinkList: 0.5,
	subjectLinkListTitle: 1.7,
};

const getLineHeightValue = (name, targetMap) => targetMap[name];
const getLineHeightStyle = (name, targetMap) => {
	const lineHeightValue = getLineHeightValue(name, targetMap);

	return lineHeightValue ? css`line-height: ${lineHeightValue}` : null;
};

const getFontSizeValue = (path, targetMap) => getIn(path, false)(targetMap);

const getFontSizeStyle = (element, size, targetMap) => {
	const path = [element];
	if (size) {
		path.push(size);
	}
	const fontSizeValue = getFontSizeValue(path, targetMap);

	return fontSizeValue ? css`font-size: ${fontSizeValue}` : null;
};

export const getLineHeight = name => getLineHeightStyle(name, lineHeightMap);

export const getFontSize = (element, size) =>
	getFontSizeStyle(element, size, fontSizeMap);
