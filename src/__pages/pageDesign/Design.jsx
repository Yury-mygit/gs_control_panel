import React, { useState } from 'react';
import cl from './Design.module.scss'
import ViewPort from './Blocks/viewPort/ViewPort';
import PageList from './Blocks/pageList/PageList';
import Action from './Blocks/actions/Action';

const Design = () => {   
    const [currentPage, setCurrentPage] = useState(0)  
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




