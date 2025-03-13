import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import artistsData from '../../artists.json';
const Preorder = dynamic(() => import('../../components/Preorder'));

// Composant principal de la page
function ArtistPage({ artist, isAllowed }) {
  const router = useRouter();
  

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

  try {
    
    // Extraire les pseudos autorisés avec le préfixe @
    const allowedArtists = artistsData.artists.map(art => art.toLowerCase());

    // Vérifier si l'artiste est autorisé
    const isAllowed = allowedArtists.includes(artist);

    // Retourner les props nécessaires pour le composant
    return {
      props: {
        artist: artist,
        isAllowed,
      },
    };
  } catch (error) {
    console.error('Erreur lors de la récupération des artistes:', error);
    return {
      props: {
        artist: artist,
        isAllowed: false,
      },
    };
  }
}

export default ArtistPage;
