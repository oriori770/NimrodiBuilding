import { createSlice } from "@reduxjs/toolkit";
interface IFloorState {
    floorAccess: [boolean, boolean, boolean, boolean, boolean];
    
}

const initialState: IFloorState = {
    floorAccess: [false, false, false, false, false],

}

const FloorSlice = createSlice({
    name: 'Floor',
    initialState,
    reducers: {
        changeAccess: (state, action) => {
            state.floorAccess[action.payload] = !state.floorAccess[action.payload];
        },

    }
})

export const { changeAccess} = FloorSlice.actions
export default FloorSlice.reducer