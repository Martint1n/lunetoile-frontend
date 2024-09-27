import styles from '../styles/Home.module.css';
import PreOrderButton from './PreOrderButton';
import Header from './Header'
import Artist from './Artist';
import Image from 'next/image';

function Home() {

  const artistList = [
    //à lier avec la database ArtistGallery
    {
      card: 'yanncard.webp', 
      picture: 'yann.svg',
      firstName: 'Yann',
      pseudo: '@arsene.ariel', //doit etre clikable
      description: 'Ceci est une description.',
      key: 1,
    },
    {
      card: 'alicecard.webp', 
      picture: 'alice.svg',
      firstName: 'Alice',
      pseudo: '@lullaby.ttt',
      description: 'Ceci est une description.2',
      key: 2,
    },
    {
      card: 'damiencard.webp', 
      picture: 'damien.svg',
      firstName: 'Damien',
      pseudo: '@kaolin.ttt',
      description: 'Ceci est une description.3',
      key: 3,
    },
    {
      card: 'agathecard.webp', 
      picture: 'agathe.svg',
      firstName: 'Agathe',
      pseudo: '@poupeekipikdamour',
      description: 'Ceci est une description.4',
      key: 4,
    },
    {
      card: 'leacard.webp', 
      picture: 'lea.svg',
      firstName: 'Léa',
      pseudo: '@leclair_ttt',
      description: 'Ceci est une description.5',
      key: 5,
    },
    {
      card: 'martincard.webp', 
      picture: 'martin.svg',
      firstName: 'Martin',
      pseudo: '@10.tattoo',
      description: 'Ceci est une description.6',
      key: 6,
    },
    {
      card: 'zoecard.webp', 
      picture: 'zoe.svg',
      firstName: 'Zoé',
      pseudo: '@zozita.slowpoke',
      description: 'Ceci est une description.7',
      key: 7,
    },
    {
      card: 'inacard.webp', 
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
    <div className='overflow-x-hidden'>
      <div className='bg-darkBlue h-screen'>
        <div className='flex flex-col justify-around items-center h-[60vh]'>
          <div className='relative mt-10 pt-10 w-[200px] h-[49px] lg:w-[360px] lg:h-[87px]'>
            <Image 
              src='/logo.svg' 
              alt="Logo"
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <div className='text-white text-center text-[42px] leading-[51px] pt-10 pb-10 lg:text-[61px] lg:leading-[74px]'> <span className='text-gold'>
          LE JEU DE <br />
          CARTES</span> <br />
          TRADITONNEL <br />
          MODERNE !
          </div>
          <p className='text-white text-lg pb-10 lg:w-[60vw] lg:text-center'>
            Réinventez vos classiques avec un jeu 
            de cartes traditionnel modernisé. 
            Sans nouvelles règles à apprendre,
            enrichissez vos parties avec <span className='text-white font-bold'>54 cartes
            traditionnelles
            et 26 cartes Lune et Étoile
            exclusives.</span>
          </p>
          <div className='w-screen flex justify-center'>
            <div className='w-1/2 lg:w-1/4'>
              <PreOrderButton />
            </div>
          </div>
        </div>
      </div>
      <div className='h-[200vh] w-screen flex flex-col justify-between -mt-1'>
        <div className='w-full flex flex-col' style={{ background: 'linear-gradient(to bottom, rgb(12, 12, 17) 50%, white 50%)' }}>
          <div className='relative w-full aspect-[4/3] self-center lg:w-1/2'>
            <Image src='/Still-01-Hero-Site0001-1.webp' layout='fill' objectFit="contain" />
          </div>
        </div>
        <div className='self-center'>
          <Image src='/etoile.svg' width={24} height={24}/>
        </div>
        <div className='text-center text-3xl pb-10 pt-10 pl-[26px] pr-[26px]'>
          UNE COLLABORATION<br />
          <span className='text-gold'>ARTISTIQUE</span><br />
          EXCEPTIONNELLE
        </div>

        <p className='text-lg lg:w-[60vw] lg:text-center lg:self-center'>
          Art et Tatouage se rencontre dans
          cette <span className='font-bold'>collaboration unique avec plus
          de 80 artistes tatoueurs franciliens. </span>
          Chaque carte est une fenêtre ouverte
          sur une multitude de styles et vision,
          offrant plus qu'un jeu : une véritable
          galerie d'art portable.
        </p>
        <div className='h-[60vh] w-screen flex overflow-x-scroll scrollbar-thin scrollbar-webkit'>
          {artist}
        </div>
        <div className='w-screen flex justify-center'>
          <div className='w-1/2 pt-5 pb-5 lg:w-1/4 lg:self-center'>
            <PreOrderButton color='bg-midBlue' text='text-white' />
          </div>
        </div>
      </div>
      <div className='bg-darkBlue h-[90vh] w-screen flex flex-col lg:flex-row-reverse lg:h-[50vh]'>
        <div className=''>
          <div className='pt-8 pl-[26px]'>
            <Image src='/list-symboles.svg' width={250} height={60}/> 
          </div>
          <div className='text-white text-3xl pl-[26px] pr-[26px]'>
            JOUEZ A LA <span className='text-gold'>VERSION
            LUNETOILE</span> DE VOS
            JEUX PRÉFÉRÉS
          </div>
          <p className='text-white pt-5 pb-5'>
            lorem<br />
            lorem<br />
            lorem<br />
            lorem<br />
            lorem
          </p>
          <div className='pl-[26px] w-1/2 lg:w-2/5'>
            <PreOrderButton />
          </div>
        </div>
          <div className='relative w-screen h-1/2 lg:h-full lg:w-2/5 lg:-ml-20'>
            <Image src='/display-2-2.webp' layout='fill' unoptimized={false}/> 
          </div>
      </div>
      <div className='flex flex-col justify-center items-center h-[50vh]'>
        <Image src='/lune.svg' width={24} height={24}/>
        <div className='text-3xl text-center pb-5 pt-10 pl-[26px] pr-[26px]'>
          ARTISTIQUE, LUDIQUE,<br />
          UNIQUE<br />
          UNE NOUVELLE<br />
          EXPERIENCE DE JEU<br />
          VOUS ATTEND.
        </div>
        <div className='w-screen flex justify-center'>
          <div className='w-1/2 lg:w-1/4 '>
            <PreOrderButton color='bg-midBlue' text='text-white' />
          </div>
        </div>
      </div>
      <div className='lg:flex'>
        <div className='relative w-screen pb-[105.56%] lg:w-[50vw] lg:pb-[50%]'>
          <Image src='/deck-6-2.webp' layout='fill' objectFit="cover"/> 
        </div>
        <div className='relative w-screen pb-[105.56%] lg:w-[50vw] lg:pb-[50%]'> 
          <Image src='/9cards.webp' layout='fill' objectFit="cover"/> 
        </div>
      </div>
      
      <div className='flex flex-col lg:flex-row'>
      <div className='flex items-start pl-[24px] pt-10 lg:w-[40vw] lg:flex-col lg:justify-center'>
        <div className='lg:pl-[26px] lg:pb-10'>
          <Image src='/coeur.svg' width={24} height={24}/>
        </div>
        <div className='flex flex-col justify-around'>
          <div  className='text-3xl pl-[26px] pr-[26px]'>
          SOUTENEZ L'ART,
          JOUEZ A
          LUNETOILE. <br/>
          <span className='text-gold'>SIMPLE & UNIQUE !</span>
          </div>
          <p className='pt-10 pb-10'>
            <span className='font-bold'>Précommandez votre jeu dès<br />
            maintenant</span> et plongez dans<br />
            une galerie d'art portable. <br/>
            LUNETOILE n'est pas juste un <br/>
            jeu, c'est une expérience à<br/>
            patarrger, une pièce d'art à<br/>
            collectionner
          </p>
          <div className='w-screen flex justify-center lg:justify-start'>
            <div className='w-1/2 lg:w-1/4 pb-5 -ml-[24px] lg:ml-0'>
              <PreOrderButton color='bg-midBlue' text='text-white'/>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-screen pb-[78%] lg:w-[60vw] lg:pb-[47.5%]'>
        <Image src='/group.webp' layout='fill' objectFit="contain"/> 
      </div>
      </div>
      <div className=''>
        <div className='relative w-screen pb-[80%] -mt-1 lg:pb-[45%]'>
          <Image src='/imgbottom.webp' layout='fill' objectFit="cover"/> 
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
