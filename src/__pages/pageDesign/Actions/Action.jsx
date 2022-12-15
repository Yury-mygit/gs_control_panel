import React, {useState} from 'react';
import cl from './style.module.scss'
import Block from './Block/Block'



const Action = ({input, setInput}) => {

   

    return (
        <div className={cl.wrapper}>
            <Block 
                key={1} 
                text={'+'}
                input={input}
                setInput={setInput}
            />
           
            
            
        </div>
    );
};

export default Action;