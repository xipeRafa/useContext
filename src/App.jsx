import './App.css'
import React, {useState} from 'react'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import UserContext from '../context/UserContext'

function App() {

  const initialUser = {
    id:1,
    name:'meme',
    isFavorite: [1,2,3]
  }
 
  const [user, setUser]=useState(initialUser)

  const login = () =>{
    setUser(initialUser)
  }
  
  const logOut = () =>{
    setUser(null)
  }

  const data = {
    user,
    login,
    logOut
  }

  return (
    <div className="App">
      <UserContext.Provider value={data}>
        <Navbar />
        <MovieList /> 
      </UserContext.Provider>  
    </div>
  )
}

export default App
