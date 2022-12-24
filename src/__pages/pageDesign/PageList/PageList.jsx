import React, {useState, useRef} from 'react';
import { useGetPageDataQuery } from '../../../API/pageAPI';
import Preview from './preview/Preview';
import cl from './PageList.module.scss'

const PageList = ({currentPage, setCurrentPage}) => {

    const [position, setPosition] = useState(0)
    const { data=[], isError, isLoading, isFetching } = useGetPageDataQuery ()
    const inputEl = useRef(0);

    if (isError) return <div>An error has occurred!</div>

    if (isLoading) return <div>Загрузка</div>

    return (
        <div 
            className={cl.wrapper}
            onWheel={(e)=>{
                if (e.nativeEvent.deltaY>0) moveDovn(position,setPosition)
                if (e.nativeEvent.deltaY<0) moveUp(position,setPosition)
            }}
            onMouseEnter={(e)=>{
               
                // document.body.style.backgroundColor = "yellow";
                document.body.style.overflow = "hidden";
                
            }}
            onMouseLeave={(e)=>{
                // document.body.style.backgroundColor = "white";
                document.body.style.overflow = "auto";
            }}
        >
                
        <button
            onClick={()=>moveUp(position,setPosition)}
        >Вверх</button>
    
        <div 
            className={cl.pageList__content}
        >
            <div 
                className={cl.pageList__content_movable}
                style={{top:`${position}px`}}
                ref={inputEl}
            >
                { data.map(i=><Preview 
                    key = {i.id} 
                    id={i.id} 
                    page={i.page}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />)}
            </div>
            
        </div>
    
        <button
            onClick={()=>moveDovn(position,setPosition)}
        >Вниз</button>
        
    </div>
    );
};

export default PageList;


const moveDovn = (position, setPosition) =>{
    let a = position - 40
    if (a <= 0 && a >= -300) setPosition(a) 
    
}

const moveUp = (position, setPosition) =>{
    let a = position + 40
    if (a <= 0 && a >= -300) setPosition(a)
}