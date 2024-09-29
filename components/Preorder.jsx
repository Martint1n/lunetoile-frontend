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

  const adressMailTest = ['test@gmail.com', 'zozita.slowpoke@gmail.com']
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

    // Ici, vous pouvez récupérer ou générer dynamiquement le paramètre

    // dispatch(addPreorderInfoToStore(data))

    // fetch(`http://localhost:3000/preorder/${artist}`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    // .then((response) => {
    //   if (!response.ok) {
    //     throw new Error('Error submitting data');
    //   }
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
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
          <div className='flex flex-col'>
            <div>jeu de cartes Lunétoile</div>
            <div className='flex items-center'>
              <p className='-ml-[26px]'>X {deckNumber}</p>
              <button onClick={handAddDeckNumberChange} className='-ml-[14px] flex justify-center items-end w-[32px] h-[32px] text-gold text-3xl border border-gold rounded-full mr-2'>+</button>
              <button onClick={handMinusDeckNumberChange} className='flex justify-center items-end w-[32px] h-[32px] text-gold text-3xl border border-gold rounded-full'>-</button>
              <p>{priceWithCurrency}</p>
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