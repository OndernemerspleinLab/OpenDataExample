export type SupplyListEntryModel = {
	title: string,
	quantity: number,
	apiUrl: string,
	apiTitle: string,
	referenceTitle: string,
	referenceUrl: string,
};

export type SupplyListModel = SupplyListEntryModel[];
