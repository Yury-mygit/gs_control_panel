import React from 'react';
import cl from './BlockBenefits.module.scss'
import InnerBlock from './InnerBlock';

const BlockBenefits = ({data}) => {

    return (
        <div className={cl.wrapper}>
            <h2> Почему выбирают нас? </h2>
            <div className={cl.motto}>{data.motto}</div>

            {data.layers.map((value, index, array) => {
                return <InnerBlock key={value.id} data={value} cl={cl}/>
            })}
            
        </div>
    );
};

export default BlockBenefits;