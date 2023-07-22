import { useEffect, useState } from 'react'
import './App.css'
import { type User } from './types'

import UsersTable from './components/UsersTable'

const URL_REQUEST = 'https://randomuser.me/api/?results='

function App () {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch(`${URL_REQUEST}100`)
      .then(async body => await body.json())
      .then(json => {
        setUsers(json.results)
      })
      .catch(erro => { console.log(erro) })
  }, [])
  return <UsersTable initialUsers={users}/>
}

export default App
