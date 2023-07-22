import React, { useEffect, useState } from 'react'
import { type ID, type User } from '../types'
import FilterHeader from './Filter'
import './usersTable.css'

interface PropsTable {
  initialUsers: User[]
}

const UsersTable: React.FC<PropsTable> = ({ initialUsers }) => {
  const [users, setUsers] = useState(initialUsers)
  const [color, setColor] = useState(false)
  const [sort, setSort] = useState(false)

  const changeColor = () => {
    console.log('Color: ', color)
    setColor(!color)
  }
  const sortCountry = () => {
    setSort(!sort)
  }
  const sortByName = () => {
    setUsers([...users].sort((a, b) => a.name.first.localeCompare(b.name.first)))
  }
  const sortBySecond = () => {
    setUsers([...users].sort((a, b) => a.name.last.localeCompare(b.name.last)))
  }
  const deleteUser = (userId: ID) => {
    setUsers(filteredUsers.filter(a => a.id !== userId))
    console.log(filteredUsers)
  }
  const resetUsers = () => {
    setUsers(initialUsers)
  }
  useEffect(() => {
    setUsers(initialUsers)
  }, [
    initialUsers
  ])
  const filterUsers = (filterValue: string) => {
    setUsers(users.filter(user => user.location.country.includes(filterValue)))
  }

  const filteredUsers = sort ? [...users].sort((a, b) => a.location.country.localeCompare(b.location.country)) : users

  return (
    <main>
    <FilterHeader resetUsers={resetUsers} filterUsers={filterUsers} handleClikc={changeColor} sortCountry={sortCountry}></FilterHeader>
    <table style={{ width: '100%' }}>
      <thead>
<tr>

              <td>Foto</td>
              <td onClick={sortByName}>Nombre</td>
              <td onClick={sortBySecond}>Apellidos</td>
              <td onClick={sortCountry}>Pais</td>

</tr>

      </thead>
    <tbody style={{ width: '100%' }}>

        {filteredUsers.map((user, index) =>
        <tr className={color ? (index % 2 > 0 ? 'impar' : 'par') : ''} key={user.login.uuid}>

                <td><img src={user.picture.thumbnail}/></td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td><button onClick={() => { deleteUser(user.id) }}>Borrar Usuario</button></td>

        </tr>)}

    </tbody>
</table>
</main>
  )
}

export default UsersTable
