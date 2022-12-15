import React from 'react';
import NewsItem from './NewsItemWrapper/NewsItem/NewsItem';
import NewsItemWrapper from './NewsItemWrapper/NewsItemWrapper';
import cl from './NewsList.module.scss'

const NewsList = ({data}) => {
    return(
        <div className={cl.listWrpper}>

            {data.map(i=> <NewsItemWrapper  key={i.id}  data={i}  />)} 

        </div>
    )             
};

export default NewsList;



