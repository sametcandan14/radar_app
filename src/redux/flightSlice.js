import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./action";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFlights.fulfilled, (state, action) => {
      state.isLoading = false;
      state.flights = action.payload;
      state.isError = false;
    });

    builder.addCase(getFlights.rejected, (state) => {
      state.isLoading = false;
      state.isError = "Uçuş bilgilerini alırken bir hata oluştu.";
    });
  },
});

export default flightSlice.reducer;

/* 

 extraReducers:{
        [getFlights.pending]:(state)=> {
            state.isLoading=true
        },
        [getFlights.fulfilled]:(state,action)=> {
            state.isLoading=false;
            state.flights= action.payload;
            state.isError=false;    
        },
        [getFlights.rejected]:(state)=> {
            state.isLoading=false;
            state.isError="Uçuş verilerini alırken bir hata oluştu."
        }

    }


*/
