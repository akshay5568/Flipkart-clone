import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     users : []
}


export const UsersReducer = createSlice ({
      name:"users",
      initialState,
        reducers:{
            addUsers :(state,action) => {
                 state.users = action.payload;
            }
        }
})


export const {addUsers} = UsersReducer.actions;
export default UsersReducer.reducer;

