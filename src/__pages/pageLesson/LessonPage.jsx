import React from 'react';
import cl from './LessonPage.module.scss'

const LessonPage = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                        <h2>Уроки</h2>
                        <div>В разработки</div>
            </div>
        </div>
    );
};

export default LessonPage;