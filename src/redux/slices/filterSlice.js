import { createSlice } from "@reduxjs/toolkit";

// начальное состояние нашего state
const initialState = {
	searchValue: "",
	categoryId: 0,
	currentPage: 1,
	sort: {
		name: "популярности",
		sortProperty: "rating",
	},
};

// В filterSlice - createSlice создаст slice где будет хранится логика обработки данных нашего state
const filterSlice = createSlice({
	// name нужен чтоб redux мог корректно задать определенную команду
	name: "filter",
	initialState,
	reducers: {
		setCategoryId(state, action) {
			state.categoryId = action.payload;
		},

		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},

		setSort(state, action) {
			state.sort = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setFilters(state, action) {
			state.currentPage = Number(action.payload.currentPage);
			state.sort = action.payload.sort;
			state.categoryId = Number(action.payload.categoryId);
		},
	},
});

export const selectSort = (state) => state.filterSlice.sort;
export const selectFilter = (state) => state.filterSlice;

// actions это  reducers, не знаю зачем переименуется здесь, Арчаков сам не знает
export const {
	setCategoryId,
	setSort,
	setCurrentPage,
	setFilters,
	setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
