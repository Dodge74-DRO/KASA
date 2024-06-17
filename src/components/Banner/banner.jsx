import './banner.scss'

// Bannière : contien une image et un texte définit selon les PROPS transmis par la page à afficher (home ou about)

export default function Banner({ image, texte }) {
    return (
        <div className='bannerContainer'>
            <img className='img' src={image} alt='Paysage' />
            {texte !== "" && // si texte non vide, l'afficher
                <p className='text'>{texte}</p>
            }
        </div>
    )
} 