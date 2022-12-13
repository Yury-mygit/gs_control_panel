import React, {useState, useEffect}  from 'react';
import cl from './Block.module.scss'
import StructuralBlocks from '../../structuralBlocks/StructuralBlocks';

const Block = ({text, input, setInput}) => {  
    return (
        <div 
            className={cl.wrapper}
            onMouseEnter={()=>{    
              setInput(true)
              // setInput()
              
            }}
                       
        >
            {text}
            {input? <StructuralBlocks setInput={setInput} />: ''}
        </div>
    );
};

export default Block;