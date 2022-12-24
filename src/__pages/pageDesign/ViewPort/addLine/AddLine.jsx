import React from 'react';
import cl from './AddLine.module.scss'

const AddLine = ({input}) => {

    if (!input) return ''
    return (
        <div className={cl.wrapper}>
            Перетащи сюда новый блок для добавления
        </div>
    );
};

export default AddLine;