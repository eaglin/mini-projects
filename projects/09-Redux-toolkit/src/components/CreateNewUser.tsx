import { Button, Card, TextInput, Title } from "@tremor/react"
import { User, createUser } from "../store/users/slice"
import { useState } from "react"
import { useAppDispatch } from "../hooks/store"

import {useUserActions} from "../hooks/useUserActions"
const CreateNewUser = () => {

    const {addUser} = useUserActions();
     const [userInfo, setUserInfo] = useState<User>({
        email:"",
        name:"",
        github:""
     })
     const dispatch = useAppDispatch()
     const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        if(userInfo)
        addUser(userInfo)
     }
  return (
    <Card>
        <Title>Crear Usuario</Title>
        <form className="" onSubmit={handleSubmit}>
        <TextInput placeholder="Nombre" value={userInfo?.name} onChange={(event =>{
            setUserInfo({...userInfo,name:event.target.value})
        })}>
        
        </TextInput>
        <TextInput placeholder="Email" value={userInfo?.email}  onChange={(event =>{
            setUserInfo({...userInfo,email:event.target.value})
        })}>

</TextInput>
<TextInput placeholder="GitHub" value={userInfo.github} onChange={(event =>{
            setUserInfo({...userInfo,github:event.target.value})
        })}>

</TextInput>
        <Button type="submit">
            Crear Usuario
        </Button>
        </form>
    </Card>
  )
}

export default CreateNewUser
