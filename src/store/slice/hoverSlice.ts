import { createSlice } from "@reduxjs/toolkit";
import { textSpanContainsPosition } from "typescript";

const hoverSlice = createSlice({
    name: 'hover',
    initialState: {
        currentState: ''
    },
    reducers: {
        setCurrentHover: (state, action) => {
            state.currentState = action.payload.value
        },
    }
});


export const { setCurrentHover } = hoverSlice.actions;
export default hoverSlice.reducer;