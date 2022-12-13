import React from 'react';
import PageBlocks from './PageBlocks';
import cl from './PagesList.module.scss'
const PagesList = ({data}) => {

    // console.log(data)
    return (
        <div className={cl.wrapper}>
            <h4>В проекте всего {data.length} страниц</h4>
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