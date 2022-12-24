import React from 'react';
import cl from './Title.module.scss'

const Title = ({data}) => {
    return (
        <div className={cl.wrapper}>
            <h2>Структура проекта</h2>
            
            <h4> {data.length} страниц:</h4>
        </div>
    );
};

export default Title;