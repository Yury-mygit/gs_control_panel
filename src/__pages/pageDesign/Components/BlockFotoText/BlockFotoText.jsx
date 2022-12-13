import React from 'react';
import cl from './BlockFotoText.module.scss'
import RightBlock from './RightBlock';

function BlockFotoText({data}) {

    // console.log(data)
    return (
        <div className={cl.wrapper}>

            <h2>{data.title}</h2>

            {data.layers.map((item, index)=>{
                return <RightBlock key={item.id} cl={cl} data={item}/>
            })}
            
        </div>
    );
}

export default BlockFotoText;

