import './navbar.css'
import {type navpropslink } from '../utils/interfaces.ts';
import { NavLink } from 'react-router-dom';
function NavBar() {
const links:navpropslink={appname:"PokeDex", links:[{label:"Inicio", url:"/index"},
                         {label:"ListaPokemones", url:"/ListaPokemones"},
                         {label:"Favoritos", url:"/Favoritos"}]}

  return (<>
  <div className='navBar'>
    <div>
      <img src="src/assets/logo_pokemon-removebg-preview.png" alt="PokeDex Logo" className='logo'/>
    </div>
  <ul>{links.links.map((link) =>
  <li key={link.url}>
    <NavLink to={link.url}>{link.label}</NavLink>

  </li>,
  )}</ul>
  </div>
  </>
   )
}
 export default NavBar;