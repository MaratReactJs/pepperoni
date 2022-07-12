export enum SortPropertyEnum {
	RATING_DESC = "rating",
	RATING_ASC = "-rating",
	PRICE_DESC = "price",
	PRICE_ASC = "-price",
	TITLE_DESC = "title",
	TITLE_ASC = "-title",
}

export type SortType = {
	name: string;
	sortProperty: SortPropertyEnum;
};

export interface FilterSliceStateType {
	searchValue: string;
	categoryId: number;
	currentPage: number;
	sort: SortType;
}
