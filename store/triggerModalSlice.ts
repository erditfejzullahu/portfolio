import { PortfolioSliderInterface } from "@/data/navigations";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TriggerState {
    data: PortfolioSliderInterface | null;
    shouldTrigger: boolean;
}

const initialState: TriggerState = {
    data: null,
    shouldTrigger: false
}

const triggerSlice = createSlice({
    name: "trigger",
    initialState,
    reducers: {
        setTriggerData: (state, action: PayloadAction<PortfolioSliderInterface>) => {
            state.data = action.payload;
            state.shouldTrigger = true;
        },
        resetTrigger: (state) => {
            state.shouldTrigger = false;
            state.data = null;
        }
    }
})

export const {setTriggerData, resetTrigger} = triggerSlice.actions;
export default triggerSlice.reducer;