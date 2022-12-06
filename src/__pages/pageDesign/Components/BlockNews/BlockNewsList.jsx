import React from 'react';

const BlockNews = () => {
    
    if (news && news.length) inner = news.map((item, index)=>{
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