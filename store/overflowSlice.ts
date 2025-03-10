import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OverflowState = {
    isOverflowHidden: boolean;
}

const initialState: OverflowState = {
    isOverflowHidden: false,
}

const overflowSlice = createSlice({
    name: "overflow",
    initialState,
    reducers: {
        setOverflowHidden: (state, action: PayloadAction<boolean>) => {
            state.isOverflowHidden = action.payload;
        }
    }
})

export const {setOverflowHidden} = overflowSlice.actions;
export default overflowSlice.reducer;