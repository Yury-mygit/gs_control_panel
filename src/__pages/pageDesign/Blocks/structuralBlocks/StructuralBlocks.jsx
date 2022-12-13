import React from 'react';
import cl from './StructuralBlocks.module.scss'

const StructuralBlocks = ({setInput}) => {
    return (
        <div 
            className={cl.wrapper}
            onMouseLeave={(e)=>{                
                setInput(false)
            }}
        >
            {defaultBlocks.map(i=>{
                return (
                    <div className={cl.block} key = {i.id}> 
                        {i.identifier} 
                    </div>
                )
            })} 
        </div>
    );
};

export default StructuralBlocks;



const defaultBlocks= [
    {id: 1, identifier:'BlockFixed', inner:'<div> {i.identifier} </div>'},
    {id: 2, identifier:'BlockContacts'},
    {id: 3, identifier:'BlockBenetits'},
    {id: 4, identifier:'BlockCosts'},
    {id: 5, identifier:'BlockFotoText'},
    {id: 6, identifier:'BlockReviews'},
    {id: 7, identifier:'BlockContacts'},
]