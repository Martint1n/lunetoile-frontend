import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function PreOrderButton({ color = 'bg-gold', text = 'text-black', hoverBg = 'hover:bg-gold', hoverText = 'hover:text-black'}) {
    const router = useRouter();
    const [artistName, setArtistName] = useState('');

    useEffect(() => {
        if (router.query.artist) {
            setArtistName(router.query.artist);
        }
    }, [router.query.artist]);

    const preorderLink = artistName 
        ? `/preorder?artist=${artistName}` 
        : '/preorder';

    return (
        <Link href={preorderLink} className="sm:w-[200px]">
            <button className={`${color} ${text} rounded-3xl min-h-[56px] sm:min-h-[48px] font-montserrat font-bold flex items-center justify-center ${hoverBg} ${hoverText} transition-all duration-300 px-4 sm:px-8 whitespace-nowrap`}>
                <span className="body-m sm:body-s tracking-wide">
                    Précommander
                </span>
            </button>
        </Link>
    );
}

export default PreOrderButton;