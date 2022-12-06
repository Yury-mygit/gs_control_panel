import React, { useState, useRef } from 'react';
import { useGetPageDataQuery } from '../../API/pageAPI';
import Preview from './preview/Preview';
import cl from './Design.module.scss'

const Design = () => {

    const [position, setPosition] = useState(0)
    const [currentPage, setCurrentPage] = useState('')

    let previewItems 

    const { data, isError, isLoading, isFetching } = useGetPageDataQuery (1)
    
    const inputEl = useRef(0);


    if (isLoading) previewItems = <div>Loading....</div>
    if (!isLoading) previewItems = data.map(i=>
        <Preview 
            key = {i.id} 
            id={i.id} 
            page={i.page}
            action={setCurrentPage}
        />)   

    if (!isLoading)
    return (
        <div className={cl.content}>
            <div className={cl.menu}>
                меню
            </div>

            <div className={cl.viewPort}>
                viewPort {currentPage}
            </div> 

            <div className={cl.pageList_wrapper}>
                
                <button
                    onClick={()=>{
                        
                       if (position < 0 && position >= -300) setPosition(position+40)

                    }}
                >Вверх</button>
            
                <div className={cl.pageList__content}>
                    <div 
                        className={cl.pageList__content_movable}
                        style={{top:`${position}px`}}
                        ref={inputEl}
                    >
                        {previewItems}
                    </div>
                    
                </div>
            
                <button
                    onClick={()=>{
                        
                        if (position <= 0 && position > -300) setPosition(position-40)
 
                     }}
                >Вниз</button>
                
            </div>

        </div> 
    );

    if (isLoading)
    return (
        <div className={cl.content}>
           
           loading...

        </div> 
    );
};

export default Design;