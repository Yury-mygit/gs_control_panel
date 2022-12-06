import React from 'react';
import cl from './Preview.module.scss'

const Preview = ({id, page, action}) => {
    return (
        <div 
            className={cl.wrapper}
            onClick={()=>{
                console.log('dddd')
                action(id)
            }}
        >
           {page} page
        </div>
    );
};

export default Preview;