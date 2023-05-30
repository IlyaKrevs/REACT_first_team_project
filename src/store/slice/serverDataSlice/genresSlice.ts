import { createSlice } from "@reduxjs/toolkit";

const serverDataGenres = createSlice({
    name: 'serverDataGenres',
    initialState: {
        allServerGenres: [],
    },
    reducers: {
        setAllGenresFromServer: (state: any, action) => {
            state.allServerGenres = action.payload.value;
        },

    }
});


export const { setAllGenresFromServer, } = serverDataGenres.actions;
export default serverDataGenres.reducer;