import { useEffect, useRef } from 'react';
import Image from 'next/image';

function ArtistCard({ artists }) {
  const scrollRef = useRef(null);
  let scrollInterval = null;

  useEffect(() => {
    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1;
          
          if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    };

    startScroll();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, []);

  const handleMouseEnter = () => {
    if (scrollInterval) clearInterval(scrollInterval);
  };

  const handleMouseLeave = () => {
    scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 20);
  };

  const handleWheel = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
      
      if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) / 2) {
        scrollRef.current.scrollLeft = 0;
      }
    }
  };

  const duplicatedArtists = [...artists, ...artists];

  return (
    <div 
      ref={scrollRef}
      className='w-screen min-h-[600px] lg:min-h-[800px] flex overflow-x-scroll scrollbar-none py-4 lg:py-12'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className='flex gap-4 lg:gap-8 px-4 lg:px-8 h-full'>
        {duplicatedArtists.map((artist, index) => (
          <div 
            key={`${artist.key}-${index}`} 
            className='w-[300px] lg:w-[400px] flex-shrink-0 h-full flex flex-col bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-3 p-4 lg:p-6 hover:bg-gray-50'
          >
            <div className="relative flex flex-col items-center group">
              <div className='w-full max-w-[250px] lg:max-w-[350px] aspect-[3/4] rounded-lg overflow-hidden'>
                <img 
                  src={artist.card} 
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                  alt={`${artist.firstName}'s card`} 
                />
              </div>
              <div className='absolute -bottom-6 lg:-bottom-8 w-16 h-16 lg:w-20 lg:h-20 transform transition-transform duration-500 group-hover:scale-105'>
                <div className='relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg'>
                  <img 
                    src={artist.picture}
                    className='w-full h-full object-cover'
                    alt={artist.firstName}
                  />
                </div>
              </div>
            </div>
            <div className='mt-8 lg:mt-12 text-center space-y-1 lg:space-y-2'>
              <p className='font-cormorant text-xl lg:text-2xl font-medium group-hover:text-gold transition-colors duration-300'>{artist.firstName}</p>
              <p className='body-s text-gold hover:underline cursor-pointer hover:text-darkBlue transition-colors duration-300'>{artist.pseudo}</p>
              <p className='body-s text-lightGrey px-2 lg:px-4'>{artist.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistCard;