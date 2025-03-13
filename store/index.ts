import { configureStore } from "@reduxjs/toolkit";
import overflowReducer from "./overflowSlice";
import topbarReducer from "./topbarSlice";
import { useDispatch } from "react-redux";
import triggerReducer from "./triggerModalSlice"

export const store = configureStore({
    reducer: {
        overflow: overflowReducer,
        topbar: topbarReducer,
        trigger: triggerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();