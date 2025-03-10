import { configureStore } from "@reduxjs/toolkit";
import overflowReducer from "./overflowSlice"
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        overflow: overflowReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();