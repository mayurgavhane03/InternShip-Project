import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',//name of the slice
    initialState:{//initial state of the slice is empty items
        items: {},
        totalItemsCount: 0,
    },

    /* 
    
    State: This is the initial data or the current representation of your application's data. 
    It could be an object, an array, or any other data structure that holds your application's data.

    Action: This is the data that's coming in and is used to describe what changes need to be made to 
    the state. An action is typically an object with a type property that defines the action type 
    (what kind of change) and may include additional data (payload) to provide the necessary information 
    for that change. 
    
    */
    reducers:{
        addItem: (state, action) => {
            const item = state.items[action.payload.id];
            const quantity =
              item && item.hasOwnProperty("quantity")
                ? state.items[action.payload.id]?.quantity + 1
                : 1;
            state.items[action.payload.id] = { ...action.payload, quantity };
            state.totalItemsCount = state.totalItemsCount + 1;
          },
          removeItem: (state, action) => {
            const item = state.items[action.payload];
            if (!item) return;
            if (item.quantity > 1) {
              item.quantity -= 1;
              state.totalItemsCount--;
            } else {
              state.totalItemsCount--;
              delete state.items[action.payload];
            }
          },
          clearCart: (state) => {
            state.items = {};
            state.totalItemsCount = 0;
          },
    },
})

//we also ahave to export actions
export const { addItem,removeItem,clearCart} = cartSlice.actions;

//it combine all the reducers and create one reducer for each
export default cartSlice.reducer; //this is how we export
















/* 
    create Store
        - configureStore() - rtk

    provide my store to app

        <Provider store = { store }  - import from react redux


    Slice 

    - rtk - createSlice({
        name: "",
        intialState:

        reducers: {
            #actions

            addItem: (state, action) => {state=action.payload}
        }
    })

    redux  ==>>  It is a way to trigger changes in the application's state. 
                   Redux is a popular state management library for React

    Dispatch: Dispatching an action means sending it to the store or state management system. 
             In Redux, you use the dispatch function provided by the store to dispatch actions:

    Dispatching actions allows you to manage and update the application's state in a predictable and centralized manner. 

    Action: An action is a plain JavaScript object that describes a change in the application's state. 
            It typically has a type property that indicates the type of action and may contain 
            additional data payload. 
            
    State Update: When you dispatch an action, the reducer function processes it, and based on the 
                    action type, it returns a new state object. React then re-renders your components 
                    with the updated state, reflecting the changes in your UI.


    # i wll have to export actions
     const {addItems, removeItems} = cartSlice.actions;

    export default cartSlice.reducer;



    put that SLice into Store

        - {
            reducer:{
                cart: cart: cartSlice,
                 user: userSLice, 
                 
            }
        }
*/