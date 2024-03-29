import { createSlice } from "@reduxjs/toolkit";
import { getRating, sendScrinResult } from "../actions/logicActions";
 
const initialState = {
  loading: false,
  shootCount: 0,
  rating: [],
  game: "notStarted",
  user: {},
  targets: [],
  shareModal: false,
  shareData: null,
};

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    setShareData:(state, action)=>{
      state.shareData = action.payload
    },
    setShareModal:(state, action)=>{
      state.shareModal = action.payload;
    },
    startedGame: (state) => {
      state.game = "started";
    },
    endGame: (state) => {
      state.game = "completed";
    },
    removeTarget: (state, action) => {
      state.targets = state.targets.filter((_, index) => index !== action.payload);
    },
    closedResModal: (state) => {
      state.game = "notStarted";
      state.shootCount = 0;
      state.targets = [];
      state.user = {};
    },
    setShootCount:(state, action)=>{
      state.shootCount = action.payload;
    },
    setTargetsFromBack:(state, action)=>{
      state.targets = action.payload;
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
    builder.addCase(sendScrinResult.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendScrinResult.fulfilled, (state, action) => {
      state.loading = false;
      state.shareData = action.payload
    });
    builder.addCase(sendScrinResult.rejected, (state) => {
      state.loading = false;
    });
    
  },
});

export const {
  setShareData,
  startedGame,
  removeTarget,
  endGame,
  closedResModal,
  setShootCount,
  setTargetsFromBack,
  setUser,
  setShareModal
} = logicSlice.actions;
export default logicSlice.reducer;
