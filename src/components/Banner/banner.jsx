import './banner.scss'

// Bannière : contien une image et un texte définit selon les PROPS transmis par la page à afficher (home ou about)

function Banner({image,texte}) {
    return (
        <div className='bannerContainer'>
            <img className='bannerImg' src={image} alt='Paysage' /> 
            <p className='bannerText'>{texte}</p>
        </div>
   )
 }
 
 export default Banner