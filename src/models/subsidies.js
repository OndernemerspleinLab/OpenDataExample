// @flow

import { PaginationModel } from './pagination';

export type SubsidiesReferenceModel = {
	title: string,
	identifier: string,
};

/* eslint-disable no-undef */
export type SubsidiesModel = {
	subsidies: SubsidiesReferenceModel[],
	pagination: PaginationModel,
};
