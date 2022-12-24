import React, { useState } from 'react';
import cl from './Design.module.scss'
import ViewPort from './ViewPort/ViewPort';
import PageList from './PageList/PageList';
import Action from './Actions/Action';


const Design = () => {   
    const [currentPage, setCurrentPage] = useState(2)  
    const [input, setInput] = useState(false)

    return (
        <div className={cl.content}>
            <Action 
                input={input} 
                setInput={setInput}
            />
             <ViewPort 
                currentPage= {currentPage}
                input={input} 
                setInput={setInput}
            />
             <PageList 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            /> 
        </div> 
    );   
   
};

export default Design;




