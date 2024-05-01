import Link from 'next/link'

function PreOrderButton() {

    

    return(
        <Link href='http://localhost:3001/preorder/bicyclette'><button className='bg-gold rounded-3xl w-1/2 h-12'>Précommander</button></Link>
    )
};

export default PreOrderButton;