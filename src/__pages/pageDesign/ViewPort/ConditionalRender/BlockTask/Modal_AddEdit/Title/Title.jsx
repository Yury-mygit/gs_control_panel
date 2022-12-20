import React from 'react';


const Title = ({id=0}) => {
    return (
        <div>
            <h3>
                {id >= 0 ? `Редактирование задачи номер ${id}` : 'Создание новой задачи'}
            </h3>
        </div>
    );
};

export default Title;