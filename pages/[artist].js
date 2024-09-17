'use client';

import Home from '../components/Home';
import Link from 'next/link';
const BACKEND = process.env.BACKEND;

function ArtistPage({ artist, isAllowed }) {
  if (!isAllowed) {
    return (
      <div>
        <h1>Artiste non trouvé</h1>
        <p>Désolé, l'artiste "{artist}" n'est pas reconnu ou n'est pas autorisé.</p>
        <Link href="/">Retour à l'accueil</Link>
      </div>
    );
  }

  return <Home />;
}

export default ArtistPage;

export async function getServerSideProps(context) {
  
  console.log("Query params:", context.query);
  console.log("Params:", context.params);
  const { artist = '' } = context.params;

  // Nettoyer le nom de l'artiste pour supprimer les @
  const cleanedArtist = artist.replace(/^@/, '').toLowerCase();

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
