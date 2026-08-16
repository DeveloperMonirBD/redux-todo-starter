import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    priority: string;
}

const initialState: InitialState = {
    priority: ''
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {}
})

export default filtersSlice.reducer;