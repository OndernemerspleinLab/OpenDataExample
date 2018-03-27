// @flow

import React from 'react';
import { isEmptyArray, unexisty } from '../helpers/functional';
import { formatDate } from '../helpers/date';
import TotalString from './total-string';
import ReferenceLink from './reference-link';
import type {
	SupplyListEntryModel,
	SupplyListModel,
} from '../models/supplyList';

export const SupplyTypeList = (props: { supplyList: SupplyListModel }) => {
	const { supplyList } = props;

	if (unexisty(supplyList) || isEmptyArray(supplyList)) {
		return null;
	}

	return (
		<ul>
			<li>
				{`Datum: ${formatDate(new Date())}`}
			</li>
			{supplyList.map((entry: SupplyListEntryModel, key) =>
				<li key={key}>
					<TotalString total={entry.quantity}>
						{entry.title}
					</TotalString>
					<ReferenceLink href={entry.apiUrl}>
						{entry.apiTitle}
					</ReferenceLink>
				</li>
			)}
		</ul>
	);
};
