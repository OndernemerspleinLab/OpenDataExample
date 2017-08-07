export type PaginationModel = {
	limit: number,
	offset: number,
	returned: number,
	total: number,
};

export const defaultPagination: PaginationModel = {
	limit: 0,
	offset: 0,
	returned: 0,
	total: 0,
};
