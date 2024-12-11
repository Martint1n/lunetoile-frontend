import { useRouter } from 'next/router';
import React from 'react'
import { useEffect, useState } from 'react';
import Stripe from './Stripe';
// import { useDispatch } from 'react-redux';
// import { addPreorderInfoToStore } from '../reducers/preorderInfos';
import Image from 'next/image';
import { Input } from "@nextui-org/react";


const PreorderForm = () => {
  const router = useRouter();
  const { artist } = router.query;
  // const dispatch = useDispatch();

  console.log('Artist Name:', artist);

  const [inputValues, setInputValues] = useState({ 
    lastName: '', 
    firstName: '',
    email: '',
    city:'',
    address: '',
    zipCode: '',
    country: '',
    city: '',
    phoneNumber: '',
  }); 

  const adressMailTest = ['test@gmail.com', 
                          'zozita.slowpoke@gmail.com', 
                          'guilbertmartin75@gmail.com',
                          'maatatouage@gmail.com',
                          'lunacramesnil@gmail.com',
                          'maya.sermonne@gmail.com',
                          'julius.tatouage@gmail.com',
                          'alclaudetattoo@gmail.com',
                          'dicedicedicer@gmail.com',
                          'darkaleid@gmail.com',
                          'lema.tatouage@gmail.com',
                          'wynonamaret@gmail.com',
                          'damien-cordelette@cifacom.com',
                          'claralouiselefebvre96@gmail.com',
                          'leabouzaid@hotmail.fr',
                          'paceanasthasia@gmail.com',
                          'laure.boussion@gmail.com',
                          'lunana.tattoo@gmail.com',
                          'lullabytatts@yahoo.com',
                          'maetattooist@gmail.com',
                          'yugslewizard@gmail.com',
                          'chrysaorart@outlook.fr',
                          'luba.illustration@gmail.com',
                          'navixtattoo@gmail.com',
                          'larroche.ben@gmail.com',
                          'riondet.chloe@gmail.com',
                          'hyperchic.tattoo@gmail.com',
                          'Psypasseurdart@gmail.com',
                          'd.unlockhart.tattoo@gmail.com',
                          'inna.alexandra90@gmail.com',
                          'shilita.tattoo@gmail.com',
                          'yannfurzun@hotmail.fr',
                          'leliapastorart@gmail.com',
                          'Yola.eda@gmail.com',
                          'la.amicale.studio@gmail.com',
                          'vlasovabarbara@gmail.com',
                          'erromistattoo@gmail.com',
                          'lisepenaud@gmail.com',
                          'skopitprod@gmail.com',
                          'li.suko.tattoo@gmail.com',
                          'tattootoutdoux.rdv@gmail.com',
                          'uneminibiche.tattoo@gmail.com',
                          'kazh_ink@laposte.net',
                          'triglia663@gmail.com',
                          'anthony.brbsa@gmail.com',
                          'selune.art@gmail.com',
                          'Mango.iink.studio@gmail.com',
                          'gomarstep@gmail.com',
                          'yvinktattooparis@gmail.com',
                          'renardtatouage@gmail.com',
                          'onatanbrito@gmail.com',
                          'aud.benoit@gmail.com',
                          'toxicjungleart@gmail.com',
                          'jakolo.tattoo@gmail.com',
                          'jesuscubillosv@gmail.com',
                          'jonyraizetatouage@gmail.com',
                          'vinzhu.tattoo@gmail.com',
                          'rabette.kevin@yahoo.fr',
                          'camille.ratinho@gmail.com',
                          'nhuns.drawink@gmail.com',
                          'dr.straussberg@gmail.com',
                          'cathy92bo@gmail.com',
                          'samymazet.1996@gmail.com',
                          'arthur.godard@outlook.fr',
                          'c.galvier@gmail.com',
                          'ladychouquette.ttt@gmail.com',
                          'pgromieu@gmail.com',
                          'bazzurro.pablo@yahoo.fr',
                          'maggie.ink.art@gmail.com',
                          'ninon.marsac@gmail.com',
                          'tattoolilink@gmail.com',
                          'cfacezine@gmail.com',
                          'laurent.nathan@outlook.fr',
                          'aliceleseur@gmail.com',
                          'poupeequipiquedamour@gmail.com',
                          'jusignoret7@gmail.com',
                          'sotattoo77@gmail.com',
                          'vivianemeza@gmail.com',
                          'akanebackbone@gmail.com',
                          'miss.swiss.tattoo@gmail.com',
                          'Loraine.gerardin@gmail.com',
                          'Leoh_wttt@protonmail.com',
                          'max.sorrymom@gmail.com',
                          'Blaise.bavure@gmail.com',
                          ]
  const [deckNumber, setDeckNumber] = useState(1)
  const [price, setPrice] = useState((deckNumber * 49.99).toFixed(2))
  useEffect(() => {
    for (let i = 0; i < adressMailTest.length; i++){
    if (inputValues.email === adressMailTest[i]) {
      setPrice((deckNumber * 35.99).toFixed(2))
      break
    }else {
      setPrice((deckNumber * 49.99).toFixed(2));
    }
  }
  },[inputValues.email, deckNumber])

  const priceWithCurrency = `${price}€`

  const handAddDeckNumberChange = () => {
    setDeckNumber(prevDeckNumber => prevDeckNumber + 1)
  }

  const handMinusDeckNumberChange = () => {
    if(deckNumber > 0) {
      setDeckNumber(prevDeckNumber => prevDeckNumber - 1)
    }else {}
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      const { artist } = router.query;
      console.log('Artist:', artist);

      // Préparer les données à envoyer au backend
      const data = { artist, ...inputValues };
      console.log('Data:', data);

      console.log(inputValues)
      console.log(artist)
      console.log('data :', data)
  };

//https://tailwindui.com/components/application-ui/forms/form-layouts

console.log(inputValues.address)
  return (
    <div className='bg-dark-background w-screen h-screen'>
      <div className='flex flex-col items-center w-screen '>
        <div className='relative pt-10 w-4/5 lg:w-[360px] lg:h-[87px]'>
          <Image 
            src='/logo.svg' 
            alt="Logo"
            layout="fill" 
            objectFit="contain" 
          />
        </div>
        <div className='relative w-1/2 h-[49px] lg:w-[200px] lg:h-[60px]'>
          <Image 
            src='/list-symboles.svg' 
            alt="maisons"
            layout="fill" 
            objectFit="contain" 
          /> 
        </div>
      </div>
      
      <div className='flex flex-col pl-[26px] lg:flex-row lg:justify-around lg:h-4/5'>
        
        <div className=' w-full flex flex-col justify-around pr-[26px] lg:w-2/5 lg:justify-between'>
          <p className='text-gold text-2xl -ml-[26px]'>Contact</p>
          <div className="flex w-full flex-wrap lg:flex-nowrap gap-4">
          <Input
                isRequired
                color="primary"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                label="Adresse e-mail"
                name='email'
                value={inputValues.email}
                onChange={handleInputChange}
                className="max-w-full"
            />
          </div>
          <p className='text-gold text-2xl pt-5 -ml-[26px]'>Livraison</p>
          <div className="w-full flex lg:flex-nowrap gap-4">
            <Input
              isRequired
              color="primary"
              label="Prénom"
              name='firstName'
              type='text'
              value={inputValues.firstName}
              onChange={handleInputChange}
              className="max-w-full"
            />
            <Input
              isRequired
              color="primary"
              label="Nom"
              name='lastName'
              type='text'
              value={inputValues.lastName}
              onChange={handleInputChange}
              className="max-w-full"
            />
          </div>
          <div className="w-full flex pt-2 lg:flex-nowrap gap-4">
            <Input 
              isRequired
              color="primary"
              type='text'
              name='country'
              label='Pays/Région' 
              value={inputValues.country} 
              onChange={handleInputChange}
              className='max-w-full' 
            />
            <Input 
              isRequired
              color="primary"
              type='number'
              pattern="\d*"
              name='zipCode'
              label='Code postal' 
              value={inputValues.zipCode} 
              onChange={handleInputChange} 
              className='max-w-full'
            />
          </div>
          <div className='w-full flex flex-col pt-2 lg:flex-nowrap gap-4'>
            <Input 
              isRequired
              color="primary"
              type='text'
              name='city'
              label='Ville'
              value={inputValues.city} 
              onChange={handleInputChange} 
              className='max-w-full'
            />
            <Input 
              isRequired
              color="primary"
              type='text'
              name='address'
              label='Adresse' 
              value={inputValues.address} 
              onChange={handleInputChange} 
              className='max-w-full'
            />
            <Input 
              isRequired
              color="primary"
              type='number'
              pattern="\d*"
              name='phoneNumber'
              label='Télélphone' 
              value={inputValues.phoneNumber} 
              onChange={handleInputChange} 
              className='max-w-full'
            />
          </div>
      </div>

      <div className='lg:w-2/5 lg:flex lg:flex-col lg:justify-between'>
        <p className='text-gold text-2xl pt-5 -ml-[26px] lg:pt-0'>Aperçu</p>
        <div className='flex pb-2 border-b mr-[26px]'>
          <div className='relative w-1/3 aspect-[4/3] lg:w-1/2'>
            <Image src='/display-1.webp' layout='fill' objectFit="contain" alt='deck acheté'/>
          </div>
          <div className='flex flex-col justify-around'>
            <div>jeu de cartes Lunétoile</div>
            <div className='flex items-center'>
              <p>X {deckNumber}</p>
              <button onClick={handAddDeckNumberChange} className='ml-[8px] flex justify-center items-end w-[32px] h-[32px] text-gold text-3xl border border-gold rounded-full mr-2'>+</button>
              <button onClick={handMinusDeckNumberChange} className='flex justify-center items-end w-[32px] h-[32px] text-gold text-3xl border border-gold rounded-full'>-</button>
              <p className='ml-[8px]'>{priceWithCurrency}</p>
            </div>
            <div>Livraison Gratuite</div>
          </div>
        </div>
        {artist && <div><div className='text-xl self-center'>Votre achat soutient directement</div>
        <div className='self-center text-xl'>{ artist } ✨</div></div>}
        
        <Stripe onClick={handleSubmit} firstName={inputValues.firstName} lastName={inputValues.lastName} city={inputValues.city} country={inputValues.country} phoneNumber={inputValues.phoneNumber} address={inputValues.address} zipCode={inputValues.zipCode} deckNumber={deckNumber} email={inputValues.email} price={price} artist={artist}/>
      </div>
    </div>
  </div>

    );
  };

export default PreorderForm;