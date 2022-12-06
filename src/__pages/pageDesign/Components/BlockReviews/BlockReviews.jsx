import React from 'react';
import settings from '../../../settings';
import cl from './blockReviews.module.scss'

const BlockReviews = ({data}) => {
    return (
        <div className={cl.wrapper}>   
            <h3>
                {data.title} 
            </h3> 
           
            <div className={cl.galarywrapper}>
                <div>
                    <img src={`${settings.server}image/${data.layers[0].url}`}></img>
                </div>
                <div>
                    <p>
                     {data.layers[0].text}
                    <strong>
                        {data.layers[0].author}
                    </strong>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlockReviews;