import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import Stripe from "./Stripe";
// import { useDispatch } from 'react-redux';
// import { addPreorderInfoToStore } from '../reducers/preorderInfos';
import Image from "next/image";
import { Input } from "@nextui-org/react";
import Link from "next/link";

const PreorderForm = () => {
  const router = useRouter();
  const { artist } = router.query;
  // const dispatch = useDispatch();

  console.log("Artist Name:", artist);

  const [inputValues, setInputValues] = useState({
    lastName: "",
    firstName: "",
    email: "",
    city: "",
    address: "",
    zipCode: "",
    country: "",
    city: "",
    phoneNumber: "",
  });

  const adressMailTest = [
    "test@gmail.com",
    "zozita.slowpoke@gmail.com",
    "guilbertmartin75@gmail.com",
    "maatatouage@gmail.com",
    "lunacramesnil@gmail.com",
    "maya.sermonne@gmail.com",
    "julius.tatouage@gmail.com",
    "alclaudetattoo@gmail.com",
    "dicedicedicer@gmail.com",
    "darkaleid@gmail.com",
    "lema.tatouage@gmail.com",
    "wynonamaret@gmail.com",
    "damien-cordelette@cifacom.com",
    "claralouiselefebvre96@gmail.com",
    "leabouzaid@hotmail.fr",
    "paceanasthasia@gmail.com",
    "laure.boussion@gmail.com",
    "lunana.tattoo@gmail.com",
    "lullabytatts@yahoo.com",
    "maetattooist@gmail.com",
    "yugslewizard@gmail.com",
    "chrysaorart@outlook.fr",
    "luba.illustration@gmail.com",
    "navixtattoo@gmail.com",
    "larroche.ben@gmail.com",
    "riondet.chloe@gmail.com",
    "hyperchic.tattoo@gmail.com",
    "Psypasseurdart@gmail.com",
    "d.unlockhart.tattoo@gmail.com",
    "inna.alexandra90@gmail.com",
    "shilita.tattoo@gmail.com",
    "yannfurzun@hotmail.fr",
    "leliapastorart@gmail.com",
    "Yola.eda@gmail.com",
    "la.amicale.studio@gmail.com",
    "vlasovabarbara@gmail.com",
    "erromistattoo@gmail.com",
    "lisepenaud@gmail.com",
    "skopitprod@gmail.com",
    "li.suko.tattoo@gmail.com",
    "tattootoutdoux.rdv@gmail.com",
    "uneminibiche.tattoo@gmail.com",
    "kazh_ink@laposte.net",
    "triglia663@gmail.com",
    "anthony.brbsa@gmail.com",
    "selune.art@gmail.com",
    "Mango.iink.studio@gmail.com",
    "gomarstep@gmail.com",
    "yvinktattooparis@gmail.com",
    "renardtatouage@gmail.com",
    "onatanbrito@gmail.com",
    "aud.benoit@gmail.com",
    "toxicjungleart@gmail.com",
    "jakolo.tattoo@gmail.com",
    "jesuscubillosv@gmail.com",
    "jonyraizetatouage@gmail.com",
    "vinzhu.tattoo@gmail.com",
    "rabette.kevin@yahoo.fr",
    "camille.ratinho@gmail.com",
    "nhuns.drawink@gmail.com",
    "dr.straussberg@gmail.com",
    "cathy92bo@gmail.com",
    "samymazet.1996@gmail.com",
    "arthur.godard@outlook.fr",
    "c.galvier@gmail.com",
    "ladychouquette.ttt@gmail.com",
    "pgromieu@gmail.com",
    "bazzurro.pablo@yahoo.fr",
    "maggie.ink.art@gmail.com",
    "ninon.marsac@gmail.com",
    "tattoolilink@gmail.com",
    "cfacezine@gmail.com",
    "laurent.nathan@outlook.fr",
    "aliceleseur@gmail.com",
    "poupeequipiquedamour@gmail.com",
    "jusignoret7@gmail.com",
    "sotattoo77@gmail.com",
    "vivianemeza@gmail.com",
    "akanebackbone@gmail.com",
    "miss.swiss.tattoo@gmail.com",
    "Loraine.gerardin@gmail.com",
    "Leoh_wttt@protonmail.com",
    "max.sorrymom@gmail.com",
    "Blaise.bavure@gmail.com",
  ];
  const [deckNumber, setDeckNumber] = useState(1);
  const [price, setPrice] = useState((deckNumber * 59.0).toFixed(2));
  useEffect(() => {
    for (let i = 0; i < adressMailTest.length; i++) {
      if (inputValues.email === adressMailTest[i] && artist !== undefined) {
        setPrice((deckNumber * 35.0).toFixed(2));
        break;
      } else {
        setPrice((deckNumber * 59.0).toFixed(2));
      }
    }
  }, [inputValues.email, deckNumber]);

  const priceWithCurrency = `${price}€`;

  const handAddDeckNumberChange = () => {
    setDeckNumber((prevDeckNumber) => prevDeckNumber + 1);
  };

  const handMinusDeckNumberChange = () => {
    if (deckNumber > 0) {
      setDeckNumber((prevDeckNumber) => prevDeckNumber - 1);
    } else {
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { artist } = router.query;
    console.log("Artist:", artist);

    // Préparer les données à envoyer au backend
    const data = { artist, ...inputValues };
    console.log("Data:", data);

    console.log(inputValues);
    console.log(artist);
    console.log("data :", data);
  };

  // test mail artist
  // const makeTest = async () => {
  //   const response = await fetch('https://lunetoile-backend.vercel.app/testpayment/sendmails', {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //   const session = await response.json();
  //   console.log('session', session)
  // };

  // useEffect(() => {
  //   makeTest();
  // }, []);

  console.log(inputValues.address);
  return (
    <div className="bg-midBlue min-h-screen py-12 font-montserrat">
      <div className="flex flex-col items-center ">
        <div className="relative mt-10 w-4/5 lg:w-[360px] h-[87px]">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>
        <div className="relative w-1/2 h-[49px] lg:w-[200px] lg:h-[60px]">
          <Image
            src="/list-symboles.svg"
            alt="maisons"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="flex flex-col pl-[26px] lg:flex-row lg:justify-around lg:h-4/5 mt-24">
        <div className=" w-full flex flex-col justify-around pr-[26px] lg:w-2/5 lg:justify-between">
          <p className="text-gold text-2xl mb-4">Contact</p>
          <div className="flex w-full flex-wrap lg:flex-nowrap gap-4 mb-4">
            <Input
              isRequired
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              label="Adresse e-mail"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              className="max-w-full"
            />
          </div>
          <p className="text-gold text-2xl pt-5 mb-4">Livraison</p>
          <div className="w-full flex lg:flex-nowrap gap-4">
            <Input
              isRequired
              label="Prénom"
              name="firstName"
              type="text"
              value={inputValues.firstName}
              onChange={handleInputChange}
              className="max-w-full"
            />
            <Input
              isRequired
              label="Nom"
              name="lastName"
              type="text"
              value={inputValues.lastName}
              onChange={handleInputChange}
              className="max-w-full"
            />
          </div>
          <div className="w-full flex mt-4 lg:flex-nowrap gap-4">
            <Input
              isRequired
              type="text"
              name="country"
              label="Pays/Région"
              value={inputValues.country}
              onChange={handleInputChange}
              className="max-w-full"
            />
            <Input
              isRequired
              type="number"
              pattern="\d*"
              name="zipCode"
              label="Code postal"
              value={inputValues.zipCode}
              onChange={handleInputChange}
              className="max-w-full"
            />
          </div>
          <div className="w-full flex flex-col mt-4 lg:flex-nowrap gap-4">
            <Input
              isRequired
              type="text"
              name="city"
              label="Ville"
              value={inputValues.city}
              onChange={handleInputChange}
              className="max-w-full"
            />
            <Input
              isRequired
              type="text"
              name="address"
              label="Adresse"
              value={inputValues.address}
              onChange={handleInputChange}
              className="max-w-full"
            />
            <Input
              isRequired
              type="number"
              pattern="\d*"
              name="phoneNumber"
              label="Télélphone"
              value={inputValues.phoneNumber}
              onChange={handleInputChange}
              className="max-w-full"
            />
          </div>
        </div>

        <div className="lg:w-2/5 lg:flex lg:flex-col lg:justify-between">
          <p className="text-gold text-2xl mt-12 lg:mt-0 mb-4 lg:pt-0">
            Aperçu
          </p>
          <div className="flex justify-center mr-[26px]">
            <div className="relative w-1/3 aspect-[4/3] lg:w-1/2">
              <Image
                src="/display-1.webp"
                layout="fill"
                objectFit="contain"
                alt="deck acheté"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 text-white">
              <div className="font-cormorant text-2xl">
                Jeu de cartes Lunétoile
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className="text-xl">X {deckNumber}</p>
                  <button
                    onClick={handAddDeckNumberChange}
                    className="ml-[8px] flex justify-center items-end text-gold mr-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handMinusDeckNumberChange}
                    className="flex justify-center items-end text-gold -ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <p className="ml-[8px] text-gold text-xl">
                    {priceWithCurrency}
                  </p>
                </div>
              </div>
              <div className="font-xl">Livraison Gratuite</div>
            </div>
          </div>
          {artist && (
            <div className="flex flex-col items-center text-white my-6 border-t pt-8">
              <div className="text-xl">Votre achat soutient directement</div>
              <div className="text-2xl mt-4">{artist} ✨</div>
            </div>
          )}

          <div className="flex justify-center ">
            <Stripe
              onClick={handleSubmit}
              firstName={inputValues.firstName}
              lastName={inputValues.lastName}
              city={inputValues.city}
              country={inputValues.country}
              phoneNumber={inputValues.phoneNumber}
              address={inputValues.address}
              zipCode={inputValues.zipCode}
              deckNumber={deckNumber}
              email={inputValues.email}
              price={price}
              artist={artist}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreorderForm;

