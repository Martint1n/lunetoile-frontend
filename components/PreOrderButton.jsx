import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function PreOrderButton({ color = 'bg-gold', text= 'text-black'}) {

    const router = useRouter();
    const [artistName, setArtistName] = useState('');

    useEffect(() => {
        console.log('Router Query:', router.query);
        // Vérifiez si router.query.artistName est défini et mettez à jour l'état
        if (router.query.artist) {
            setArtistName(router.query.artist);
        }
    }, [router.query.artist]);

    const preorderLink = artistName 
    ? `/preorder?artist=${artistName}` 
    : '/preorder'; // Fallback if artistName is undefined

    console.log('Artist Name:', artistName);

    return(
        <Link href={preorderLink} passHref><button className={`${color} ${text} rounded-3xl w-1/2 h-12`}>Précommander</button></Link>
    )
};

export default PreOrderButton;