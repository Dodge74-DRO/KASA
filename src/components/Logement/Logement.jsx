import Card from './Card/Card'
import Full from './Full/Full'


// Composant LOGEMENT > Génère les CARDS de présentations des locations dans la page home
// et les pages FULL de présentation des logements

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