import styles from '../styles/Home.module.css';
import PreOrderButton from './PreOrderButton';
import Header from './Header'
import Artist from './Artist';
import Stripe from './Stripe'
import Image from 'next/image'




function Home() {

  const artistList = [
    //à lier avec la database ArtistGallery
    {
      card: 'yanncard.svg', 
      picture: 'yann.svg',
      firstName: 'Yann',
      pseudo: '@arsene.ariel', //doit etre clikable
      description: 'Ceci est une description.',
      key: 1,
    },
    {
      card: 'alicecard.svg', 
      picture: 'alice.svg',
      firstName: 'Alice',
      pseudo: '@lullaby.ttt',
      description: 'Ceci est une description.2',
      key: 2,
    },
    {
      card: 'damiencard.svg', 
      picture: 'damien.svg',
      firstName: 'Damien',
      pseudo: '@kaolin.ttt',
      description: 'Ceci est une description.3',
      key: 3,
    },
    {
      card: 'agathecard.svg', 
      picture: 'agathe.svg',
      firstName: 'Agathe',
      pseudo: '@poupeekipikdamour',
      description: 'Ceci est une description.4',
      key: 4,
    },
    {
      card: 'leacard.svg', 
      picture: 'lea.svg',
      firstName: 'Léa',
      pseudo: '@leclair_ttt',
      description: 'Ceci est une description.5',
      key: 5,
    },
    {
      card: 'martincard.svg', 
      picture: 'martin.svg',
      firstName: 'Martin',
      pseudo: '@10.tattoo',
      description: 'Ceci est une description.6',
      key: 6,
    },
    {
      card: 'zoecard.svg', 
      picture: 'zoe.svg',
      firstName: 'Zoé',
      pseudo: '@zozita.slowpoke',
      description: 'Ceci est une description.7',
      key: 7,
    },
    {
      card: 'inacard.svg', 
      picture: 'ina.svg',
      firstName: 'Ina',
      pseudo: '@aim_dessire',
      description: 'Ceci est une description.8',
      key: 8,
    },
  ];

  const artist = artistList.map(data => {
    return (
      <Artist card={data.card} picture={data.picture} pseudo={data.pseudo} firstName={data.firstName} description={data.description}/>
    )
  });



  return (
    <div>
      <Header />
      <div className='bg-darkBlue h-[80vh] '>
        <div className='flex flex-col justify-around items-center h-[60vh]'>
          <Image src='/logo.svg' width={200} height={49}/>
          <div className='text-white text-center text-[42px] leading-[51px]'> <span className='text-gold'>
          LE JEU DE <br />
          CARTES</span> <br />
          TRADITONNEL <br />
          MODERNE !
          </div>
          <p className='text-lg'>
            <span className='text-lightGrey'>Réinventez vos classiques avec un jeu 
              de cartes traditionnel modernisé. 
              Sans nouvelles règles à apprendre,
              enrichissez vos parties avec </span><span className='text-white'>54 cartes
              traditionnelles
              et 26 cartes Lune et Etoile
              exclusives.</span>
          </p>
          <PreOrderButton />
        </div>
      </div>
      <div className='h-[120vh] flex flex-col justify-around border-2 border-black'>
        <div className='relative w-screen h-1/3 -mt-40 border-2'>
          <Image src='/display-1.png' layout='fill'/>
        </div>
        <Image src='/etoile.svg' width={24} height={24}/>
        <p className='text-center text-3xl pb-10 pt-10'>
          UNE COLLABORATION<br />
          <span className='text-gold'>ARTISTIQUE</span><br />
          EXCEPTIONNELLE
        </p>

        <p className='text-lg'>
          Art et Tatouage se rencontre dans
          cette <span className='font-bold'>collaboration unique avec plus
          de 80 artistes tatoueurs franciliens. </span>
          Chaque carte est une fenêtre ouverte
          sur une multitude de styles et vision,
          offrant plus qu'un jeu : une véritable
          galerie d'art portable.
        </p>
        <div className='h-[50vh] flex overflow-x-scroll scrollbar-thin scrollbar-webkit'>
          {artist}
        </div>
        <div className='w-screen pt-5 pb-5 flex justify-center'>
          <PreOrderButton />
        </div>
      </div>
      <div className='bg-darkBlue h-[90vh]'>
          <div className='pt-8 pl-[26px]'>
            <Image src='/list-symboles.svg' width={250} height={60}/> 
          </div>
          <p className='text-white text-3xl'>
            JOUEZ A LA <span className='text-gold'>VERSION
            LUNETOILE</span> DE VOS
            JEUX PRÉFÉRÉS
          </p>
          <p className='text-white pt-5 pb-5'>
            lorem<br />
            lorem<br />
            lorem<br />
            lorem<br />
            lorem
          </p>
          <div className='w-screen pl-[26px]'>
          <PreOrderButton />
        </div>
          <div className='relative w-screen h-1/2'>
          <Image src='/display-2.png' layout='fill'/> 
          </div>
      </div>
      <div className='flex flex-col justify-center items-center h-[50vh]'>
        <Image src='/lune.svg' width={24} height={24}/>
        <p className='text-3xl text-center pb-5 pt-10'>
          ARTISTIQUE, LUDIQUE,<br />
          UNIQUE<br />
          UNE NOUVELLE<br />
          EXPERIENCE DE JEU<br />
          VOUS ATTEND.
        </p>
        <PreOrderButton />
      </div>
      <div className=''>
        <div className='relative w-screen h-[40vh]'>
          <Image src='/deck6.svg' layout='fill' objectFit="cover"/> 
        </div>
      </div>
      <div className=''>
        <div className='relative w-screen h-[40vh]'>
          <Image src='/img-2.svg' layout='fill' objectFit="cover"/> 
        </div>
      </div>
      <div className='flex items-start pl-[24px] pt-10'>
        <Image src='/coeur.svg' width={24} height={24}/>
        <div className='flex flex-col justify-around'>
          <p  className='text-3xl'>
          SOUTENEZ L'ART,<br />
          JOUEZ A<br />
          LUNETOILE.<br />
          <span className='text-gold'>SIMPLE & UNIQUE !</span>
          </p>
          <p className='pt-10 pb-10'>
            <span className='font-bold'>Précommandez votre jeu dès<br />
            maintenant</span> et plongez dans<br />
            une galerie d'art portable.<br />
            LUNETOILE n'est pas juste un<br />
            jeu, c'est une expérience à<br />
            patarrger, une pièce d'art à<br />
            collectionner
          </p>
          <PreOrderButton />
        </div>
        </div>
        <div className=''>
        <div className='relative w-screen h-[40vh]'>
          <Image src='/group.svg' layout='fill' objectFit="cover"/> 
        </div>
      </div>
      <div className=''>
        <div className='relative w-screen h-[40vh]'>
          <Image src='/imgbottom.svg' layout='fill' objectFit="cover"/> 
        </div>
      </div>
      <footer className='flex flex-col justify-end items-center pt-3 pb-3'>
        <Image src='/logoblack.svg' width={144} height={35}/>
        <p className='text-center text-sm'>
          conditions générales de vente <br />
          Mentions légales <br />
          Confidentialité <br />
          Copyright Lunétoile 2024
        </p>
      </footer>
    </div>
  );
};

export default Home;
