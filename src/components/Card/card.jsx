// IMPORTS
import { Link } from 'react-router-dom'
import './card.scss'

// ASSETS
import DataLocation from '../../datas/locations.json'


// Composant CARD > Génère les cartes de présentations des locations dans la page home
// les éléments sont directement lus dans le tableau LOCATIONS.JSON

function cardLocation() {
   return (
      <section className='cardsContainer'>
         {DataLocation.map((location) => (
               <figure className='card'>
               {/* création de lien si click sur image avec href=/location/location.id  ex /location/c67ab8a7c */}
                  <Link to={`/location/${location.id}`} key={location.id} >
                     <img className='img' src={location.cover} alt={location.title}/>
                     <div className='gradient'></div>          
                     <figcaption className='title'>{location.title}</figcaption>
                  </Link>
               </figure>
         ))}
      </section>
   )
}
export default cardLocation