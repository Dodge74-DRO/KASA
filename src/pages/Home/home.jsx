import Banner from '../../components/Banner/banner';
import imgHomeBanner from '../../assets/banner-home.png';
import Card from '../../components/Card/card';

// Page d'accueil > Contient une bannière, la galerie des locations proposées
//
// appel au composant BANNER : bannière avec image et texte si souhaité
// appel au composant CARD   : création des cartes des locations 
//

function Home() {
   return (
      <section className='homeContainer'>
         <Banner image={imgHomeBanner} texte="Chez vous, partout et ailleurs" />
         <div className='homeGaleryCards'>
            <Card />
         </div>
      </section>
   )
 }
 
 export default Home