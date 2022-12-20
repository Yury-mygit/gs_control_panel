import React from 'react';
import settings from '../../../../../../../../common/settings';
import cl from './NewsItem.module.scss'



const NewsItem = ({ data}) => {
    
    let img = `${settings.imageServer}image/${data.img_url}`
    return (
        <div className={cl.wrapper}>
                <div  className={cl.title_content}>
                    <div className={cl.img_wrapper}>
                        <img src={img}/>
                    </div>
                    <h3 className={cl.title_text}>  
                        {data.title} 
                    </h3>
                    <div className={cl.text}>           
                    {data.id} {data.body}               
                </div>         
                </div>

              
        </div>
    );
};

export default NewsItem;