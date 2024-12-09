import PreOrderButton from './PreOrderButton';
import ArtistCard from './ArtistCard';
import Image from 'next/image';
import Footer from './Footer';
import { artistList } from '../constants/artistList';
import Navbar from './Navbar';

function Home() {

  return (
    <div className='overflow-x-hidden'>
      <div className='bg-darkBlue min-h-[90vh] 2xl:min-h-screen'>
        <div className='flex flex-col justify-center items-center min-h-[90vh] 2xl:h-screen px-4 sm:px-6'>
          <div className='relative w-[180px] sm:w-[200px] h-[49px] 2xl:w-[360px] 2xl:h-[87px] mb-12 animate-fade-in'>
            <Image 
              src='/logo.svg' 
              alt="Logo"
              layout="fill" 
              objectFit="contain" 
              priority
            />
          </div>
          <div className='font-cormorant text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[65px] leading-[36px] sm:leading-[40px] md:leading-[48px] lg:leading-[58px] xl:leading-[68px] 2xl:leading-[75px] text-center animate-fade-in-up animation-delay-200'>
            <div className='hidden 2xl:block'>
              <span className='text-gold'>
                LE JEU DE CARTES<br />
              </span>
              <span className='text-white whitespace-nowrap'>
                TRADITIONNEL MODERNE !
              </span>
            </div>
            <div className='2xl:hidden'>
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
          <p className='body-s md:body-m lg:body-l xl:body-xl 2xl:body-2xl text-white text-center mt-8 mb-12 max-w-[90vw] sm:max-w-[80vw] 2xl:max-w-[800px] animate-fade-in-up animation-delay-300'>
            <span className='2xl:hidden'>
              Réinventez vos classiques avec un jeu<br />
              de cartes traditionnel modernisé.<br />
              Sans nouvelles règles à apprendre,<br />
              enrichissez vos parties avec <span className='font-bold'>54 cartes<br />
              traditionnelles<br />
              et 26 cartes Lune et Étoile<br />
              exclusives.</span>
            </span>
            <span className='hidden 2xl:block'>
              Réinventez vos classiques avec un jeu de cartes traditionnel modernisé.<br />
              Sans nouvelles règles à apprendre, enrichissez vos parties avec<br />
              <span className='font-bold'> 54 cartes traditionnelles et 26 cartes Lune et Étoile exclusives.</span>
            </span>
          </p>
          <div className='relative z-10 mb-32 animate-fade-in-up animation-delay-500'>
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
        <div className='w-full flex flex-col mt-[-15vh] sm:mt-[-20vh] 2xl:mt-[-30vh]' style={{ background: 'linear-gradient(to bottom, rgb(12, 12, 17) 50%, white 50%)' }}>
          <div className='relative w-full aspect-[4/3] sm:w-[80%] self-center 2xl:w-1/2 animate-scale-in'>
            <Image src='/Still-01-Hero-Site0001-1.webp' layout='fill' objectFit="contain" quality={85} sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
        <div className='self-center animate-fade-in'>
          <Image src='/etoile.svg' width={24} height={24}/>
        </div>
        <div className='text-center h2 pb-12 pt-12 px-[26px] animate-fade-in-up'>
          <h2 className='font-cormorant text-[30px] leading-[36px] 2xl:text-[55px] 2xl:leading-[65px]'>
            UNE COLLABORATION
            <span className='text-gold'> ARTISTIQUE</span><br />
            EXCEPTIONNELLE
          </h2>
        </div>

        <p className='body-m lg:body-l xl:body-xl 2xl:body-2xl text-center px-4 sm:px-6 mb-12 w-[90vw] sm:w-[80vw] 2xl:w-[60vw] 2xl:self-center animate-fade-in-up animation-delay-200'>
          Art et Tatouage se rencontrent dans cette <span className='font-bold'>collaboration unique avec plus de 80 artistes tatoueurs franciliens</span>.
          <br />
          Chaque carte est une fenêtre ouverte sur une multitude de styles et visions, offrant plus qu'un jeu : une véritable galerie d'art portable.
        </p>
        <ArtistCard artists={artistList} />
        <div className='w-screen flex justify-center -mt-20 animate-fade-in-up animation-delay-200'>
          <div className='w-1/2 flex justify-center pt-5 pb-5 2xl:w-1/4 2xl:self-center'>
            <PreOrderButton color="bg-black" text="text-white" />
          </div>
        </div>
      </div>
      <div className='bg-darkBlue min-h-[85vh] w-screen flex flex-col 2xl:flex-row'>
        <div className='flex flex-col px-4 sm:px-8 py-12 2xl:w-1/2 2xl:justify-center 2xl:pr-20 relative z-10 order-1 2xl:order-2 animate-fade-in-up'>
          <div className='flex justify-center mb-8 2xl:justify-start'>
            <Image src='/list-symboles.svg' width={200} height={48} className='w-[200px] sm:w-[250px]' alt="game symbols"/> 
          </div>
          <div className='font-cormorant text-[26px] sm:text-[30px] md:text-[36px] lg:text-[45px] xl:text-[55px] 2xl:text-[61px] leading-[32px] sm:leading-[36px] md:leading-[42px] lg:leading-[52px] xl:leading-[65px] 2xl:leading-[74px] text-center 2xl:text-left text-white'>
            JOUEZ À LA VERSION <span className='text-gold'>LUNÉTOILE</span> DE VOS<br />
            JEUX PRÉFÉRÉS
          </div>
          <p className='body-s md:body-m lg:body-l xl:body-xl 2xl:body-2xl text-white text-center 2xl:text-left mt-8 mb-12 2xl:max-w-[500px]'>
            Au côté des 54 cartes traditionnelles (Pique, Trèfle, Cœur, Carreau) viennent s'ajouter <span className='font-bold'>27 cartes inédites</span> réparties en deux nouvelles enseignes : Lune et Étoile.<br /><br />
            Les cartes de Lune et d'Étoile enrichissent le jeu classique, symbolisant la volonté de repousser les limites au-delà des codes et des conventions.
          </p>
          <div className='flex justify-center 2xl:justify-start'>
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
        <div className='relative w-screen h-[400px] 2xl:h-[110%] 2xl:w-1/2 order-2 2xl:order-1 translate-y-20 2xl:-mb-[5%] -mb-[15%] animate-scale-in animation-delay-200'>
          <div className='block 2xl:hidden relative w-full h-full'>
            <Image 
              src='/display-2.webp'
              fill
              alt="scattered cards display mobile"
              className='object-contain'
              sizes="100vw"
              quality={85}
              loading="lazy"
            /> 
          </div>
          <div className='hidden 2xl:block relative w-full h-full'>
            <Image 
              src='/display-2-2.webp'
              width={800}
              height={600}
              alt="scattered cards display desktop"
              className='object-contain'
              quality={85}
              loading="lazy"
            /> 
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center my-24 sm:my-32 2xl:my-48 animate-fade-in-up'>
        <div className='max-w-[1200px] w-full flex flex-col items-center gap-6 sm:gap-8 2xl:gap-16 px-4 sm:px-8'>
          <Image 
            src='/lune.svg' 
            width={24} 
            height={24} 
            alt="moon icon"
            className='text-gold mb-8'
          />
          <div className='font-cormorant font-bold tracking-wide text-center'>
            <div className='text-[min(7vw,32px)] sm:text-[min(5.5vw,61px)] 2xl:text-[min(4.5vw,61px)] leading-[1.2]'>
              ARTISTIQUE, LUDIQUE, UNIQUE
              <br className='2xl:hidden'/>
              <br className='2xl:hidden'/>
              <span className='2xl:hidden'>UNE NOUVELLE<br/>
              EXPÉRIENCE DE JEU<br/>
              VOUS ATTEND.</span>
              <span className='hidden 2xl:inline-block mt-8 whitespace-nowrap transform scale-[0.95]'>
                UNE NOUVELLE EXPÉRIENCE DE JEU VOUS ATTEND.
              </span>
            </div>
          </div>
          <div className='mt-8'>
            <PreOrderButton color="bg-black" text="text-white" />
          </div>
        </div>
      </div>
      <div className='2xl:flex animate-fade-in'>
        <div className='relative w-screen pb-[105.56%] sm:pb-[90%] 2xl:w-[50vw] 2xl:pb-[50%]'>
          <Image src='/deck6.webp' layout='fill' objectFit="cover" quality={80} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"/> 
        </div>
        <div className='relative w-screen pb-[105.56%] 2xl:w-[50vw] 2xl:pb-[50%]'> 
          <Image src='/9cards.webp' layout='fill' objectFit="cover" quality={80} loading="lazy" sizes="(max-width: 768px) 100vw, 50vw"/> 
        </div>
      </div>
      
      <div className='flex flex-col 2xl:flex-row animate-fade-in-up'>
        <div className='flex flex-col items-center 2xl:items-start px-6 sm:px-12 pt-12 2xl:w-[40vw] 2xl:justify-center'>
          <div className='mb-8'>
            <Image src='/coeur.svg' width={24} height={24} alt="heart icon"/>
          </div>
          <div className='flex flex-col gap-6 sm:gap-8'>
            <h2 className='font-cormorant font-bold text-[36px] sm:text-[42px] md:text-[48px] lg:text-[55px] xl:text-[61px] 2xl:text-[61px] leading-[44px] sm:leading-[51px] 2xl:leading-[74px] text-center 2xl:text-left'>
              SOUTENEZ L'ART,<br />
              JOUEZ À <br className='2xl:hidden' />
              LUNÉTOILE.<br />
              <span className='text-gold font-bold'>SIMPLE & UNIQUE !</span>
            </h2>
            <div className='flex flex-col gap-4 items-center 2xl:items-start'>
              <p className='body-m text-[14px] leading-[20px] 2xl:text-[16px] 2xl:leading-[22px] pl-0 text-center 2xl:text-left'>
                <span className='font-bold'>Précommandez votre jeu dès maintenant</span> et plongez dans
                une galerie d'art portable. LUNÉTOILE n'est pas juste un 
                jeu, c'est une expérience à partager, une pièce d'art à
                collectionner.
              </p>
              <div className='w-1/2 2xl:w-1/4 mb-[15px]'>
                <PreOrderButton color="bg-black" text="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className='relative w-screen pb-[78%] 2xl:w-[60vw] 2xl:pb-[47.5%]'>
          <Image 
            src='/group.webp' 
            layout='fill' 
            objectFit="contain" 
            alt="group photo"
            className='grayscale'
            quality={80}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 60vw"
          /> 
        </div>
      </div>
      <div className=''>
        <div className='relative w-screen pb-[80%] -mt-1 2xl:pb-[45%]'>
          <Image src='/imgbottom.webp' layout='fill' objectFit="cover"/> 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
