import React from 'react';
import cl from './Timetable.module.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const Timetable = () => {
    return (
        <div className={cl.content}>
        <div className={cl.view}>
          
            <div>Календарь занятий</div>
           
            <button onClick={()=>console.log('sddsdd')}>
                dnklvv
            </button>

        </div> 
        </div> 
    );
};

export default Timetable;