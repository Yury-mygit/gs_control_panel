import React, {useState, useEffect}  from 'react';
import cl from './style.module.scss'
import StructuralBlocks from './StructuralBlock/StructuralBlocks';

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