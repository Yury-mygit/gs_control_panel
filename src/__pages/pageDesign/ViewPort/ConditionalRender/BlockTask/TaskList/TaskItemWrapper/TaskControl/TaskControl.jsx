import React from 'react';
import { RxCross2 } from "react-icons/rx"; 
import { AiFillTool } from "react-icons/ai";

import cl from './TaskControl.module.scss'

const TaskControl = ({
        showControl:show, 
        setShowControl:set, 
        data,  
        editTaskModalShow , 
        setEditTaskModalShow
    }) => {

    // console.log(data)
    if (show) return (
        <div className={cl.wrapper}>
            <div className={cl.content}>

                <button
                    onClick={()=>{
                        setEditTaskModalShow({show: true, new: false, id: data.id})
                        // console.log(data)
                    }}
                >
                    <AiFillTool className={[cl.tool, cl.icon].join(' ')} />
                </button>
                <button><RxCross2 className={[cl.cross, cl.icon].join(' ')}/></button>
                
            </div>
            
        </div>
    );
};

export default TaskControl;