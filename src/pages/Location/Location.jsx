import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './location.scss';
import Error from '../Error/Error';
import Slider from '../../components/Slider/slider';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse'
import DataLocation from '../../datas/locations.json';

// Page Logement avec 
// - slider
// - titre
// - lieu
// - nom et photo du propriétaire
// - tags tourisme / type de logement
// - notation
// - descriptions du logement
// - équipements proposés
//
// appel au composant SLIDER
// appel au composant COLLAPSE

function Location() {
   const [logement, setLocation] = useState(null); 
   const { id } = useParams(); // Récupère l'id du logement dans l'url (référence HREF créer dans le composant CARD)
// utilisation HOOK REACT pour futur FETCH lorsque le BACKEND sera opérationnel
   useEffect(() => {  // Récupère les infos du logement selon l'id transmis
      const data = DataLocation.find(location => location.id === id); //rechercher dans le tableau la location choisie
      if (data) {                                                     // si existe
      setLocation(data);
   } else { 
      setLocation(null);                                              // reinitialisation de la zone si pas trouvé !
   }
   }, [id]);                                                          // useEffect se ré-exécutera si ID change

   if (!logement) { // Si l'id n'existe pas, affiche la page d'erreur
      return (<Error />);
   }

   return ( 
      <>
         {/*si des images existent pour ce logement les affichés*/}
         {logement.pictures && <Slider images={logement.pictures} />}

         <section className='locationContainer'>

            <div className='Infos'>
               <h1 className='Title'>{logement.title}</h1>
               <p className='Text'>{logement.location}</p>
               {/*création des tags contenu dans le tableau JSONsi des images existent pour ce logement les affichés*/}
               <ul className='TagUl'>
                  {logement.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>
            {/*création des mentions propriétaire*/}
            <div className='Owner'>
               <div className='Description'>
                  <p className='Name'>{logement.host.name}</p>
                  <img className='Img' src={logement.host.picture} alt={logement.host.name} />
               </div>
               {/*appel composant notation*/}
               <Rating rating={logement.rating} />
            </div>

         </section>
         
         <div className="locationCollapse">
					<div className="locationCollapseContainer">
                  {/*appel composant collapse*/}
                  <Collapse title={'Description'} content={logement.description}/>
					</div>
					<div className="locationCollapseContainer">
                  {/*appel composant collapse*/}
						<Collapse title={'Équipements'} content={logement.equipments}/>
					</div>
			</div>

      </>
  );
}


export default Location;