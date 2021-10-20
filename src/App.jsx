import './App.css'
import Navbar from './components/Navbar'
import MovieList from './components/MovieList'
import UserContext from '../context/UserContext'

function App() {

  const user = {
    id:1,
    name:'luis',
    isFavorite: [1,2,3]
  }

  const data = {
    user
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
