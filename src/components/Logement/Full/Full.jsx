import './full.scss';
import Slider from '../../../components/Slider/slider';
import Rating from '../../../components/Rating/Rating';
import Collapse from '../../../components/Collapse/Collapse'

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

   function Full(props) {

   return ( 
      <>
         {/*si des images existent pour ce logement les affichés*/}
         {props.location.pictures && <Slider images={props.location.pictures} />}

         <section className='locationContainer'>

            <div className='Infos'>
               <h1 className='Title'>{props.location.title}</h1>
               <p className='Text'>{props.location.location}</p>
               {/*création des tags contenu dans le tableau JSONsi des images existent pour ce logement les affichés*/}
               <ul className='TagUl'>
                  {props.location.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>
            {/*création de mentions propriétaire*/}
            <div className='Owner'>
               <div className='Description'>
                  <p className='Name'>{props.location.host.name}</p>
                  <img className='Img' src={props.location.host.picture} alt={props.location.host.name} />
               </div>
               {/*appel composant notation*/}
               <Rating rating={props.location.rating} />
            </div>

         </section>
         
         <div className="locationCollapse">
					<div className="locationCollapseContainer">
                  {/*appel composant collapse*/}
                  <Collapse title={'Description'} content={props.location.description}/>
					</div>
					<div className="locationCollapseContainer">
                  {/*appel composant collapse*/}
						<Collapse title={'Équipements'} content={props.location.equipments}/>
					</div>
			</div>

      </>
  );
}


export default Full;