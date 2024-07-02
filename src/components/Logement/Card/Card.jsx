import { Link } from 'react-router-dom'
import './card.scss'

// Composant CARD > Génère les cartes de présentations des locations dans la page home

export default function Card({location}) {
   return (
      <Link to={`/location/${location.id}`} key={location.id} >
      <figure className='card'>
         {/* création de lien URL si click sur image avec href=/location/location.id */}
         {/* ex /location/c67ab8a7c   l'ID sera récupéré dans l'URL par compost FULL */}
            <img className='img' src={location.cover} alt={location.title}/>
         <div className='gradient'></div>          
         <figcaption className='title'>{location.title}</figcaption>
      </figure>
      </Link>
   )
}