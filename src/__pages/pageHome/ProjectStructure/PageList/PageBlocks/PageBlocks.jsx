import React from 'react';
import cl from './PageBlocks.module.scss'

const PageBlocks = ({blocks}) => {


    // console.log(blocks)

    return (
        <div className={cl.wrapper}>
            
            {blocks.map(i=>{
                return(
                   <div 
                     className={cl.block}
                     key = {i.id}
                    >  
                    {i.seq}:{i.type} 
                </div>
                )
            })}
        </div>
    );
};

export default PageBlocks;