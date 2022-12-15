import React, { useState } from 'react';
import NewsItem from './NewsItem/NewsItem';
import Modal from './Modal/Modal';
import cl from './NewsItemWrapper.module.scss'

const NewsItemWrapper = ({data}) => {

    const [edit, setEdit] = useState(false)

    return (
        <div className={cl.wrapper}>
            {edit ? <Modal data = {data} setEdit={setEdit}>  </Modal> : ''}
            <div className={cl.controls}>
                <button
                    onClick={()=>{
                       
                        // document.body.style.overflow = "hidden";
                        setEdit(true)
                    }}
                    className={cl.editButton}
                >редактировать</button> 
                
            </div>
            <NewsItem data={data}/>
        </div>
    );
};

export default NewsItemWrapper;