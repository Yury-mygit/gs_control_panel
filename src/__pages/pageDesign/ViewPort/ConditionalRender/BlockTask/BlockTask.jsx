import React from 'react';
import settings from '../../../../../common/settings';
import { useState } from 'react';
import {useGetTaskPageDataQuery} from '../../../../../API/pageAPI'
import cl from './BlockTask.module.scss'
import TaskList from './TaskList/TaskList';
import TaskMenu from './TaskMenu/TaskMenu'
import TaskModal from './TaskModal/TaskModal';
import Modal_AddEdit from './Modal_AddEdit/Modal_AddEdit';


const BlockTask = () => {

    const { data, isError, isLoading, isFetching } = useGetTaskPageDataQuery (1)

    const [taskModal, setTaskModal] = useState(-1)
    const [editTaskModalShow, setEditTaskModalShow] = useState({show: true, new: false, id: 2})
    
    if (isLoading) return <div>Loading ...</div>

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
                    data={data[taskModal]}
                /> 

                <Modal_AddEdit
                    editTaskModalShow = {editTaskModalShow}
                    setEditTaskModalShow = {setEditTaskModalShow}
                    data={data[editTaskModalShow.id]}
                />
            </div>
        </div>
    );
    
};

export default BlockTask;