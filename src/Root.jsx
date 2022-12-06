import React, { useState } from 'react';
import {Outlet} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setUpUser, defuser } from './store/controllerSlice';
import { decrement, increment } from './store/counterSlice'

import Header from './Header';
import Footer from './Footer';
import { logIn } from './store/userSlice';

import cl from './Root.module.scss'

const Root = () => {

  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.controller.value)
  const user = useSelector((state) => state.user.user)
  const loggedIn = useSelector((state) => state.user.loggedIn)
  const dispatch = useDispatch()

  

  return (
    <div className={cl.wrapper}>
      <Header/>   
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;

