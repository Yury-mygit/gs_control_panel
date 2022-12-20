import React, {createElement as e} from 'react';
import cl from './TaskList.module.scss'
import TaskItem from './TaskItemWrapper/TaskItem/TaskItem';
import TaskItemWrapper from './TaskItemWrapper/TaskItemWrapper.jsx';
import { createElement } from 'react';

  
                    
const TaskList = ({data, setTaskModal, editTaskModalShow , setEditTaskModalShow}) => {
    return (
        <div className={cl.wrapper}>
            {data.map((i)=>{
                return (
                    <TaskItemWrapper 

                        i = {i}
                        key={i.id}
                        setTaskModal = {setTaskModal}
                        editTaskModalShow = {editTaskModalShow}
                        setEditTaskModalShow = {setEditTaskModalShow}
                    />
                )
            })}
        </div>
    );
};

export default TaskList;