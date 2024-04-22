import Icon from '@mdi/react';

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Artist(props) {


    return(
        <div className='h-[80vh] min-w-full'>
            <div className="relative flex justify-center">
                <Icon path={MdiChevronLeft} size={1} />
                <img src={props.card} className='w-3/4'/>
                <img src={props.picture} className='absolute right-20 bottom-10 border-2 border-black rounded-full h-1/4 '/>
            </div>
            <p className='text-center'>{props.lastName} {props.firstName}</p>
            <p className='text-center'>{props.description}</p>
            <Icon path={MdChevronRight} size={1} />
        </div>
    )
};

export default Artist;