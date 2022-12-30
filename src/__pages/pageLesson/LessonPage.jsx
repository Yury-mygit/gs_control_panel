import React from 'react';
import Areas from './Areas/Areas';
import LastWork from './LastWork/LastWork';
import cl from './LessonPage.module.scss'
import Title from './Title/Title';

import SlideList from './SlideList/SlideList';
  
const LessonPage = () => {

 

  return (
    <div className={cl.wrapper}>
      <div className={cl.content}>
        <Title />                
        <Areas />
        <SlideList />
        <LastWork ></LastWork>
      </div>
    </div>
    );
};

export default LessonPage;





/*
Entrys
1. Lesson
  1.1 Description  - Lesson settings and identification data
  1.2 Slide        - Structural element of lesson
  1.3 Finisher     - final element of lesson

2. Slide
id
type



3. Student

4. Teacher


*/
