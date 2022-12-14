import { createSlice } from "@reduxjs/toolkit";
import { getRating } from "../actions/logicActions";
 
const initialState = {
  loading: false,
  shootCount: 0,
  rating: [],
  game: "notStarted",
  user: {},
  targets: [],
  isConnect: false,
};

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    startedGame: (state) => {
      state.game = "started";
    },
    removeTarget: (state, action) => {
      state.targets = state.targets.filter((_, index) => index !== action.payload);
    },
    endGame: (state) => {
      state.game = "completed";
    },
    closedResModal: (state) => {
      state.game = "notStarted";
      state.shootCount = 100;
      state.targets = [];
      state.user = {};
      state.targets = [];
    },
    setShootCount:(state, action)=>{
      state.shootCount = action.payload;
    },
    setTargetsFromBack:(state, action)=>{
      state.targets = action.payload;
    },
    setIsConnect:(state, action)=>{
      state.isConnect = action.payload;
    },
    setUser:(state, action)=>{
      state.user = action.payload;
    }
  },
  extraReducers: (builder)=>{
    builder.addCase(getRating.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRating.fulfilled, (state, action) => {
      state.loading = false;
      state.rating = action.payload
    });
    builder.addCase(getRating.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const {
  emptyFire,
  allyFire,
  startedGame,
  removeTarget,
  endGame,
  closedResModal,
  replenishment,
  setShootCount,
  setTargetsFromBack,
  setIsConnect,
  setUser
} = logicSlice.actions;
export default logicSlice.reducer;
