import React, { useState } from 'react';
import cl from './TaskItemWrapper.module.scss'
import TaskItem from './TaskItem/TaskItem';
import TaskControl from './TaskControl/TaskControl';

const TaskItemWrapper = ({i, setTaskModal,  editTaskModalShow , setEditTaskModalShow}) => {

    const [showControl, setShowControl] = useState(false)

    return (
        <div 
            className={cl.wrapper} 
            onMouseEnter={()=>setShowControl(true)}
            onMouseLeave={()=>setShowControl(false)}
        >
           
                <TaskControl 
                    showControl={showControl}
                    setShowControl={setShowControl}
                    data = {i}
                    editTaskModalShow = {editTaskModalShow}
                    setEditTaskModalShow = {setEditTaskModalShow}
                />
                <TaskItem 
                    key={i.id} 
                    id={i.id}
                    desk={i.deskription}
                    image={i.img_url}
                    imageExt={i.imgext_url}
                    setTask={setTaskModal}
                    showControl={showControl}
                    setShowControl={setShowControl}
                            
                />
            
            
        </div>
    );
};

export default TaskItemWrapper;