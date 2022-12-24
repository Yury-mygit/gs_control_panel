import React from 'react';
import cl from './ProjectStructure.module.scss'
import Title from './Title/Title';
import PagesList from './PageList/PagesList';

const ProjectStructure = ({data}) => {
    return (
        <div className={cl.wrapper}>
             <Title data={data}/>
             <PagesList data={data}/>
        </div>
    );
};

export default ProjectStructure;