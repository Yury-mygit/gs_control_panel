import React, {useState} from 'react';
import StructuralBlocks from '../structuralBlocks/StructuralBlocks';
import cl from './Action.module.scss'
import Block from './components/Block'



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