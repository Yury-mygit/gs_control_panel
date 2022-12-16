import React from 'react';
import cl from './TaskItemWrapper.module.scss'
import TaskItem from './TaskItem/TaskItem';

const TaskItemWrapper = ({i, setTaskModal}) => {
    return (
        <div className={cl.wrapper}>
            <TaskItem 
                         key={i.id} 
                         id={i.id}
                         desk={i.deskription}
                         image={i.img_url}
                         imageExt={i.imgext_url}
                         setTask={setTaskModal}
            />
        </div>
    );
};

export default TaskItemWrapper;