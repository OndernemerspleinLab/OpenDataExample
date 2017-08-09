import styled, { css } from 'styled-components';
import { calcColumnWidth, gridItem, space } from '../styles/grid';
import { mq } from '../styles/utils';

const sideColumn = css`
	${mq('extraExtraLarge', 'lesser')`
		margin-top: ${space};
	`}
	${mq({ from: 'smallMedium', to: 'extraExtraLarge' })`
		width: 100%;
		margin-left: 0;
		margin-right: 0;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		
		& > div,
		& > section, 
		& > aside {
			width: ${calcColumnWidth(1 / 2)};
			display: inline-block;
			margin: 0 1rem;
		}
	`}
`;

export const Column = styled.div`
	${gridItem};
	flex: ${props => (props.size === 'fit' ? '1 1 auto' : '0 1 auto')};

	${props => {
		switch (props.size) {
			case 'half':
				return css`
						width: ${calcColumnWidth(1)};
						${mq('smallMedium')`width: ${calcColumnWidth(1 / 2)};`}
					`;
			case 'quarter':
				return css`
						width: ${calcColumnWidth(1)};
						${mq('smallMedium')`width: ${calcColumnWidth(1 / 3)};`}
						${mq('mediumLarge')`width: ${calcColumnWidth(1 / 4)};`}
					`;
			case 'threeQuarter':
				return css`
					width: ${calcColumnWidth(1)};
					${mq('smallMedium')`width: ${calcColumnWidth(2 / 3)};`}
					${mq('mediumLarge')`width: ${calcColumnWidth(3 / 4)};`}
				`;
			case 'third':
				return css`
					width: ${calcColumnWidth(1)};
					${mq('smallMedium')`width: ${calcColumnWidth(1 / 2)};`}
					${mq('extraExtraLarge')`width: ${calcColumnWidth(1 / 3)};`}
				`;
			case 'twoThird':
				return css`
					width: ${calcColumnWidth(1)};
					${mq('extraExtraLarge')`width: ${calcColumnWidth(2 / 3)};`}
				`;
			default:
				return '';
		}
	}};

	${props => (props.sideColumn ? sideColumn : null)};
`;
