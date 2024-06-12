import Banner from '../../components/Banner/banner';
import Collapse from '../../components/Collapse/Collapse'
import './about.scss';
import imgAboutBanner from '../../assets/banner-about.png'
import DataCollapse from '../../datas/about.json'
// ajout du lien vers page d'erreur sur la bannière
import { Link } from 'react-router-dom'


// Page à propos > Contient une bannière et renseignements sur Kasa
// récupère les éléments à transmettre pour la création des collapses dans DATAS/ABOUT.JSON 
//
// appel au composant BANNER : bannière avec image et texte si souhaité
// création des collapse : pour afficher ou masque les contenus 

function About() {
   return (
      <section className='aboutContainer'>
         <Link to="/Opps/">
            <Banner image={imgAboutBanner} texte="" />
         </Link>
         <div className="aboutCollapse">
         {DataCollapse.map(dataCollapse => {
					return (
                  <div className="aboutCollapseContainer">
                  <Collapse title={dataCollapse.title} content={dataCollapse.text}/>
                  </div>
					)}
				)}
         </div>
      </section>
   )
 }
 
 export default About