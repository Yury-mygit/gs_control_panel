import React from 'react';
import cl from './CMS.module.scss'

const Header = () => {
    return (
        <div className={cl.header}> 
                <div>Идентификатор</div>
                <div>Дата платежа</div>
                <div>Плетаж в ПС</div>
                <div>Продукт</div> 
                <div>Сумма</div> 
                <div>Статус</div> 
                <div>Аккаунт</div> 
                <div>Клиент</div> 
                <div>Почта</div>
                <div>Телефон</div>
            </div>
    );
};

export default Header;