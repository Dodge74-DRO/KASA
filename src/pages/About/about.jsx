import Banner from '../../components/Banner/banner';
import Collapse from '../../components/Collapse/Collapse'
import './about.scss';
import imgAboutBanner from '../../assets/banner-about.png'
import DataCollapse from '../../datas/about.json'
// ajout du lien vers page d'erreur sur la bannière

// Page à propos > Contient une bannière et renseignements sur Kasa
// récupère les éléments à transmettre pour la création des collapses dans DATAS/ABOUT.JSON 
//
// appel au composant BANNER : bannière avec image et texte si pas vider
// création des collapse : pour afficher ou masque les contenus 

export default function About() {
   return (
      <section className='aboutContainer'>
         <Banner image={imgAboutBanner} texte="" />
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