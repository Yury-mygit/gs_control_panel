import React from 'react';
import cl from './PageLogin.module.scss'

import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../store/userSlice';
import { useState } from 'react';

const PageLogin = () => {
    let [userName, setUserName] = useState('')

    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.controller.value)
    const user = useSelector((state) => state.user.user)
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch()

    return (
        <div className={cl.content}>
        <div className={cl.view}>
          <input 
              onChange={(e)=>setUserName(e.target.value)}
              value = {userName} 
          />

          <button onClick=
          {
            ()=>dispatch(logIn(userName))
          }>
            Log in
          </button>
        </div> 
      </div>      
    );
};

export default PageLogin;