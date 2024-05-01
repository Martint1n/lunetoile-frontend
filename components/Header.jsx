import React from 'react';
import NavList from './Navlist';

function Header() {
    return (
        <header className='bg-darkBlue flex justify-around items-center h-[5vh]'>
          <div>
            <img />
            <div className='text-white text-lg'>LUNETOILE</div>
          </div>
          <div>Dashbord</div>
          <div>Gallery</div>
          <div>GPS</div>
          <img src='../nav.svg' className='h-3'/> 
          <NavList />
      </header>
    )
};

export default Header;