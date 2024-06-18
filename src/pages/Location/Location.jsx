import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './location.scss';
import Error from '../Error/Error';
import DataLocation from '../../datas/locations.json';
import Logement from '../../components/Logement/Logement';


// Page Location
// récupère les éléments d'un logement pour affichage en plein écran
// - appel de la fonction LOGEMENT en mode FULL

export default function Location() {
   const [location, setLocation] = useState(null);
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

   if (!location) { // LOCATION.JSX Si l'id n'existe pas, affiche la page d'erreur
      return (<Error />);
   }

   return (
      <>
         <Logement modeDisplay="full" location={location} />
      </>
   );
}