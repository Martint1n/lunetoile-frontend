import React from 'react';
import NavList from './Navlist';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image'

function Header() {
const token = useSelector((state) => state.users.token)
const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3000/users/auth/${token}`);
      const data = await response.json();
      if(data.result){
        setIsAuth(true)
      }
  })()
  }, [])

    return (
        <header className='bg-darkBlue flex justify-around items-center'>
          <div className='pt-2'>
            <Image src='/logo.svg' width={144} height={35}/>
          </div>
          {isAuth && <div>Dashbord</div>}
          <div>Gallery</div>
          <div>GPS</div>
          <img src='../nav.svg' className='h-3'/> 
      </header>
    )
};

export default Header;