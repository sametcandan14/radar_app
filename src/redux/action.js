import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helpers/constant";
import axios from "axios";

export const getFlights= createAsyncThunk("flights/getFlight", async ()=> {
const res=await axios.request(options);
const newData= res.data.aircraft.map((flight)=>({
    id:flight[0],
    code:flight[1],
    lat:flight[2],
    lang:flight[3]
}))

return newData
})