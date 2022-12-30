import React from 'react';
import c from './SlideList.module.scss'

import SlideWrapper from './SlideWrapper/SlideWrapper';

const SlideList = () => {
    return (
        <div className={c.wrapper}>
            <SlideWrapper />
            <SlideWrapper />
            <SlideWrapper />
        </div>
    );
};

export default SlideList;