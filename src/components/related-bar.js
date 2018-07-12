// @flow

import React from 'react';
import styled from 'styled-components';
import { unexisty, isEmptyArray } from '../helpers/functional';
import type { ArticlePart } from '../models/articlePart';
import { LinkList, ListItem } from './link-list';
import { violet } from '../styles/colors';
import { AnchorLink } from './link';

const BaseRelatedBar = styled.div`
	background-color: ${violet.lightest};
	padding: 1rem;
	margin-bottom: 1.4rem;

	${ListItem} {
		padding: 0;
	}

	${AnchorLink} {
		color: ${violet.dark};
		fill: ${violet.dark};
	}
`;
const InnerBar = styled.div``;
const RelatedBarLabel = styled.h3`margin-top: 0;`;
const RelatedBarList = styled(LinkList)``;

type Props = {
	relatedLinks: ArticlePart[],
};

export const RelatedBar = ({ relatedArticles }): Props => {
	if (unexisty(relatedArticles) || isEmptyArray(relatedArticles)) {
		return null;
	}

	return (
		<BaseRelatedBar>
			<InnerBar>
				<RelatedBarLabel>
					{`Gerelateerde antwoordpagina's`}
				</RelatedBarLabel>
				<RelatedBarList links={relatedArticles} defaultIcon={'chevron-right'} />
			</InnerBar>
		</BaseRelatedBar>
	);
};
