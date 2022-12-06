import React from 'react';
import settings from '../../../settings';

const InnerBlock = ({data, cl}) => {
    return (
        <div className={cl.block}>
            <div className={cl.block__imgWrapper}> 
                    <img src={`${settings.server}image/${data.url}`}/>
            </div>
            <div className={cl.block__textWrapper}> 
                <h4> {data.title} </h4>
                <p> {data.motto} </p>
            </div>
        </div>
    );
};

export default InnerBlock;