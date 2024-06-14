import { Link } from 'react-router-dom'
import './card.scss'

// Composant CARD > Génère les cartes de présentations des locations dans la page home
// les éléments sont directement lus dans le tableau LOCATIONS.JSON

function Card(props) {
   return (
      <figure className='card'>
         {/* création de lien si click sur image avec href=/location/location.id  ex /location/c67ab8a7c */}
         <Link to={`/location/${props.location.id}`} key={props.location.id} >
            <img className='img' src={props.location.cover} alt={props.location.title}/>
            <div className='gradient'></div>          
            <figcaption className='title'>{props.location.title}</figcaption>
         </Link>
      </figure>
   )
}
export default Card