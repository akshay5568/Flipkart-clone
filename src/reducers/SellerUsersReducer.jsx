import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    sellUsers : []
}

export const SellUsersReducer = createSlice ({
    name:"sellUsers",
    initialState,
    reducers:{
        addSellUsers: (state , action ) => {
                state.sellUsers = action.payload;
        }
    }
})

export const {addSellUsers} = SellUsersReducer.actions;
export default SellUsersReducer.reducer;