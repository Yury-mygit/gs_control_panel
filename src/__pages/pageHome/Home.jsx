import React from 'react';
import cl from './Home.module.scss'

import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';

import { useGetPageDataQuery } from '../../API/pageAPI';



// console.log('move = ', parseInt(cl.move))

const Home = () => {
    let [userName, setUserName] = useState('')

    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.controller.value)
    const user = useSelector((state) => state.user.user)
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch()

    const { data, isError, isLoading, isFetching } = useGetPageDataQuery (10001)

    
    
    

    return (
        <div className={cl.content}>

            
        
        </div>      
    );
};

export default Home;