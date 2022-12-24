import React from 'react';
import settings from '../../../../../common/settings';
import { useState, useEffect } from 'react';
import {useGetTaskPageDataQuery} from '../../../../../API/pageAPI'
import {useGetTasksQuery} from '../../../../../API/tasksAPI'
import cl from './BlockTask.module.scss'
import TaskList from './TaskList/TaskList';
import TaskMenu from './TaskMenu/TaskMenu'
import TaskModal from './TaskModal/TaskModal';
import Modal_AddEdit from './Modal_AddEdit/Modal_AddEdit';


const BlockTask = () => {

    const { data, isError, isLoading, isFetching } = useGetTasksQuery()
    // const { data, isError, isLoading, isFetching } = useGetTaskPageDataQuery()

    const [taskModal, setTaskModal] = useState(-1)
    const [editTaskModalShow, setEditTaskModalShow] = 
            useState({show: false, new: false, id: -1})

    // useEffect(()=>{console.log(editTaskModalShow)},[editTaskModalShow])

    
    if (isLoading) return <div>Loading ...</div>

    // console.log(data)
    

    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <TaskMenu
                    editTaskModalShow = {editTaskModalShow}
                    setEditTaskModalShow = {setEditTaskModalShow}
                />
               
                <TaskList
                    data={data}
                    setTaskModal={setTaskModal}
                    editTaskModalShow = {editTaskModalShow}
                    setEditTaskModalShow = {setEditTaskModalShow}
                />

                <TaskModal 
                    taskModal={taskModal} 
                    setTask={setTaskModal}
                    data={data[taskModal-1]}
                /> 

                <Modal_AddEdit
                    editTaskModalShow = {editTaskModalShow}
                    setEditTaskModalShow = {setEditTaskModalShow}
                    data={data[editTaskModalShow.id-1]}
                />
            </div>
        </div>
    );
    
};

export default BlockTask;