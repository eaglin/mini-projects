import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const DEFAULT_STATE = [
    {
    id:"1",
    name: "user1",
    email:"email1",
    github:"ema"
},
    {
    id:"2",
    name: "user2",
    email:"email2",
    github:"eva"
},
    {
    id:"3",
    name: "user3",
    email:"email3",
    github:"ela"
},
]
export type UserId = string
export interface User{
    name:string,
    email:string,
    github:string
}

export interface UserWithId extends User{
id:UserId
}


const initialState:UserWithId[] = (() => {
    const persitedState = localStorage.getItem("__user__list__")
    console.log(persitedState)
    return persitedState ?  JSON.parse(persitedState) : DEFAULT_STATE
})()
console.log(initialState)
export const userSlice = createSlice({

    name:'users',
    initialState:initialState,
    reducers:{
        deleteUserById:(state,action:PayloadAction<UserId>)=>{
            const id = action.payload
            return state.filter(user => user.id!==id)
            
        },

        createUser:(state,action:PayloadAction<User>)=>{
            const newUser:UserWithId = {...action.payload,
            id:`${crypto.randomUUID}`};
            
            const newState = [...state]
            newState.push(newUser)
            return newState;
            
        }
    }
})

export default userSlice.reducer 

export const {deleteUserById,createUser} = userSlice.actions