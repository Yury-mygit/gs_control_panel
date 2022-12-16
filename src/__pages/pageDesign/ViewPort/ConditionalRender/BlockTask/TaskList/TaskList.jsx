import React, {createElement as e} from 'react';
import cl from './TaskList.module.scss'
import TaskItem from './TaskItemWrapper/TaskItem/TaskItem';
import TaskItemWrapper from './TaskItemWrapper/TaskItemWrapper.tsx';
import { createElement } from 'react';


const TaskList = ({data, setTaskModal}) => {
    return (
        <div className={cl.wrapper}>
            {data.map((i)=>{
                return (
                    <TaskItemWrapper 
                        i = {i}
                        key={i.id}
                        setTaskModal = {setTaskModal}
                    />
                    // <TaskItem 
                    //     key={i.id} 
                    //     id={i.id}
                    //     desk={i.deskription}
                    //     image={i.img_url}
                    //     imageExt={i.imgext_url}
                    //     setTask={setTaskModal}
                    // />
                   
                )
            })}
        </div>
    );
};

export default TaskList;