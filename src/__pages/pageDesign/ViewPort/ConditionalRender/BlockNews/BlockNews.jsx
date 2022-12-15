import React, { useState } from 'react';
import Menu from './Menu/Menu';
import cl from './BlockNews.module.scss'
// import { useGetNewsBlockDataQuery, useAddNewsMutation } from '../../../../API/pageAPI';
import { useGetNewsQuery, useAddNewsMutation } from '../../../../../API/newsAPI';
import NewsList from './NewsList/NewsList';

const BlockNews = () => {
    
    const [newsCount, setNewsCount] = useState(5) 
    const { data = [], isError, isLoading, isFetching } = useGetNewsQuery(newsCount,0)
    const [addPost, { isLoading2 }] = useAddNewsMutation()

    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <div>Загрузка..</div>

    // console.log(data)

    return (  
        <div className={cl.wrapper} >

            <h2> Новости </h2>

            <Menu 
                newsCount = {newsCount}
                setNewsCount = {setNewsCount}
            />

            <NewsList  
                data = {data.data} 
                // data = {data} 
            />

            <div className={cl.controll}>
                <button> назад </button> 
                <div> ... </div>
                <button> вперед </button>
            </div>
            
        </div>     
    );
};

export default BlockNews;