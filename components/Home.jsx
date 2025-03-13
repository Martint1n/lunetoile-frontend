import PreOrderButton from "./PreOrderButton";
import ArtistCard from "./ArtistCard";
import Image from "next/image";
import Footer from "./Footer";
import { artistList } from "../constants/artistList";
import "../styles/Home.module.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="hero-background">
        <div className="flex flex-col justify-center items-center  px-4 sm:px-6 min-h-[80vh] pb-[10vh]">
          <div className="relative w-[180px] sm:w-[200px] h-[49px] 2xl:w-[360px] 2xl:h-[87px] mb-12 animate-fade-in">
            <Image src="/logo.svg" alt="Logo" layout="fill" priority />
          </div>
          <div className="font-cormorant text-[28px] sm:text-[32px] md:text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[65px] leading-[36px] sm:leading-[40px] md:leading-[48px] lg:leading-[58px] xl:leading-[68px] 2xl:leading-[75px] text-center animate-fade-in-up animation-delay-200">
            <span className="text-gold">PLUS QU'UN JEU DE CARTES</span>
          </div>
          <p className="body-s md:body-m lg:body-l xl:body-xl 2xl:body-2xl text-white text-center mt-8 mb-12 max-w-[90vw] sm:max-w-[80vw] 2xl:max-w-[800px] animate-fade-in-up animation-delay-300">
            Lunétoile est une œuvre collective qui réinvente l’imaginaire
            iconique des cartes à jouer.
          </p>
          <div className="relative z-10 mb-32 animate-fade-in-up animation-delay-500">
            <PreOrderButton
              color="bg-gold"
              text="text-black"
              hoverBg="hover:bg-white"
              hoverText="hover:text-black"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mt-[-25vh] md:mt-[-30vh] ">
        <div className="relative w-full aspect-[4/3] max-w-2xl self-center animate-scale-in">
          <Image
            alt="etui lunétoile"
            src="/Still-01-Hero-Site0001-1.webp"
            layout="fill"
            objectFit="contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="self-center animate-fade-in">
          <Image alt="etoile" src="/etoile.svg" width={24} height={24} />
        </div>
        <div className="text-center h2 pb-12 pt-12 px-[26px] animate-fade-in-up">
          <h2 className="font-cormorant text-[30px] leading-[36px] 2xl:text-[55px] 2xl:leading-[65px]">
            UNE COLLABORATION
            <span className="text-gold"> ARTISTIQUE</span>
            <br />
            EXCEPTIONNELLE
          </h2>
        </div>

        <p className="body-m lg:body-l xl:body-xl 2xl:body-2xl text-center px-4 sm:px-6 mb-12 w-[90vw] sm:w-[80vw] 2xl:w-[60vw] 2xl:self-center animate-fade-in-up animation-delay-200 mx-auto">
          Signé par 82 artistes de la scène tattoo francilienne, Lunétoile est
          une constellation d’univers artistique.
          <br />
          Chaque carte est le reflet d'une vision singulière, au service d'une
          direction artistique unique, créant une harmonieuse diversité.
        </p>
        <ArtistCard artists={artistList} />
        <div className="flex justify-center animate-fade-in-up animation-delay-200 my-24">
          <PreOrderButton color="bg-black" text="text-white" />
        </div>
      </div>
      <div className="hero-background flex flex-col-reverse md:flex-row">
        <div className="flex flex-col flex-1 px-4 sm:px-8 py-12 2xl:w-1/2 2xl:justify-center 2xl:pr-20 relative z-10 order-1 2xl:order-2 animate-fade-in-up gap-8 md:ml-12">
          <Image
            src="/list-symboles.svg"
            width={200}
            height={48}
            className="w-[200px] sm:w-[250px]"
            alt="game symbols"
          />
          <div className="font-cormorant text-[26px] sm:text-[30px] md:text-[36px] lg:text-[45px] xl:text-[55px] 2xl:text-[61px] leading-[32px] sm:leading-[36px] md:leading-[42px] lg:leading-[52px] xl:leading-[65px] 2xl:leading-[74px] text-white">
            UNE EXPANSION DE <span className="text-gold">L'IMAGINAIRE</span>
          </div>
          <p className="body-s md:body-m lg:body-l xl:body-xl 2xl:body-2xl text-white 2xl:max-w-[500px]">
            54 cartes traditionnelles (Pique, Trèfle, Cœur, Carreau) sont
            rejoints par 27 cartes inédites réparties en deux nouvelles
            enseignes : <strong>Lune</strong> et <strong>Étoile</strong>.
            <br />
            Les cartes de Lune et d'Étoile enrichissent le jeu classique,
            symbolisant la volonté de repousser les limites au-delà des codes et
            des conventions.
          </p>
          <PreOrderButton
            color="bg-gold"
            text="text-black"
            hoverBg="hover:bg-white"
            hoverText="hover:text-black"
          />
        </div>
        <div className="flex flex-1 translate-y-24 -mt-24 md:mt-0 md:translate-y-0 md:scale-125 md:mr-12">
          <Image
            src="/display-2-2.webp"
            alt="scattered cards display desktop"
            loading="lazy"
            height={700}
            width={700}
            className="object-cover object-right"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-24 sm:my-32 2xl:my-48 animate-fade-in-up px-8">
        <Image
          src="/lune.svg"
          width={48}
          height={48}
          alt="moon icon"
          className="text-gold my-8"
        />
        <div className="font-cormorant font-bold tracking-wide text-center text-[30px] leading-[36px] 2xl:text-[55px] 2xl:leading-[65px]">
          <div className=" ">
            UN MOYEN ORIGINAL DE SOUTENIR ET DÉCOUVRIR LA SCÈNE TATOUAGE LOCALE
            <p className="text-2xl mt-4">
              10% de réduction chez les tatoueurs du catalogue
            </p>
            <p className="2xl:inline-block mt-12 transform scale-[0.95]">
              UNE NOUVELLE EXPÉRIENCE DE JEU VOUS ATTEND.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <PreOrderButton color="bg-black" text="text-white" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row animate-fade-in h-[75vh]">
        <div className="relative w-screen h-full">
          <Image
            alt="carte 6 d'etoile"
            src="/deck6.png"
            layout="fill"
            objectFit="cover"
            quality={80}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
          />
        </div>
        <div className="relative w-screen h-full">
          <Image
            alt="eventail de cartes"
            src="/9cards.webp"
            layout="fill"
            objectFit="cover"
            quality={80}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row animate-fade-in-up items-end">
        <div className="flex flex-col items-center xl:items-start px-6 sm:px-12 pt-12 xl:w-[50vw] 2xl:w-[40vw] xl:justify-center my-8">
          <div className="mb-8">
            <Image src="/coeur.svg" width={48} height={48} alt="heart icon" />
          </div>
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="font-cormorant text-[26px] sm:text-[30px] md:text-[36px] lg:text-[45px] xl:text-[55px] 2xl:text-[61px] leading-[32px] sm:leading-[36px] md:leading-[42px] lg:leading-[52px] xl:leading-[65px] 2xl:leading-[74px]">
              UNE ÉDITION LIMITÉE PREMIUM ET ÉCO-CONÇUE
            </h2>
            <div className="flex flex-col gap-4 items-center 2xl:items-start mb-12">
              <div className="body-m text-[14px] leading-[20px] 2xl:text-[16px] xl:leading-[22px] pl-0 text-left ">
                La production est assurée en France en tirage ultra limité, avec
                une exigence constante de qualité et de respect de
                l'environnement à toutes les étapes.
                <br />
                <br />
                Chaque exemplaire est accompagné d’une carte d'authenticité
                numérotée à la main.
                <br />
                <br />
                <strong>Bonus de précommande</strong>
                <ul className="list-disc mb-4 ml-4">
                  <li>Livraison gratuite</li>
                  <li>Carte d’authenticité numérotée à la main</li>
                </ul>
              </div>
              <PreOrderButton color="bg-black" text="text-white" />
            </div>
          </div>
        </div>
        <div className="relative w-screen pb-[78%] xl:w-[50vw] 2xl:w-[60vw] xl:pb-[47.5%] 2xl:mt-8">
          <Image
            src="/group.webp"
            layout="fill"
            objectFit="contain"
            alt="group photo"
            className="grayscale object-bottom"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>
      <div className="">
        <div className="relative w-screen pb-[80%] -mt-1 2xl:pb-[45%]">
          <Image
            alt="eventail de carte 3D"
            src="/imgbottom.webp"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
