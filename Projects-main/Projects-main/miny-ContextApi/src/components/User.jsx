import React, { useContext } from 'react'
import UserContext from '../Contextt/UserContext'

export default function User() {
    const {user} = useContext(UserContext)
  if(!user) return  <div>Plese login</div>
   return <h2>Welcome {user.username}</h2>
}
