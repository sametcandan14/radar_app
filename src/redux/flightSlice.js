import { createSlice } from "@reduxjs/toolkit";

const initialState={
    flights: [],
    isLoading: true,
    isError:false
}

const flightSlice= createSlice({
    name:"flight",
    initialState,
    reducers:{}
})

export default flightSlice.reducer;