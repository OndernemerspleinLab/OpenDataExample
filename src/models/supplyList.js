export type SupplyListEntryModel = {
	title: string,
	quantity: number,
	apiUrl: string,
	apiTitle: string,
	dopTitle: string,
	dopUrl: string,
};

export type SupplyListModel = SupplyListEntryModel[];
