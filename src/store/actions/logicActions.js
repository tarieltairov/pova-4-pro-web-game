import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

// export const createUser = createAsyncThunk(
//   "logic/createUser",
//   async (newUser, thunkApi) => {
//     try {
//       const { data } = await axios.post(`${baseUrl}/user/create`, newUser);
//       return data;
//     } catch (e) {
//       return thunkApi.rejectWithValue(e.response.data.message[0]);
//     }
//   }
// );

export const getRating = createAsyncThunk(
  "logic/getRating",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(`${baseUrl}/user/get-all?page=1&limit=10`);
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

