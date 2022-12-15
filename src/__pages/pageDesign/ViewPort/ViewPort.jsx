import React from 'react';
import ConditionalRender from './ConditionalRender/ConditionalRender';
import { useGetPageDataQuery, useGetOnePageDataQuery } from '../../../API/pageAPI';
import AddLine from './addLine/AddLine';
import Deskription from './Deskription/Deskription';
import cl from './ViewPort.module.scss'


const ViewPort = ({ currentPage, input, setInput }) => {


    const { data=[], isError, isLoading, isFetching } = useGetOnePageDataQuery (currentPage)

    if (isError) return <div>An error has occurred!</div>
    if (isLoading) return <div>Загрузка</div>

    return (
        <div className={cl.viewPort}>
            {data.structural_blocks.map((i)=>{
                return(
                <div className={cl.viewBlock} key={i.id}>
                    {input ? <AddLine /> : ''}
                    <Deskription 
                        type={i.type}
                        data={i.data}
                    />
                    <ConditionalRender 
                        type={i.type} 
                        data={i.data}
                    />
                </div>
                )     
            })}
            {input ? <AddLine /> : ''}
        </div> 
        );

};

export default ViewPort;