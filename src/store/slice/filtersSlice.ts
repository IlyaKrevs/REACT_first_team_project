import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FilterState } from "../types/filters";

const initialState: FilterState = {
    searchValue: '',
    categoryId: 0,
    filters: ['По подписке', 'На языке оригинала', 'Самые новые', 'Самые популярные'],
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterState>) {
            if (Object.keys(action.payload).length) {
                state.categoryId = Number(action.payload.categoryId);
                state.searchValue = action.payload.searchValue;
                state.filters = action.payload.filters;
            }
        }
    }
});

export const { setCategoryId, setSearchValue, setFilters } =
    filterSlice.actions;

export default filterSlice.reducer;
