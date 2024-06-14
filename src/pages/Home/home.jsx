import Banner from '../../components/Banner/banner';
import Logement from '../../components/Logement/Logement';
import imgHomeBanner from '../../assets/banner-home.png';
import DataLocation from '../../datas/locations.json'


// Page d'accueil > Contient une bannière, la galerie des locations proposées
//
// appel au composant BANNER : bannière avec image et texte si souhaité
// appel au composant CARD   : création des cartes des locations 
//

function Home() {
   return (
      <div className='homeContainer'>
         <Banner image={imgHomeBanner} texte="Chez vous, partout et ailleurs" />
         <div className='homeGaleryCards'>
            <section className='cardsContainer'>
               {DataLocation.map((location) => (
                  <Logement modeDisplay="card" location={location} />
               ))}
            </section>
         </div>
      </div>
   )
 } 
 export default Home