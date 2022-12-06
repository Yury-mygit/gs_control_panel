import React from 'react';
import cl from '../../../pages/contacts/Contacts.module.scss'

const Contacts = ({data}) => {
    return (
        <>
            <h2> {data.title} </h2>
            <img src={data.logo} className={cl.logo}/>
            <div className={cl.content}>
                {data.text} 
            </div>
        </>
    );
};

export default Contacts;