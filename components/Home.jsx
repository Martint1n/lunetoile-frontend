import PreOrderButton from './PreOrderButton';
import ArtistCard from './ArtistCard';
import Image from 'next/image';
import Footer from './Footer';
import { artistList } from '../constants/artistList';
import Navbar from './Navbar';

function Home() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className='bg-darkBlue min-h-[90vh] lg:min-h-screen'>
        <div className='flex flex-col justify-center items-center min-h-[90vh] lg:h-screen px-6'>
          <div className='relative w-[200px] h-[49px] lg:w-[360px] lg:h-[87px] mb-10 animate-fade-in'>
            <Image 
              src='/logo.svg' 
              alt="Logo"
              layout="fill" 
              objectFit="contain" 
            />
          </div>
          <div className='font-cormorant text-[32px] leading-[40px] lg:text-[65px] lg:leading-[75px] text-center animate-fade-in-up animation-delay-200'>
            <div className='hidden lg:block'>
              <span className='text-gold'>
                LE JEU DE CARTES<br />
              </span>
              <span className='text-white whitespace-nowrap'>
                TRADITIONNEL MODERNE !
              </span>
            </div>
            <div className='lg:hidden'>
              <span className='text-gold'>
                LE JEU DE<br />
                CARTES<br />
              </span>
              <span className='text-white'>
                TRADITIONNEL<br />
                MODERNE !
              </span>
            </div>
          </div>
          <p className='body-s lg:body-m text-white text-center mt-6 mb-8 lg:max-w-[800px] animate-fade-in-up animation-delay-300'>
            <span className='lg:hidden'>
              Réinventez vos classiques avec un jeu<br />
              de cartes traditionnel modernisé.<br />
              Sans nouvelles règles à apprendre,<br />
              enrichissez vos parties avec <span className='font-bold'>54 cartes<br />
              traditionnelles<br />
              et 26 cartes Lune et Étoile<br />
              exclusives.</span>
            </span>
            <span className='hidden lg:block'>
              Réinventez vos classiques avec un jeu de cartes traditionnel modernisé.<br />
              Sans nouvelles règles à apprendre, enrichissez vos parties avec<br />
              <span className='font-bold'> 54 cartes traditionnelles et 26 cartes Lune et Étoile exclusives.</span>
            </span>
          </p>
          <div className='relative z-10 mb-24 animate-fade-in-up animation-delay-500'>
            <PreOrderButton 
              color="bg-gold" 
              text="text-black" 
              hoverBg="hover:bg-white" 
              hoverText="hover:text-black"
            />
          </div>
        </div>
      </div>
      <div className='h-[200vh] w-screen flex flex-col justify-between -mt-1'>
        <div className='w-full flex flex-col mt-[-15vh] lg:mt-[-30vh]' style={{ background: 'linear-gradient(to bottom, rgb(12, 12, 17) 50%, white 50%)' }}>
          <div className='relative w-full aspect-[4/3] self-center lg:w-1/2 animate-scale-in'>
            <Image src='/Still-01-Hero-Site0001-1.webp' layout='fill' objectFit="contain" />
          </div>
        </div>
        <div className='self-center animate-fade-in'>
          <Image src='/etoile.svg' width={24} height={24}/>
        </div>
        <div className='text-center h2 pb-10 pt-10 px-[26px] animate-fade-in-up'>
          <h2 className='font-cormorant text-[30px] leading-[36px] lg:text-[55px] lg:leading-[65px]'>
            UNE COLLABORATION
            <span className='text-gold'> ARTISTIQUE</span><br />
            EXCEPTIONNELLE
          </h2>
        </div>

        <p className='body-m lg:body-l text-center px-6 lg:w-[60vw] lg:self-center animate-fade-in-up animation-delay-200'>
          Art et Tatouage se rencontrent dans cette <span className='font-bold'>collaboration unique avec plus de 80 artistes tatoueurs franciliens</span>.
          <br />
          Chaque carte est une fenêtre ouverte sur une multitude de styles et visions, offrant plus qu'un jeu : une véritable galerie d'art portable.
        </p>
        <ArtistCard artists={artistList} />
        <div className='w-screen flex justify-center -mt-20 animate-fade-in-up animation-delay-200'>
          <div className='w-1/2 flex justify-center pt-5 pb-5 lg:w-1/4 lg:self-center'>
            <PreOrderButton color="bg-black" text="text-white" />
          </div>
        </div>
      </div>
      <div className='bg-darkBlue min-h-[85vh] w-screen flex flex-col lg:flex-row'>
        <div className='flex flex-col px-6 py-8 lg:w-1/2 lg:justify-center lg:pr-20 relative z-10 order-1 lg:order-2 animate-fade-in-up'>
          <div className='flex justify-center mb-6 lg:justify-start'>
            <Image src='/list-symboles.svg' width={250} height={60} alt="game symbols"/> 
          </div>
          <div className='font-cormorant text-[30px] leading-[36px] lg:text-[61px] lg:leading-[74px] text-center lg:text-left text-white'>
            JOUEZ À LA VERSION <span className='text-gold'>LUNÉTOILE</span> DE VOS<br />
            JEUX PRÉFÉRÉS
          </div>
          <p className='body-s lg:body-m text-white text-center lg:text-left mt-6 mb-8 lg:max-w-[500px]'>
            Au côté des 54 cartes traditionnelles (Pique, Trèfle, Cœur, Carreau) viennent s'ajouter <span className='font-bold'>27 cartes inédites</span> réparties en deux nouvelles enseignes : Lune et Étoile.<br /><br />
            Les cartes de Lune et d'Étoile enrichissent le jeu classique, symbolisant la volonté de repousser les limites au-delà des codes et des conventions.
          </p>
          <div className='flex justify-center lg:justify-start'>
            <div className=''>
              <PreOrderButton 
                color="bg-gold" 
                text="text-black" 
                hoverBg="hover:bg-white" 
                hoverText="hover:text-black"
              />
            </div>
          </div>
        </div>
        <div className='relative w-screen h-[400px] lg:h-[110%] lg:w-1/2 order-2 lg:order-1 translate-y-20 lg:-mb-[5%] -mb-[15%] animate-scale-in animation-delay-200'>
          <div className='block lg:hidden relative w-full h-full'>
            <Image 
              src='/display-2.webp'
              fill
              alt="scattered cards display mobile"
              className='object-contain'
              sizes="100vw"
            /> 
          </div>
          <div className='hidden lg:block relative w-full h-full'>
            <Image 
              src='/display-2-2.webp'
              width={800}
              height={600}
              alt="scattered cards display desktop"
              className='object-contain'
            /> 
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center my-24 lg:my-40 animate-fade-in-up'>
        <div className='max-w-[1200px] w-full flex flex-col items-center gap-6 lg:gap-16 px-6'>
          <Image 
            src='/lune.svg' 
            width={24} 
            height={24} 
            alt="moon icon"
            className='text-gold mb-4'
          />
          <div className='font-cormorant text-[32px] leading-[1.2] lg:text-[min(4.5vw,61px)] lg:leading-[1.2] text-center font-medium w-full max-w-[320px] lg:max-w-none'>
            <div className='hidden lg:block space-y-4 font-bold tracking-wide'>
              <div className='flex flex-col items-center'>
                <div className='text-[min(4.5vw,61px)]'>ARTISTIQUE, LUDIQUE, UNIQUE</div>
                <div className='mt-8 text-[min(4.5vw,61px)] whitespace-nowrap transform scale-[0.95]'>UNE NOUVELLE EXPÉRIENCE DE JEU VOUS ATTEND.</div>
              </div>
            </div>
            <div className='lg:hidden flex flex-col items-center gap-2'>
              <div className='font-bold text-[min(5.5vw,61px)] tracking-wide'>
                ARTISTIQUE, LUDIQUE,<br />
                UNIQUE<br />
                UNE NOUVELLE<br />
                EXPÉRIENCE DE JEU<br />
                VOUS ATTEND.
              </div>
            </div>
          </div>
          <div className='mt-8'>
            <PreOrderButton color="bg-black" text="text-white" />
          </div>
        </div>
      </div>
      <div className='lg:flex animate-fade-in'>
        <div className='relative w-screen pb-[105.56%] lg:w-[50vw] lg:pb-[50%]'>
          <Image src='/deck6.webp' layout='fill' objectFit="cover"/> 
        </div>
        <div className='relative w-screen pb-[105.56%] lg:w-[50vw] lg:pb-[50%]'> 
          <Image src='/9cards.webp' layout='fill' objectFit="cover"/> 
        </div>
      </div>
      
      <div className='flex flex-col lg:flex-row animate-fade-in-up'>
        <div className='flex flex-col items-center lg:items-start px-10 pt-6 lg:w-[40vw] lg:justify-center'>
          <div className='mb-4'>
            <Image src='/coeur.svg' width={24} height={24} alt="heart icon"/>
          </div>
          <div className='flex flex-col gap-4 lg:gap-6'>
            <h2 className='font-cormorant font-bold text-[42px] leading-[51px] lg:text-[61px] lg:leading-[74px] text-center lg:text-left'>
              SOUTENEZ L'ART,<br />
              JOUEZ À <br className='lg:hidden' />
              LUNÉTOILE.<br />
              <span className='text-gold font-bold'>SIMPLE & UNIQUE !</span>
            </h2>
            <div className='flex flex-col gap-4 items-center lg:items-start'>
              <p className='body-m text-[14px] leading-[20px] lg:text-[16px] lg:leading-[22px] pl-0 text-center lg:text-left'>
                <span className='font-bold'>Précommandez votre jeu dès maintenant</span> et plongez dans
                une galerie d'art portable. LUNÉTOILE n'est pas juste un 
                jeu, c'est une expérience à partager, une pièce d'art à
                collectionner.
              </p>
              <div className='w-1/2 lg:w-1/4'>
                <PreOrderButton color="bg-black" text="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-screen pb-[78%] lg:w-[60vw] lg:pb-[47.5%]'>
          <Image 
            src='/group.webp' 
            layout='fill' 
            objectFit="contain" 
            alt="group photo"
            className='grayscale'
          /> 
        </div>
      </div>
      <div className=''>
        <div className='relative w-screen pb-[80%] -mt-1 lg:pb-[45%]'>
          <Image src='/imgbottom.webp' layout='fill' objectFit="cover"/> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
