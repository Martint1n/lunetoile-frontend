import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const BACKEND = 'https://lunetoile-backend.vercel.app';
const Preorder = dynamic(() => import('../../components/Preorder'));

// Composant principal de la page
function ArtistPage({ artist, isAllowed }) {
  const [artistCache, setArtistCache] = useState({}); // Cache côté client
  const router = useRouter();
  
  const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes de cache

  // Effet pour gérer le cache côté client avec localStorage
  useEffect(() => {
    const cachedArtist = localStorage.getItem('artistCache');
    if (cachedArtist) {
      setArtistCache(JSON.parse(cachedArtist));
    }
  }, []);

  // Effet pour sauvegarder le cache dans localStorage lorsqu'il change
  useEffect(() => {
    if (Object.keys(artistCache).length > 0) {
      localStorage.setItem('artistCache', JSON.stringify(artistCache));
    }
  }, [artistCache]);

  // Vérification du cache pour savoir si l'artiste est déjà autorisé
  const currentTime = Date.now();
  if (artistCache[artist] && currentTime - artistCache[artist].timestamp < CACHE_DURATION) {
    // Si l'artiste est trouvé dans le cache et dans la durée valide
    return <Preorder />;
  }

  if (!isAllowed) {
    return (
      <div>
        <h1>Artiste non trouvé</h1>
        <p>Désolé, l'artiste "{artist}" n'est pas reconnu ou n'est pas autorisé.</p>
        <Link href="/">Retour à l'accueil</Link>
      </div>
    );
  }

  return <Preorder />;
}

// Fonction côté serveur pour récupérer les données
export async function getServerSideProps(context) {
  const { artist = '' } = context.params || context.query;
  const cleanedArtist = artist.replace(/^@/, '').toLowerCase();

  try {
    // Récupérer la liste des artistes autorisés depuis le backend
    const response = await fetch(`${BACKEND}/artists/getartists`);
    const data = await response.json();
    
    // Extraire les pseudos autorisés avec le préfixe @
    const allowedArtists = data.map(artist => artist.pseudo.toLowerCase());
    const artistWithPrefix = `@${cleanedArtist}`;

    // Vérifier si l'artiste est autorisé
    const isAllowed = allowedArtists.includes(artistWithPrefix);

    // Retourner les props nécessaires pour le composant
    return {
      props: {
        artist: cleanedArtist,
        isAllowed,
      },
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des artistes:', error);
    return {
      props: {
        artist: cleanedArtist,
        isAllowed: false,
      },
    };
  }
}

export default ArtistPage;
