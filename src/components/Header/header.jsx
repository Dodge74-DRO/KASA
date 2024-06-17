import { Link, NavLink } from 'react-router-dom'
import './header.scss'
import Logo from '../../assets/logo.png'

// HEADER avec logo et barre de navigation (idem sur toutes les pages du site) 
// sauf soulignement du lien de la page en cours

export default function Header() {
   return (
      <nav className='headerContainer'>
         <Link to="/">
            <img className='headerLogo' alt='Logo de kasa' src={Logo} />
         </Link>
         <div>
            <NavLink to="/" className='headerLink'>
               Accueil
            </NavLink>
            <NavLink to="/about" className='headerLink'>
               À Propos
            </NavLink>
         </div>
      </nav>
   )
}