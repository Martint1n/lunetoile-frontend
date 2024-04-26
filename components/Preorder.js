import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Stripe from './Stripe'

const PreorderForm = () => {
  const router = useRouter();

  const [inputValues, setInputValues] = useState({ 
    lastName: '', 
    firstName: '',
    email: '',
    address: '',
    zipCode: '',
    country: '',
    quantity: '',
  }); 

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

    fetch(`http://localhost:3000/preorder/${artist}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error submitting data');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };


  return (
      <form onSubmit={handleSubmit}>
            <div className='h-[50vh] flex flex-col justify-around items-center'>
        <div>
          <label htmlFor='lastName'>Nom</label>
          <input 
            type='text' 
            name='lastName'
            value={inputValues.lastName} 
            onChange={handleInputChange} 
            placeholder='nom'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='firstName'>Prénom</label>
          <input 
            type='text' 
            name='firstName'
            value={inputValues.firstName} 
            onChange={handleInputChange} 
            placeholder='prénom' 
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='email'>Adresse mail</label>
          <input 
            type='text'
            name='email' 
            value={inputValues.email} 
            onChange={handleInputChange} 
            placeholder='dupont@gmail.com'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='address'>Adresse</label>
          <input 
            type='text'
            name='address' 
            value={inputValues.address} 
            onChange={handleInputChange} 
            placeholder='1 rue du moulin vert'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='zipCode'>Code postal</label>
          <input 
            type='number'
            name='zipCode' 
            value={inputValues.zipCode} 
            onChange={handleInputChange} 
            placeholder='75000'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='country'>Pays</label>
          <input 
            type='text'
            name='country' 
            value={inputValues.country} 
            onChange={handleInputChange} 
            placeholder='France'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='quantity'>Quantité</label>
          <input 
            type='number'
            name='quantity' 
            value={inputValues.quantity} 
            onChange={handleInputChange} 
            placeholder='1'
            className='border-2 border-black'
          />
        </div>
        <button type='submit'>Soumettre</button>
        </div>
      </form>
    
  );
};

export default PreorderForm;