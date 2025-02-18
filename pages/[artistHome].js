// pages/[artist].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Home from '../components/Home';

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

  const cleanedArtist = artistHome.replace(/^@/, '').toLowerCase();

  // Vérification du cache
  const currentTime = Date.now();
  if (artistCache[cleanedArtist] && currentTime - artistCache[cleanedArtist].timestamp < CACHE_DURATION) {
    return {
      props: {
        artist: cleanedArtist,
        isAllowed: artistCache[cleanedArtist].isAllowed,
      },
    };
  }

  try {
    // Récupération des artistes autorisés depuis votre backend
    const response = await fetch(`${BACKEND}/artists/getartists`);
    const data = await response.json();
    
    const allowedArtists = data.map(artistHome => artistHome.pseudo.toLowerCase());
    const artistWithPrefix = `@${cleanedArtist}`;

    const isAllowed = allowedArtists.includes(artistWithPrefix);

    artistCache[cleanedArtist] = {
      isAllowed,
      timestamp: Date.now(),
    };

    return {
      props: {
        artistHome: cleanedArtist,
        isAllowed,
      },
    };
  } catch (error) {
    return {
      props: {
        artistHome: cleanedArtist,
        isAllowed: false,
      },
    };
  }
}
