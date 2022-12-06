import React from 'react';
import cl from './Design.module.scss'

const Block = ({id}) => {
    return (
        <div className={cl.block__wrapper}>
            {id}
        </div>
    );
};

export default Block;