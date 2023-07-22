import { User, UserId, UserWithId, createUser } from "../store/users/slice";
import { useAppDispatch } from "./store"

export const useUserActions = ()=>{

    const dispatch = useAppDispatch();

    const removeUser = (userId:UserId) => {
        dispatch(removeUser(userId))

    }

    const addUser =(user:User) => {
        dispatch(createUser(user))

    }

    return {removeUser,addUser}
 }