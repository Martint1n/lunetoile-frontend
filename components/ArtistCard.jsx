import { useEffect, useRef, useState } from "react";

function ArtistCard({ artists }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Check scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const isEnd =
        scrollRef.current.scrollLeft >=
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10;
      setIsAtEnd(isEnd);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.75;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.75;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Prevent wheel scrolling
  const preventScroll = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="min-h-[400px] lg:min-h-[550px] flex overflow-x-scroll pb-8 artists-list mx-auto"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onWheel={preventScroll}
        style={{
          scrollBehavior: isDragging ? "auto" : "smooth",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        <div className="flex gap-8 lg:gap-12 py-4 lg:px-12 h-full">
          {artists.map((artist, index) => (
            <div
              key={`${artist.key}-${index}`}
              className="w-[320px] lg:w-[400px] flex-shrink-0 h-full flex flex-col bg-white rounded-xl hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-3 p-4 lg:p-6"
            >
              <div className="relative flex flex-col group">
                <div className="w-full aspect-[3/4] rounded-lg overflow-hidden">
                  <img
                    src={artist.card}
                    className="w-full h-4/5 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={`${artist.firstName}'s card`}
                    draggable="false"
                  />
                </div>
                <div className="absolute -bottom-[0.1rem] right-[0.1rem] w-24 h-24 lg:w-32 lg:h-32 transform transition-transform duration-500 group-hover:scale-105">
                  <div className="relative w-full h-full rounded-full overflow-hidden -mt-14 ">
                    <img
                      src={artist.picture}
                      className="w-full h-full object-cover"
                      alt={artist.firstName}
                      draggable="false"
                    />
                  </div>
                </div>
              </div>
              <div className="-mt-12 space-y-1 lg:space-y-2 text-center">
                <p className="font-cormorant text-3xl font-medium text-darkBlue">
                  {artist.firstName}
                </p>
                <p className="body-l text-gold text-lg">{artist.pseudo}</p>
                <p className="body-l text-lightGrey px-2 lg:px-4">
                  {artist.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
