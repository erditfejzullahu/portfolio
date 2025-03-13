import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TopbarState = {
    isTopbarVisible: boolean
}

const initialState: TopbarState = {
    isTopbarVisible: true,
}

const topbarSlice = createSlice({
    name: "topbar",
    initialState,
    reducers: {
        setTopbarVisible: (state, action: PayloadAction<boolean>) => {
            state.isTopbarVisible = action.payload
        }
    }
})

export const {setTopbarVisible} = topbarSlice.actions;
export default topbarSlice.reducer;