import './full.scss';
import Slider from '../../../components/Slider/slider';
import Rating from '../../../components/Rating/Rating';
import Collapse from '../../../components/Collapse/Collapse'

// Page location avec 
// - slider
// - titre
// - lieu
// - nom et photo du propriétaire
// - tags tourisme / type de location
// - notation
// - descriptions du location
// - équipements proposés
//
// appel au composant SLIDER
// appel au composant COLLAPSE

   function Full({location}) {
      console.log(location.title)
   return ( 
      <>
         {/*si des images existent pour ce location les affichés*/}
         {location.pictures && <Slider images={location.pictures} />}

         <section className='locationContainer'>

            <div className='Infos'>
               <h1 className='Title'>{location.title}</h1>
               <p className='Text'>{location.location}</p>
               {/*création des tags contenu dans le tableau JSONsi des images existent pour ce location les affichés*/}
               <ul className='TagUl'>
                  {location.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>
            {/*création de mentions propriétaire*/}
            <div className='Owner'>
               <div className='Description'>
                  <p className='Name'>{location.host.name}</p>
                  <img className='Img' src={location.host.picture} alt={location.host.name} />
               </div>
               {/*appel composant notation*/}
               <Rating rating={location.rating} />
            </div>

         </section>
         
         <div className="locationCollapse">
					<div className="locationCollapseContainer">
                  {/*appel composant collapse*/}
                  <Collapse title={'Description'} content={location.description}/>
					</div>
					<div className="locationCollapseContainer">
                  {/*appel composant collapse*/}
						<Collapse title={'Équipements'} content={location.equipments}/>
					</div>
			</div>

      </>
  );
}


export default Full;