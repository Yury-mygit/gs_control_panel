import React, { useState } from 'react';
import {Outlet} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { setUpUser, defuser } from '../store/controllerSlice';
import { decrement, increment } from '../store/counterSlice'

import Header from '../header/Header';
import Footer from '../footer/Footer';
import { logIn } from '../store/userSlice';

import cl from './Root.module.scss'
import MainMenu from '../MainMenu/MainMenu';

const Root = () => {

  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.controller.value)
  const user = useSelector((state) => state.user.user)
  const loggedIn = useSelector((state) => state.user.loggedIn)
  const dispatch = useDispatch()

  

  return (
    <div className={cl.wrapper}>
      <Header/>  
      <div className={cl.content}> 
        <MainMenu />   
        <Outlet/>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Root;

