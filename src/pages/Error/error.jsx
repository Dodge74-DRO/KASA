import { Link } from 'react-router-dom'
import './error.scss' 

// Page erreur 404 si une page n'existe pas !!!

function Error() {
   return (
      <div className='errorContainer'>
         <h1 className='TitleError'>404</h1>
         <p className='TextError'>Oups 🙈 La page que vous demandez n'existe pas..</p>
         <Link to="/">
         <p className='LinkError'>Retourner sur la page d’accueil</p>
         </Link>
      </div>
   )
 }
 
 export default Error