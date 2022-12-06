import React from 'react';
import settings from '../../../settings';

const BlockCard = ({cl, data}) => {
    return (
        <div className={cl.blockCard}>
            <div className={cl.block__imgWrapper}> 
                    <img src={`${settings.server}image/${data.url}`}/>
            </div>
            <h3> 
                {data.title}
            </h3> 
            
            <div> 
                {data.text}
            </div>
        </div>
    );
};

export default BlockCard;