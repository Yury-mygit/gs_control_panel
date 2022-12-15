import React from 'react';
import cl from '../../Styles/Tasks.module.scss'

const TaskMenu = ({typeList}) => {
    return (
        <div className={cl.taskmenu__wrapper}>
            <h3>Типы задач</h3>
            <ul>
                <li>Исключить лишнее</li>
                <li>Дополнить</li>
                <li>Произвольный</li>
            </ul>
        </div>
    );
};

export default TaskMenu;