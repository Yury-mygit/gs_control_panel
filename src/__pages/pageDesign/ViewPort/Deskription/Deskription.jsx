import React from 'react';
import cl from './Deskription.module.scss'

const Deskription = ({data, type}) => {
    // console.log(data)
    return (
        <div className={cl.wrapper}> 
            <h3>Тип блока: <b>{type}</b></h3>  
            <div className={cl.controll}>
                <div>Управление блоком</div>
                <div className={cl.dimensions}>
                    <h4>размеры</h4>
                    <div> 1000 Х 1000</div>
                    <button>Удалить</button>
                    <button>Пееренести вниз</button>
                    <button>Пееренести вверх</button>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Deskription;