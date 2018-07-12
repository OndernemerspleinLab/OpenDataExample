// @flow

import React from 'react';
import styled from 'styled-components';
import { unexisty } from '../helpers/functional';
import { InterfaceLink } from './interface-link';

export const ListItem = styled.li`
	break-inside: avoid;
	list-style-type: none;
	counter-increment: li;
	position: relative;
	margin: 0;
	padding: 0.3em 0;
`;

export const ListLink = styled(InterfaceLink)`
	display: inline-flex;
	align-items: flex-start;
`;

const BaseLinkList = styled.ul`
	padding-left: 0;
	margin-bottom: 0;
	margin-left: 0;
	list-style: none;
`;

export const LinkList = (props: { links: [], defaultIcon?: string }) => {
	if (unexisty(props.links)) {
		return null;
	}

	return (
		<BaseLinkList>
			{props.links.map((link, key) => {
				const { icon, url, isExternal } = link;

				return (
					<ListItem key={key}>
						<ListLink
							icon={icon ? icon : props.defaultIcon}
							url={url}
							isExternal={isExternal}
						>
							{link.text}
						</ListLink>
					</ListItem>
				);
			})}
		</BaseLinkList>
	);
};
