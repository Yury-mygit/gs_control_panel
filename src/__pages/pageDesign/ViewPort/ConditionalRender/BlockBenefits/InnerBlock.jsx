import React from 'react';
import settings from '../../../../../settings';

const InnerBlock = ({data, cl}) => {

    // console.log(data)

    return (
        <div className={cl.block}>
            <div className={cl.block__imgWrapper}> 
                    <img src={`${settings.imageServer}image/${data.img_url}`}/>
            </div>
            <div className={cl.block__textWrapper}> 
                <h4> {data.title} </h4>
                <p> {data.motto} </p>
            </div>
        </div>
    );
};

export default InnerBlock;