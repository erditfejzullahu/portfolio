import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FullscreenState = {
    isOpened: boolean;
    images: any[];
    imageIndex?: number;
}

const initialState: FullscreenState = {
    isOpened: false,
    images: [],
    imageIndex: 0
}

const fullscreenSlice = createSlice({
    name: "fullscreenImage",
    initialState,
    reducers: {
        setImageOpen: (state, action: PayloadAction<{images: any[]; imageIndex?: number}>) => {
            state.isOpened = true;
            state.images = action.payload.images;
            state.imageIndex = action.payload.imageIndex || 0;
        },
        setImageClose: (state) => {
            state.isOpened = false;
            state.images = [];
            state.imageIndex = 0;
        }
    }
})

export const {setImageOpen, setImageClose} = fullscreenSlice.actions;
export default fullscreenSlice.reducer;