// @flow

export type VenueModel = {
	name: string,
	startDate: string,
	endDate: string,
	location: string,
	address: string,
	postalCode: string,
	url: string,
	registrationUrl: string,
	map: string,
};

export type EventModel = {
	name: string,
	description: string,
	content: string,
	subjects: string[],
	url: string,
	rate: string,
	duration: string,
	organizer: string[],
	inLanguage: string,
	identifier: string,
	venues: VenueModel[],
};
