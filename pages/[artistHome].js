// pages/[artist].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Home from '../components/Home';
const BACKEND = 'https://lunetoile-backend.vercel.app';
import artistsData from '../artists.json';

export default function ArtistPage({ artistHome, isAllowed }) {
  const router = useRouter();
  
  useEffect(() => {
    // Réinitialiser le thème ou les classes si nécessaire
    document.body.classList.remove('dark');
  }, []);
  
  if (!isAllowed) {
    return (
      <div>
        <h1>Artiste non trouvé</h1>
        <p>Désolé, l'artiste "{artistHome}" n'est pas reconnu ou n'est pas autorisé.</p>
      </div>
    );
  } else {
    return <Home />;
  }
}

let artistCache = {}; // Cache basique stocké en mémoire
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes de cache

export async function getServerSideProps(context) {

  const { artistHome = '' } = context.params || context.query;
  
  // Vérification du cache
  const currentTime = Date.now();
  if (artistCache[artistHome] && currentTime - artistCache[artistHome].timestamp < CACHE_DURATION) {
    return {
      props: {
        artistHome: artistHome,
        isAllowed: artistCache[artistHome].isAllowed,
      },
    };
  }

  try {
    // Récupération des artistes autorisés depuis votre backend
    // const response = await fetch(`${BACKEND}/artists/getartists`);
    // const data = await response.json();
    
    const allowedArtists = artistsData.artists.map(artist => artist.toLowerCase());
    const artistWithPrefix = `@${artistHome}`;

    const isAllowed = allowedArtists.includes(artistWithPrefix);

    artistCache[artistHome] = {
      isAllowed,
      timestamp: Date.now(),
    };

    return {
      props: {
        artistHome: artistHome,
        isAllowed,
      },
    };
  } catch (error) {
    return {
      props: {
        artistHome: artistHome,
        isAllowed: false,
      },
    };
  }
}
