import React from 'react';
import cl from './Select.module.scss'

const Select = ({id=0, taskTypes=[]}) => {


    const options = taskTypes.map((text, index) => {
        return <option key={index} value={index}>{text}</option>;
    });

    return (
        <div className={[cl.block, cl.mb20].join(' ')}>
                    <p>Тип задачи </p> 
                   
                    <select                        
                        onChange={(event) => chengeSelect(event)}
                        disabled = {id >= 0 ? true : false} 
                        className = 
                        { 
                            id >= 0 
                            ? [cl.selectStyle, cl.noarrow].join(' ') 
                            : [cl.selectStyle]
                        }                   
                    >                         
                        {options}
                    </select>
                </div>
    );
};

export default Select;