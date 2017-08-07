// @flow

import { PaginationModel } from './pagination';

export type VenueReferenceModel = {
	location: string,
	url: string,
	startDate: string,
	endDate: string,
};

export type EventReferenceModel = {
	identifier: string,
	name: string,
	description: string,
	rate: string,
	duration: string,
	venues: VenueReferenceModel[],
};

/* eslint-disable no-undef */
export type EventsModel = {
	events: EventReferenceModel[],
	pagination: PaginationModel,
};
