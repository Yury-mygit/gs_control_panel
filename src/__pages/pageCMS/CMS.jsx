import React from 'react';
import cl from './CMS.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const CMS = () => {
    let [userName, setUserName] = useState('')

    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.controller.value)
    const user = useSelector((state) => state.user.user)
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch()
    return (
        <div className={cl.content}>
        <div className={cl.view}>
          
            CMS

        </div> 
        </div> 
    );
};

export default CMS;