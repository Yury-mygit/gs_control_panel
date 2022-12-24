import React from 'react';
import cl from './Home.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import { useGetPageDataQuery } from '../../API/pageAPI';
import ProjectStructure from './ProjectStructure/ProjectStructure';
import Summary from './PaySummary/Summary';

const Home = () => {
    let [userName, setUserName] = useState('')

    const count = useSelector((state) => state.counter.value)
    const name = useSelector((state) => state.controller.value)
    const user = useSelector((state) => state.user.user)
    const loggedIn = useSelector((state) => state.user.loggedIn)
    const dispatch = useDispatch()

    const { data, isError, isLoading, isFetching } = useGetPageDataQuery (10001)

    if (isLoading) return <div className={cl.wrapper}>Loading...</div>;
    if (isError) return <div className={cl.wrapper}>Ошибка загрузка</div>;

    
   
    return (
        <div className={cl.wrapper}>      
            <div className={cl.content}>
                <ProjectStructure  data={data}/>
                <Summary />            
            </div>     
        </div>      
    )
};

export default Home;