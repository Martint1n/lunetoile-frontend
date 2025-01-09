import Link from 'next/link';
import dynamic from 'next/dynamic';

const BACKEND = 'https://lunetoile-backend.vercel.app';
const Preorder = dynamic(() => import('../../components/Preorder'));


function ArtistPage({ artist, isAllowed }) {
  console.log("Artist:", artist);      // Ajout pour débogage
  console.log("IsAllowed:", isAllowed); // Ajout pour débogage
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

export default ArtistPage;

let artistCache = {}; // Cache basique stocké en mémoire
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes de cache

export async function getServerSideProps(context) {
  console.log("Query params:", context.query);
  console.log("Params:", context.params);
  const { artist = '' } = context.params || context.query;

  // Nettoyer le nom de l'artiste pour supprimer les @
  const cleanedArtist = artist.replace(/^@/, '').toLowerCase();

  // Vérifier si l'artiste est dans le cache
  const currentTime = Date.now();
  if (artistCache[cleanedArtist] && currentTime - artistCache[cleanedArtist].timestamp < CACHE_DURATION) {
    console.log('Returning cached data for artist:', cleanedArtist);
    return {
      props: {
        artist: cleanedArtist,
        isAllowed: artistCache[cleanedArtist].isAllowed,
      },
    };
  }

  try {
    // Récupérer la liste des artistes autorisés depuis votre backend
    const response = await fetch(`${BACKEND}/artists/getartists`);
    const data = await response.json();
    console.log('Backend artists data:', data);

    // Extraire les pseudos autorisés avec le préfixe @
    const allowedArtists = data.map(artist => artist.pseudo.toLowerCase());

    // Ajouter le préfixe @ pour la comparaison
    const artistWithPrefix = `@${cleanedArtist}`;
    console.log('Artist with prefix:', artistWithPrefix);

    // Vérifier si l'artiste est dans la liste des artistes autorisés
    const isAllowed = allowedArtists.includes(artistWithPrefix);
    console.log('Is artist allowed:', isAllowed);

    // Stocker le résultat dans le cache avec un timestamp
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
    console.error('Erreur lors de la récupération des artistes:', error);
    return {
      props: {
        artist: cleanedArtist,
        isAllowed: false,
      },
    };
  }
}

