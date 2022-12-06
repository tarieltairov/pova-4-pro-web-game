import { createSlice } from "@reduxjs/toolkit";
import cl from "../../pages/Game/Game.module.scss";
import first from "../../assets/images/targets/target_1.jpg";
import second from "../../assets/images/targets/target_2.jpg";
import third from "../../assets/images/targets/target_3.jpg";
import fourth from "../../assets/images/targets/target_4.jpg";
import fifth from "../../assets/images/targets/target_5.jpg";
import sixth from "../../assets/images/targets/target_6.jpg";
import seventh from "../../assets/images/targets/target_7.jpg";

const originTargets = [
  {
    target_id: 1,
    url: first,
    role: "black",
    className: cl.first,
    die: cl.first_die,
    glass: 10,
  },
  {
    target_id: 2,
    url: second,
    role: "black",
    className: cl.second,
    die: cl.second_die,
    glass: 8,
  },
  {
    target_id: 3,
    url: third,
    role: "black",
    className: cl.third,
    die: cl.third_die,
    glass: 5,
  },
  {
    target_id: 4,
    url: fourth,
    role: "black",
    die: cl.fourth_die,
    className: cl.fourth,
    glass: 7,
  },
  {
    target_id: 5,
    url: fifth,
    role: "white",
    die: cl.fifth_die,
    className: cl.fifth,
    glass: 8,
  },
  {
    target_id: 6,
    url: sixth,
    role: "white",
    className: cl.sixth,
    die: cl.sixth_die,
    glass: 10,
  },
  {
    target_id: 7,
    url: seventh,
    role: "white",
    className: cl.seventh,
    die: cl.seventh_die,
    glass: 5,
  },
];

const initialState = {
  shootCount: 0,
  rating: [],
  game: false,
  user: null,
  targets: [],
};

const logicSlice = createSlice({
  name: "logic",
  initialState,
  reducers: {
    emptyFire: (state, action) => {
      state.shootCount = state.shootCount + action.payload;
    },
    allyFire: (state, action) => {
      state.shootCount = state.shootCount - action.payload;
    },
    startedGame: (state) => {
      state.game = true;
      state.targets = [...originTargets]
    },
    createUser: (state, action) => {
      state.user = action.payload;
    },
    removeTarget: (state, action) => {
      state.targets = state.targets.filter(
        (item) => item.target_id !== action.payload
      );
    },
    endGame: (state) => {
      state.game = false;
    },
  },
  extraReducers: {},
});

export const {
  emptyFire,
  allyFire,
  startedGame,
  createUser,
  removeTarget,
  endGame,
} = logicSlice.actions;
export default logicSlice.reducer;
