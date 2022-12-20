import React from 'react';
import cl from './Button.module.scss'

const Button = ({id=0}) => {
    return (
        <div className={cl.buttonBlock}>
            {
                id >= 0 
                    ?   <button
                            onClick={()=>alert('Редактировать')}
                        > Сохранить </button>
                    :   <button
                            onClick={()=>alert('Создать')}
                        > Создать </button>
            }
        </div>
    );
};

export default Button;