import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar if scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-darkBlue transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Mobile Navbar */}
      <div className='lg:hidden flex justify-between items-center px-6 py-4'>
        <Link href="/">
          <div className='relative w-[120px] h-[30px]'>
            <Image 
              src='/logo.svg' 
              alt="Lunétoile"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <button 
          onClick={toggleMenu}
          className='text-white focus:outline-none'
        >
          <div className={`w-6 h-4 relative flex flex-col justify-between transition-all duration-300 ${isMenuOpen ? 'transform' : ''}`}>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-darkBlue absolute w-full transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className='flex flex-col items-center py-6 space-y-6'>
          <Link href="/about" className='text-white font-montserrat hover:text-gold'>
            À propos
          </Link>
          <Link href="/gallery" className='text-white font-montserrat hover:text-gold'>
            Galerie
          </Link>
          <Link href="/espace-tatoueur" className='text-white font-montserrat hover:text-gold'>
            Espace Tatoueur
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className='hidden lg:flex justify-between items-center px-20 py-6'>
        <Link href="/">
          <div className='relative w-[144px] h-[35px]'>
            <Image 
              src='/logo.svg' 
              alt="Lunétoile"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <div className='flex space-x-12'>
          <Link href="/about" className='text-white font-montserrat hover:text-gold'>
            À propos
          </Link>
          <Link href="/gallery" className='text-white font-montserrat hover:text-gold'>
            Galerie
          </Link>
          <Link href="/espace-tatoueur" className='text-white font-montserrat hover:text-gold'>
            Espace Tatoueur
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 