import React from 'react';
import cl from './CMS.module.scss'
import Pay from './Pay';

const PayList = () => {
    return (
    <div className={cl.table}>    
        <Pay />
        <Pay />
        <Pay />
        <Pay />
    </div>
    );
};

export default PayList;