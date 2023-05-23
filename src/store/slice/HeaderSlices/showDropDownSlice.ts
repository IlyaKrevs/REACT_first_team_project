import { createSlice } from "@reduxjs/toolkit";

const showDropDownSlice = createSlice({
    name: 'hoverHeader',
    initialState: {
        currentType: '',
        currentPosition: '',
    },
    reducers: {
        setCurrentHover: (state, action) => {
            state.currentType = action.payload.value.currentType;
            state.currentPosition = action.payload.value.currentPosition;
        },
        resetCurrentHover: (state, action) => {
            state.currentType = '';
            state.currentPosition = '';
        }
    }
});


export const { setCurrentHover, resetCurrentHover } = showDropDownSlice.actions;
export default showDropDownSlice.reducer;