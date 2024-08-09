// import Icon from '@mdi/react';

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Artist(props) { //add origin pour conditional en fonction du component parent 


    return(
        <div className='h-[80%] min-w-full' key={props.key}>
            <div className="relative flex justify-center">
                {/* <Icon path={MdiChevronLeft} size={1} /> */}
                <img src={props.card} className='w-3/4'/>
                <img src={props.picture} className='absolute right-20 bottom-10 rounded-full h-1/4 '/>
            </div>
            <p className='text-center text-3xl'>{props.firstName}</p>
            <p className='text-center'>{props.pseudo}</p>
            <p className='text-center'>{props.description}</p>
            {/* <Icon path={MdChevronRight} size={1} /> */}
        </div>
    )
};

export default Artist;