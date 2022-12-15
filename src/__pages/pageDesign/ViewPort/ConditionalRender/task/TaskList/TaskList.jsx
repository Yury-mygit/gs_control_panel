import React from 'react';
import settings from '../../../../../../settings';
import { useState } from 'react';
import {useGetTaskPageDataQuery} from '../../../../../../API/pageAPI'
import cl from '../Styles/Tasks.module.scss'

import TaskView from './task/TaskView';
import TaskMenu from './taskMenu/TaskMenu'
import TaskModal from './TaskModal';

let tasks = [
    {id:0 , type: 'findExtra', deskription:'Найдите лишнее', image: '200', imageExt: '201'},
    {id:1 , type: 'findExtra', deskription:'Найдите лишнее', image: '202', imageExt: '203'},
    {id:2 , type: 'findExtra', deskription:'Найдите лишнее', image: '204', imageExt: '205'},
    {id:3 , type: 'findExtra', deskription:'Найдите лишнее', image: '206', imageExt: '207'},
    // {id:5 , type: 'findExtra', deskription:'Найдите лишнее', image: '206', imageExt: '207'},
]



const TaskList = () => {

    const { data, isError, isLoading, isFetching } = useGetTaskPageDataQuery (1)

    const [taskModal, setTaskModal] = useState(-1)
    
    

    if (!isLoading) {console.log(data)}

    if (!isLoading) {
        let modal = taskModal >= 0
        ? 
        <TaskModal 
            taskModal={taskModal} 
            setTask={setTaskModal}
            data={data[taskModal]}
        /> 
        : 
            ''


        return (
            <div className={cl.tasklist__wrapper}>
                <TaskMenu/>
                {modal}
                {data.map((i)=>{
                    return (
                        <TaskView 
                        key={i.id} 
                        id={i.id}
                        desk={i.deskription}
                        image={i.img_url}
                        imageExt={i.imgext_url}
                        setTask={setTaskModal}
                        />
                    )
                })}
            </div>
        );


    }

    
    
};

export default TaskList;