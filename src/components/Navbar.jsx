const Navbar = () => {

      const user = {name:'meme'}

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
