import Home from '../components/Home';
import Preorder from '../components/Preorder';
import Link from 'next/link';
import { useState, useEffect } from 'react'

// const allowedArtists = ['zozita.slowpoke', 'al_claude', 'hobssystatoo', '10.tattoo', 'leclair_ttt', 
//   'shilita_tattoo', '_ink.fairy', 'erromis_', 'mae.tattooist', 'navixtattoo', 'dollyy_ttt', 'hyperchic_tattoo',
//   '', ''];



function preorder({ artist, isAllowed }) {


    if (!isAllowed) {
        return (
          <div>
            <h1>Artiste non trouvé</h1>
            <p>Désolé, l'artiste "{artist}" n'est pas reconnu.</p>
            <Link href="/">Retour à l'accueil</Link>
          </div>
        );
      }

    return (
        <Home />
    )
}

export default preorder;

export async function getServerSideProps(context) {
    const { artist = '' } = context.params;
  
  // Récupérer la liste des artistes autorisés depuis votre backend
  const response = await fetch('http://localhost:3000/artists/getartists');
  const data = await response.json();
  const allowedArtists = data.map(artist => artist.pseudo.toLowerCase());
  //ici pour mettre une regex pour supprimer le @

  // Vérifier si l'artiste est dans la liste des artistes autorisés
  const isAllowed = allowedArtists.includes(artist.toLowerCase());
  
    return {
      props: {
        artist,
        isAllowed,
      },
    };
  }