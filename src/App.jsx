import './App.css'
import React, {useState} from 'react'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import { UserProvider } from '../context/UserContext'


function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <MovieList /> 
      </UserProvider>  
    </div>
  )
}

export default App
