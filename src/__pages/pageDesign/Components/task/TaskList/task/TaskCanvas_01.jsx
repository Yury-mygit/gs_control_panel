import React, { useEffect } from 'react';
import { useRef } from 'react';
import cl from './task.module.css'

const TaskCanvas_01 = () => {

    useEffect(()=>{
        let ctx = canvasRef.current.getContext('2d')

    })

    const canvasRef = useRef()
    
    console.log(canvasRef.current)

    return (
        <div>
            <canvas 
             height={320} 
             width={480}
             ref = {canvasRef} 
             className={cl.canwas_main}
             >
                Обновите браузер
            </canvas>
        </div>
    );
};

export default TaskCanvas_01;