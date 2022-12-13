import React, { useState } from 'react';
import cl from './BlockNewsList.module.scss'
import { useGetNewsBlockDataQuery } from '../../../../API/pageAPI';

const BlockNews = () => {
    
    const [newsCount, setNewsCount] = useState(5)
    
    const { data = [], isError, isLoading, isFetching } = useGetNewsBlockDataQuery()

    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <div>Загрузка..</div>
    
    let inner = data.map((item, index)=>
        {
            return (
                <div 
                    key={index} 
                    className={cl.news_wrapper}
                > 
                    <div className={cl.news__title_content}>
                        <p>title:</p>
                        <h3 className={cl.news__title_text}>  
                            {item.title} 
                        </h3>
                        
                    </div>
                    <div className={cl.news__body}>           
                        {item.body}               
                    </div>
                </div>
            )
        })


    return (  
        <div className={cl.wrapper} >
            <h2> Новости </h2>
            <div className={cl.news_menu} > 
                меню 
                <select value={newsCount} onChange={(e)=>setNewsCount(e.target.value)}>
                    <option value={5}> 5 </option>
                    <option value={10}> 10 </option>
                    <option value={20}> 20 </option>
                    <option value={40}> 40 </option>
                </select>
                {/* <button onClick={()=>setPage("dsd")}>статус</button> */}
            </div>
            {inner}
        </div>     
    );
};

export default BlockNews;