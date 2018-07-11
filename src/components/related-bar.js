// @flow

import React from 'react';
import styled from 'styled-components';
import { unexisty, isEmptyArray } from '../helpers/functional';
import { InterfaceLink } from './interface-link';
import type { ArticlePart } from '../models/articlePart';

const BaseRelatedBar = styled.div``;
const InnerBar = styled.div``;
const RelatedBarLabel = styled.h2``;
const RelatedBarList = styled.ul``;
const RelatedBarListItem = styled.li``;
const RelatedBarListItemLink = styled(InterfaceLink)``;

type Props = {
	relatedLinks: ArticlePart[],
};

export const RelatedBar = ({ relatedLinks }): Props => {
	if (unexisty(relatedLinks) || isEmptyArray(relatedLinks)) {
		return null;
	}

	return (
		<BaseRelatedBar>
			<InnerBar>
				<RelatedBarLabel>
					{'Gerelateerde artikelen'}
				</RelatedBarLabel>
				<RelatedBarList>
					{relatedLinks.map((relatedLink, key) => {
						const { headLine, url } = relatedLink;

						return (
							<RelatedBarListItem key={key}>
								<RelatedBarListItemLink url={url}>
									{headLine}
								</RelatedBarListItemLink>
							</RelatedBarListItem>
						);
					})}
				</RelatedBarList>
			</InnerBar>
		</BaseRelatedBar>
	);
};
