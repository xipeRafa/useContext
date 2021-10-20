import React, {useContext} from "react"
import UserContext from '../../context/UserContext';

const Navbar = () => {
      const {user} = useContext(UserContext)

      return (
            <nav>
                  <div className="container">
                        <span>{user ? `Hola ${user.name}` : 'Bienvenido' }</span>
                        <button>{user ? `cerrar sesion de ${user.name}` : 'login' }</button>
                  </div>
            </nav>
      )
}

export default Navbar
