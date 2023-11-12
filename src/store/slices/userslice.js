import { createSlice } from "@reduxjs/toolkit"


const userSLice =  createSlice(
    {
        name: 'user',
        initialState:null,
        reducers:{
            // reducer function

            addUser: (state, action) => {
                return action.payload;
            },
            removeUser: (state, action) => {
                return null;
            }
        }
    }
)
export const {addUser, removeUser} = userSLice.actions;
export  default userSLice.reducer;
