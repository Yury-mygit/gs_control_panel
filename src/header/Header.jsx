import React, { useEffect } from 'react';
import cl from './Header.module.scss'
import { Link } from "react-router-dom";

import {useSelector, useDispatch} from 'react-redux'
import { logIn, logOut } from '../store/userSlice';

const Header = () => {

    const user = useSelector((state) => state.user.user)
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch()
 
    if (loggedIn)
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <div>Hello Admin</div>
                <button  
                    className={cl.item}
                    onClick={()=>{dispatch(logOut())}}
                >  {user}</button>
            </div>
        </div>
    );
    else
    return (
        <div className={cl.wrapper}>
        <div className={cl.content}>
            <div className={cl.buttons}>
                <div className={cl.item}>Вход</div>
            </div>
            <div className={cl.item}>
                {user}
            </div>
        </div>
        </div>
    );
};

export default Header;


{/* <div className={cl.buttons}>
                <div className={cl.item}>
                    <Link to="/">Главная</Link>
                </div>
                <div className={cl.item}>
                    <Link to="/design">Дизайн</Link>
                </div>
                <div className={cl.item}>
                    <Link to="/lesson">Уроки</Link>
                </div>
               
                <div className={cl.item}>
                    <Link to="/timetable">Расписание</Link>
                </div>
                <div className={cl.item}>
                    <Link to="/cms">CMS</Link>
                </div>
            
            </div> */}