import React from 'react';
import { log } from '../../../../common/settings';
import PageBlocks from './PageBlocks/PageBlocks';
import cl from './PagesList.module.scss'

const PagesList = ({data}) => {

    
    return (
        <div className={cl.wrapper}>
            
            {data.map(i => {
                return(
                <div key = {i.id}>
                    {i.seq} {i.title}
                    <PageBlocks blocks = {i.structural_blocks}/> 
                </div>
                ) 
            })}
        </div>
    );
};

export default PagesList;