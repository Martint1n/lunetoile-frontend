import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className='flex flex-col justify-end items-center py-6 lg:py-8'>
      <Image 
        src='/logoblack.svg' 
        width={144} 
        height={35} 
        alt="Lunétoile Logo" 
        className='mb-4 w-[120px] lg:w-[144px]'
      />
      <div className='max-w-4xl px-6 lg:px-0'>
        {/* Desktop view */}
        <div className='hidden lg:flex body-s flex-wrap justify-center items-center gap-x-4'>
          <Link href="/conditions-generales-de-vente" className='hover:text-gold'>
            Conditions générales de vente
          </Link>
          <span className='text-lightGrey'>•</span>
          <Link href="/mentions-legales" className='hover:text-gold'>
            Mentions légales
          </Link>
          <span className='text-lightGrey'>•</span>
          <Link href="/confidentialite" className='hover:text-gold'>
            Confidentialité
          </Link>
          <span className='text-lightGrey'>•</span>
          <span>Copyright Lunétoile {new Date().getFullYear()}</span>
        </div>

        {/* Mobile view */}
        <div className='flex lg:hidden body-s flex-col text-center gap-y-1'>
          <Link href="/conditions-generales-de-vente" className='hover:text-gold'>
            conditions générales de vente
          </Link>
          <Link href="/mentions-legales" className='hover:text-gold'>
            Mentions légales
          </Link>
          <Link href="/confidentialite" className='hover:text-gold'>
            Confidentialité
          </Link>
          <span>Copyright Lunétoile {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 