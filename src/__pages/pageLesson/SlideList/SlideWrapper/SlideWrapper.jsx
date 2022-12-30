import React, {useState} from 'react';
import c from './SlideWrapper.module.scss'

import Slide from './Slide/Slide'


const SlideWrapper = () => {

    const [lineStartCoordinate, setLineStartCoordinate] = useState({x:0,y:0})

    const [newObj, setNewObj] = useState({})

    return (
        <div className={c.wrapper}>
           
            <Slide
                lineStartCoordinate    = {lineStartCoordinate} 
                setLineStartCoordinate = {setLineStartCoordinate}
                newObj                 = {newObj}
                setNewObj              = {setNewObj}
            />
            
        </div>
        
    );
};

export default SlideWrapper;