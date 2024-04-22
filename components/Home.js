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
    },
    {
      card: 'card1.jpeg', 
      picture: 'card1.jpeg',
      lastName: 'nom2',
      firstName: 'prénom2',
      description: 'Ceci est une description.2',
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
      <div>
        <p className='text-center text-2xl'>
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
        <div className='flex overflow-x-scroll border-2 border-black'>
          {artist}
        </div>
      </div>
    </div>
  );
};

export default Home;
