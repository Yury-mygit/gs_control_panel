import React from 'react';
import cl from './TaskMenu.module.scss'

const TaskMenu = ({
    editTaskModalShow: show, 
    setEditTaskModalShow: setShow
}) => {
    return (
        <div className={cl.wrapper}>
            <h3>Типы задач</h3>
            <ul>
                <li>Исключить лишнее</li>
                <li>Дополнить</li>
                <li>Произвольный</li>
            </ul>
            <button
                onClick={()=>setShow({show: true, new: true, id: -1})}
            >Добавить</button>
        </div>
    );
};

export default TaskMenu;