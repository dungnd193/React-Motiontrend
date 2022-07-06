import { configureStore } from "@reduxjs/toolkit";
import HomePageSlice from "src/features/HomePage/store/homePageSlice";

const reducer = { HomePageSlice };
const store = configureStore({ reducer });
export function getStoreWithState(preloadedState?: RootState) {
  return configureStore({ reducer, preloadedState });
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
