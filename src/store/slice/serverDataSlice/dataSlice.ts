import { createSlice } from "@reduxjs/toolkit";

const serverData = createSlice({
    name: 'serverData',
    initialState: {
        allServerGenres: [],
        allServerCountries: [],
    },
    reducers: {
        setAllGenresFromServer: (state: any, action) => {
            state.allServerGenres = action.payload.value;
        },
        setAllCountriesFromServer: (state: any, action) => {
            state.allServerCountries = action.payload.value;
        },

    }
});


export const { setAllGenresFromServer, setAllCountriesFromServer, } = serverData.actions;
export default serverData.reducer;