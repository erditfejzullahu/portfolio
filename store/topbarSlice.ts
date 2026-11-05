import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TopbarState = {
    isTopbarVisible: boolean
    activeDialogs: string[]
}

const initialState: TopbarState = {
    isTopbarVisible: true,
    activeDialogs: [],
}

const topbarSlice = createSlice({
    name: "topbar",
    initialState,
    reducers: {
        setTopbarVisible: (state, action: PayloadAction<boolean>) => {
            state.isTopbarVisible = action.payload
        },
        setDialogOpen: (state, action: PayloadAction<{ id: string; isOpen: boolean }>) => {
            const { id, isOpen } = action.payload

            if (isOpen && !state.activeDialogs.includes(id)) {
                state.activeDialogs.push(id)
            } else if (!isOpen) {
                state.activeDialogs = state.activeDialogs.filter((dialogId) => dialogId !== id)
            }
        }
    }
})

export const {setTopbarVisible, setDialogOpen} = topbarSlice.actions;
export default topbarSlice.reducer;