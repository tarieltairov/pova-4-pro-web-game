import { configureStore } from "@reduxjs/toolkit";
import logic from "./slices/logicSlices";

const rootReducer = {
  logic
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
