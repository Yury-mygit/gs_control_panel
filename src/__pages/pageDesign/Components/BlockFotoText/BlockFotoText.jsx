import React from 'react';
import StButton from '../../common/StButton'
import cl from './BlockFotoText.module.scss'
import RightBlock from './RightBlock';

function BlockFotoText({data}) {
    return (
        <div className={cl.wrapper}>

            <h2>{data.title}</h2>

            {data.layers.map((item, index)=>{
                return <RightBlock key={item.layerId} cl={cl} data={item}/>
            })}
            
        </div>
    );
}

export default BlockFotoText;

