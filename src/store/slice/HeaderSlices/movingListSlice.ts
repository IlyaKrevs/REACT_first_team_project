import { createSlice } from "@reduxjs/toolkit";

const movingListSlice = createSlice({
    name: 'movingList',
    initialState: {
        movingItemPos: 0,
    },
    reducers: {
        setMovingItemPos: (state, action) => {
            state.movingItemPos = action.payload.value;
        },
        resetMovingItemPos: (state, action) => {
            state.movingItemPos = 0;
        }
    }
});


export const { setMovingItemPos, resetMovingItemPos } = movingListSlice.actions;
export default movingListSlice.reducer;