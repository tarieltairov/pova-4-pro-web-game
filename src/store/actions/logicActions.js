import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const baseUrl = process.env.REACT_APP_API_URL


export const createUser = createAsyncThunk(
  "logic/createUser",
  async (userName, thunkApi) => {
    try {
      const { data } = await axios.post(`${baseUrl}/user/create`, { name: userName });
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const getRating = createAsyncThunk(
  "logic/getRating",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`${baseUrl}/user/get-all`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const sendRecord = createAsyncThunk(
  "logic/sendRecord",
  async (record, thunkApi) => {
    try {
      const { data } = await axios.post(`${baseUrl}/user/create/rating`, record);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
