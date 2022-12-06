import React from 'react';
import BlockCard from './BlockCard';
import cl from './BlockCosts.module.scss'

const BlockCosts = ({data}) => {
    return (
        <div className={cl.wrapper}>
        
            <h2> 
                {data.title} <strong>{data.StrongTitle}</strong>
            </h2>
            <p>
                {data.text}
            </p>
            
            <div className={cl.blocksList}>
                {data.layers.map((item)=>{
                    return <BlockCard key={item.layerId} cl={cl} data={item}/>
                })}
               
            </div>
        </div>
    );
};

export default BlockCosts;