import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom";

import "./Nav.css";
const Nav = ()=>{
  const {_id, roles} = useSelector((state)=>state.security);
  const currentLocation = useLocation();
  if (_id) {
    return (
      <nav>
        <ul>
          {/* <li>
            <NavLink
              to='/pacientes'
              className={currentLocation.pathname === '/pacientes' ? 'active' : ''}
            >
              Pacientes
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to='/libros'
              className={currentLocation.pathname === '/libros' ? 'active' : ''}
            >
              Libros
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/empleados'
              className={currentLocation.pathname === '/empleados' ? 'active' : ''}
            >
              Empleados
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clientes'
              className={currentLocation.pathname === '/clientes' ? 'active' : ''}
            >
              Clientes
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to='/fichas'
              className={currentLocation.pathname === '/fichas' ? 'active' : ''}
            >
              Fichas
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to='/todos'
              className={currentLocation.pathname === '/todos' ? 'active' : ''}
            >
              Fichas
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            className={currentLocation.pathname === '/'?'active':''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'
            className={currentLocation.pathname === '/login' ? 'active' : ''}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={currentLocation.pathname === '/signin' ? 'active' : ''}
          >
            Signin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
