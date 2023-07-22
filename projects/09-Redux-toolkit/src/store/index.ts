import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users/slice"

const persistanceLocalStorage = (store) => (next)=>(action) => {

    console.log(store.getState().user)
    next(action)
    localStorage.setItem("__user__list__",JSON.stringify(store.getState().user))
}
export const store = configureStore({
    reducer:{
        user:usersReducer
    },
    middleware:[persistanceLocalStorage]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>