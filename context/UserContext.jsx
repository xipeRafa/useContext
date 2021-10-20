import React, { createContext, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({children})=>{

      const initialState = {
            id:1,
            name:'miguelito',
            isFavorite:[1,2]
      }

      const [user, setUser]=useState(initialState)

      const login = () =>{
            setUser(initialState)
      }

      const logOut = () =>{
            setUser(null)
      }

      const toggleFavoriteMovieToUser = Id =>{

                  const favorite = user.isFavorite.includes(Id);
                  const isFavorite = favorite
                        ? user.isFavorite.filter(el => el !== Id) // Delete
                        : [...user.isFavorite, Id] // Add
         
                  setUser({...user, isFavorite})
      }

      const data = {
            user,
            login, 
            logOut,
            toggleFavoriteMovieToUser
      }

      return(
            <UserContext.Provider value={data}>
                  {children}
            </UserContext.Provider>
      )
}

export {UserProvider}
export default UserContext