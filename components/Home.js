import styles from '../styles/Home.module.css';
import PreOrderButton from './PreOrderButton';
import Artist from './Artist';




function Home() {

  const artistList = [
    {
      card: 'card1.jpeg', 
      picture: 'card1.jpeg',
      lastName: 'nom',
      firstName: 'prénom',
      description: 'Ceci est une description.',
      key: 1,
    },
    {
      card: 'card1.jpeg', 
      picture: 'card1.jpeg',
      lastName: 'nom2',
      firstName: 'prénom2',
      description: 'Ceci est une description.2',
      key: 2,
    }
  ];

  const artist = artistList.map(data => {
    return (
      <Artist card={data.card} picture={data.picture} lastName={data.lastName} firstName={data.firstName} description={data.description}/>
    )
  });



  return (
    <div>
      <header className='bg-darkBlue flex justify-around items-center h-[5vh]'>
          <div>
            <img />
            <div className='text-white text-lg'>LUNETOILE</div>
          </div>
          <img src='./nav.svg' className='h-3'/> 
      </header>
      <div className='bg-darkBlue h-[80vh]'>
        <div className='flex flex-col justify-around items-center h-[60vh]'>
          <div className='text-white text-2xl'>LUNETOILE</div>
          <div className='text-white text-center text-3xl'> <span className='text-gold'>LE JEU DE <br />
          CARTES</span> <br />
          TRADITONNEL <br />
          MODERNE !</div>
          <p className='text-center'>
            <span className='text-lightGrey'>Réinventez vos classiques avec un jeu <br />
              de cartes traditionnel modernisé. <br />
              Sans nouvelles règles à apprendre, <br />
              enrichissez vos parties avec </span><span className='text-white'>54 cartes <br />
              traditionnelles <br />
              et 26 cartes Lune et Etoile <br />
              exclusives.</span>
          </p>
          <PreOrderButton />
        </div>
      </div>
      <div className='h-[120vh] flex flex-col justify-around items-center border-2 border-black'>
        <p className='mt-44  text-center text-2xl'>
          UNE COLLABORATION<br />
          <span className='text-gold'>ARTISTIQUE</span><br />
          EXCEPTIONNELLE
        </p>
        <p className='text-center'>
          Art et Tatouage se rencontre dans <br />
          cette <span className='font-bold'>collaboration unique avec plus<br />
          de 80 artistes tatoueurs franciliens.</span><br />
          Chaque carte est une fenêtre ouverte<br />
          sur une multitude de styles et vision,<br />
          offrant plus qu'un jeu : une véritable<br />
          galerie d'art portable.
        </p>
        <div className='h-[50vh] flex overflow-x-scroll scrollbar-thin scrollbar-webkit'>
          {artist}
        </div>
          <PreOrderButton />
      </div>
      <div className='bg-darkBlue h-[80vh]'>
        <div className='ml-8 flex flex-col justify-around h-3/4'>
          <p>ICONES</p>
          <p className='text-white'>
            JOUEZ A LA <span className='text-gold'>VERSION<br />
            LUNETOILE</span> DE VOS<br />
            JEUX PREFERES
          </p>
          <p className='text-white'>
            lorem<br />
            lorem<br />
            lorem<br />
            lorem<br />
            lorem
          </p>
          <PreOrderButton />
        </div>
      </div>
      <div className='flex flex-col items-center h-[50vh]'>
        <p>
          ARTISTIIQUE, LUDIQUE<br />
          UNIQUE<br />
          UNE NOUVELLE<br />
          EXPERIENCE DE JEU<br />
          VOUS ATTEND.
        </p>
        <PreOrderButton />
      </div>
      <div className='h-[40vh] bg-darkBlue text-white'>
        background ace of spades
      </div>
      <div className='h-[40vh]'>
        colibriiiiii
      </div>
      <div className='flex flex-col justify-around items-center h-[70vh] border-2 border-black'>
        <p>
        SOUTENEZ L'ART,<br />
        JOUEZ A<br />
        LUNETOILE.<br />
        <span className='text-gold'>SIMPLE & UNIQUE !</span>
        </p>
        <p>
          <span>Précommandez votre jeu dès<br />
          maintenant</span> et plongez dans<br />
          une galerie d'art portable.<br />
          LUNETOILE n'est pas juste un<br />
          jeu, c'est une expérience à<br />
          patarrger, une pièce d'art à<br />
          collectionner
        </p>
        <PreOrderButton />
        </div>
      <footer className='h-[60vh] flex flex-col justify-end items-center'>
        <p>LUNETOILE</p>
        <p className='text-center'>
          conditions générales de vente <br />
          mentions légales <br />
          Confidentialité
        </p>
      </footer>
    </div>
  );
};

export default Home;
