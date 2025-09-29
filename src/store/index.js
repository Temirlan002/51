import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/UsersSlice'


export const store = configureStore({
    reducer: {
        counterReducer,
        usersReducer
    }   
})