import './logement.scss'
import Card from './Card/Card'
import Full from './Full/Full'


// Composant CARD > Génère les cartes de présentations des locations dans la page home
// les éléments sont directement lus dans le tableau LOCATIONS.JSON

export default function Logement({ modeDisplay, location }) {
   if (modeDisplay === "card") {
      return (
         <Card location={location} />
      )
   } else {
      return (
         <Full location={location} />
      )
   }
}