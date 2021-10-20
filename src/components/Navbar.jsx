import React, {useContext} from "react"
import UserContext from '../../context/UserContext';

const Navbar = () => {
      const {user, login, logOut} = useContext(UserContext)

      return (
            <nav>
                  <div className="container">
                        <span>{user ? `Hola ${user.name}` : 'Bienvenido' }</span>

                        {
                              user 
                                    ?<button onClick={logOut}>
                                     cerrar sesion
                                     </button>
                                    :<button onClick={login}>
                                          iniciar sesion
                                     </button>      
                        }
                  </div>
            </nav>
      )
}

export default Navbar
