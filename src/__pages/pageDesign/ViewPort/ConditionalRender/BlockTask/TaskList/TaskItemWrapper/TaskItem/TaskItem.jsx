import React, { useState } from 'react';
import cl from './TaskItem.module.scss'
import settings from '../../../../../../../../settings';

const TaskItem = ({id, desk, image, imageExt, setTask}) => {

    return (
        <div 
            className={cl.taskview__wrapper} 
            style={{ backgroundImage: `url(${settings.imageServer}image/${image})`,}}
            onClick={()=>{setTask(id);}}
        >
            <h3>{desk}</h3>

        </div>
    );
};

export default TaskItem;

const TaskViewPort = () => {
    return (

        <div> Задача </div>

    )
}
                 