import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({children})=>{

      const initialState = {
            id:1,
            name:'miguelito',
            isFavorite:[1,2,3]
      }

      const [user, setUser]=useState(initialState)

      const login = () =>{
            setUser(initialState)
      }

      const logOut = () =>{
            setUser(null)
      }

      const data = {
            user,
            login, 
            logOut
      }

      return(
            <UserContext.Provider value={data}>
                  {children}
            </UserContext.Provider>
      )
}

export {UserProvider}
export default UserContext