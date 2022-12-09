import { createSlice } from "@reduxjs/toolkit";
import cl from "../../pages/Game/Game.module.scss";
import batman from "../../assets/images2/targets/batman.png";
import ironman from "../../assets/images2/targets/ironman.png";
import mc from "../../assets/images2/targets/MC.png";
import spiderman from "../../assets/images2/targets/spiderman.png";
import superman from "../../assets/images2/targets/superman.png";
import wolverine from "../../assets/images2/targets/wolverine.png";
import { createUser, getRating, sendRecord } from "../actions/logicActions";
import { randomGlass } from "../../utils";


const originTargets = [
  {
    target_id: 1,
    url: batman,
    role: "black",
    className: cl.first,
    die: cl.first_die,
    glass: randomGlass(),
  },
  {
    target_id: 2,
    url: mc,
    role: "black",
    className: cl.second,
    die: cl.second_die,
    glass: randomGlass(),
  },
  {
    target_id: 3,
    url: wolverine,
    role: "black",
    className: cl.third,
    die: cl.third_die,
    glass: randomGlass(),
  },
  {
    target_id: 5,
    url: ironman,
    role: "white",
    die: cl.fifth_die,
    className: cl.fifth,
    glass: randomGlass(),
  },
  {
    target_id: 6,
    url: spiderman,
    role: "white",
    className: cl.sixth,
    die: cl.sixth_die,
    glass: randomGlass(),
  },
  {
    target_id: 7,
    url: superman,
    role: "white",
    className: cl.seventh,
    die: cl.seventh_die,
    glass: randomGlass(),
  },
  

  // {
  //   target_id: 8,
  //   url: batman,
  //   role: "black",
  //   className: cl.first,
  //   die: cl.first_die,
  //   glass: randomGlass(),
  // },
  // {
  //   target_id: 9,
  //   url: mc,
  //   role: "black",
  //   className: cl.second,
  //   die: cl.second_die,
  //   glass: randomGlass(),
  // },
  // {
  //   target_id: 10,
  //   url: wolverine,
  //   role: "black",
  //   className: cl.third,
  //   die: cl.third_die,
  //   glass: randomGlass(),
  // },
  // {
  //   target_id: 11,
  //   url: ironman,
  //   role: "white",
  //   die: cl.fifth_die,
  //   className: cl.fifth,
  //   glass: randomGlass(),
  // },
  // {
  //   target_id: 12,
  //   url: spiderman,
  //   role: "white",
  //   className: cl.sixth,
  //   die: cl.sixth_die,
  //   glass: randomGlass(),
  // },
  // {
  //   target_id: 13,
  //   url: superman,
  //   role: "white",
  //   className: cl.seventh,
  //   die: cl.seventh_die,
  //   glass: randomGlass(),
  // },
];

const initialState = {
  loading: false,
  shootCount: 100,
  rating: [],
  game: "notStarted",
  user: {},
  targets: [...originTargets],
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
      state.game = "started";
    },
    removeTarget: (state, action) => {
      state.targets = state.targets.filter(
        (item) => item.target_id !== action.payload
      );
    },
    endGame: (state) => {
      state.game = "completed";
    },
    closedResModal: (state) => {
      state.game = "notStarted";
      state.shootCount = 100;
      state.targets = [...originTargets];
      state.user = {}
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload
    });
    builder.addCase(createUser.rejected, (state) => {
      state.loading = false;
    });
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
    builder.addCase(sendRecord.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendRecord.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(sendRecord.rejected, (state) => {
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
} = logicSlice.actions;
export default logicSlice.reducer;
