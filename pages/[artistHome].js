// pages/[artist].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Home from '../components/Home';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Head from 'next/head';

export default function ArtistPage({ artist, isAllowed }) {
  const router = useRouter();
  
  useEffect(() => {
    // Réinitialiser le thème ou les classes si nécessaire
    document.body.classList.remove('dark');
  }, []);
  
  if (!isAllowed) {
    return (
      <div>
        <h1>Artiste non trouvé</h1>
        <p>Désolé, l'artiste "{artist}" n'est pas reconnu ou n'est pas autorisé.</p>
      </div>
    );
  } else {
    return <Home />;
  }
}

ArtistPage.getLayout = function getLayout(page) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light" forcedTheme="light">
      <NextUIProvider>
        <Head>
          <title>{`Lunetoile - ${artist}`}</title>
        </Head>
        {page}
      </NextUIProvider>
    </NextThemesProvider>
  );
};

let artistCache = {}; // Cache basique stocké en mémoire
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes de cache

export async function getServerSideProps(context) {
  const { artist = '' } = context.params || context.query;

  const cleanedArtist = artist.replace(/^@/, '').toLowerCase();

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
    
    const allowedArtists = data.map(artist => artist.pseudo.toLowerCase());
    const artistWithPrefix = `@${cleanedArtist}`;

    const isAllowed = allowedArtists.includes(artistWithPrefix);

    artistCache[cleanedArtist] = {
      isAllowed,
      timestamp: Date.now(),
    };

    return {
      props: {
        artist: cleanedArtist,
        isAllowed,
      },
    };
  } catch (error) {
    return {
      props: {
        artist: cleanedArtist,
        isAllowed: false,
      },
    };
  }
}
