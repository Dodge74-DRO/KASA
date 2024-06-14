import './logement.scss'
import Card from './Card/Card'
import Full from './Full/Full'


// Composant CARD > Génère les cartes de présentations des locations dans la page home
// les éléments sont directement lus dans le tableau LOCATIONS.JSON

function Logement(props) {
   console.log(props,props.location.id,props.modeDisplay)
      if (props.modeDisplay === "card") {
         return (
            <Card location={props.location} />
         )
      } else { 
         <Full location={props.location} />
      }
}

export default Logement