import React from 'react';
import cl from './Button.module.scss'

const Button = ({id=-1, uploaded, setUploaded, save}) => {

    return (
        <div className={cl.buttonBlock}>
            {
                id >= 0 
                    ?   <button
                            onClick={save}
                        > Сохранить </button>
                    :   <button
                            onClick={save}
                        > Создать </button>
            }
        </div>
    );
};

export default Button;