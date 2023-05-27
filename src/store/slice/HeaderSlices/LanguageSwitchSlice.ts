import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
    name: 'languageSwitch',
    initialState: {
        isRussian: true,
    },
    reducers: {
        toggleLanguage: (state, action) => {
            state.isRussian = !state.isRussian;
        },
    }
});


export const { toggleLanguage, } = LanguageSlice.actions;
export default LanguageSlice.reducer;
