import React from 'react';
import cl from './Preview.module.scss'

const Preview = ({id, page,currentPage, setCurrentPage}) => {
    return (
        <div 
            className={[
                cl.wrapper, 
                currentPage == id ? cl.activ : ''
            ].join(' ')}
            onClick={()=>{
                setCurrentPage(id)
            }}
        >
           {page}
        </div>
    );
};

export default Preview;