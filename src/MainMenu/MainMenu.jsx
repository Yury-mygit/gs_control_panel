import React from 'react';
import cl from './MainMenu.module.scss'

import { Link } from "react-router-dom";

const MainMenu = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div className={cl.item}>
                    <Link to="/">Главная</Link>
                </div>

                <div className={cl.item}>
                    <Link to="/design">Дизайн</Link>
                </div>

                <div className={cl.item}>
                    <Link to="/lessons">Занятия</Link>
                </div>

                <div className={cl.item}>
                    <Link to="/materials">Материалы</Link>
                </div>
               
                <div className={cl.item}>
                    <Link to="/timetable">Расписание</Link>
                </div>

                <div className={cl.item}>
                    <Link to="/cms">CMS</Link>
                </div>
            </div>    
        </div>
    );
};

export default MainMenu;