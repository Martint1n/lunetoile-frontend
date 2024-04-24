import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PreorderForm = () => {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({ 
    inputValue1: '', 
    inputValue2: '',
    inputValue3: '',
    inputValue4: '',
    inputValue5: '',
    inputValue6: '',
    inputValue7: '',
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

    // Ici, vous pouvez récupérer ou générer dynamiquement le paramètre

    const { param } = router.query
    const data = { param, inputValues };

    fetch('/your-backend-endpoint', {
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
          <label htmlFor='inputValue1'>Nom</label>
          <input 
            type='text' 
            name='inputValue1'
            value={inputValues.inputValue1} 
            onChange={handleInputChange} 
            placeholder='Input 1'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='inputValue2'>Prénom</label>
          <input 
            type='text' 
            name='inputValue2'
            value={inputValues.inputValue2} 
            onChange={handleInputChange} 
            placeholder='Input 2' 
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='inputValue3'>Adresse mail</label>
          <input 
            type='text'
            name='inputValue3' 
            value={inputValues.inputValue3} 
            onChange={handleInputChange} 
            placeholder='dupont@gmail.com'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='inputValue4'>Adresse</label>
          <input 
            type='text'
            name='inputValue4' 
            value={inputValues.inputValue4} 
            onChange={handleInputChange} 
            placeholder='1 rue du moulin vert'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='inputValue5'>Code postal</label>
          <input 
            type='number'
            name='inputValue5' 
            value={inputValues.inputValue5} 
            onChange={handleInputChange} 
            placeholder='75000'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='inputValue6'>Pays</label>
          <input 
            type='text'
            name='inputValue6' 
            value={inputValues.inputValue6} 
            onChange={handleInputChange} 
            placeholder='France'
            className='border-2 border-black'
          />
        </div>
        <div>
          <label htmlFor='inputValue7'>Quantité</label>
          <input 
            type='number'
            name='inputValue7' 
            value={inputValues.inputValue7} 
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