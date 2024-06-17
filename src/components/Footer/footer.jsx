import { Link } from 'react-router-dom'
import './footer.scss'
import LogoFooter from '../../assets/logo-footer.png'

// FOOTER avec logo et texte (idem sur toutes les pages du site)

export default function Footer() {
   return (
      <footer className='footerContainer'>
         <Link to="/">
            <img className="logo" src={LogoFooter} alt='Logo de Kasa'/>
         </Link>
         <div className='textContain'>
            <p className='text'>© 2023 Kasa. All rights reserved</p>
         </div>
      </footer>
   )
 } 
