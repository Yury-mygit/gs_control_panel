import React, {useState} from 'react';
import settings from '../../../../../../common/settings';
import Title  from './Title/Title';
import Select from './Select/Select';
import Image from './Image/Image';
import Button from './Button/Button';


import cl from './Modal_AddEdit.module.scss'

//   {/* {show: false, new: false, id: -1} */}

const Modal_AddEdit = 
({
    editTaskModalShow: show, 
    setEditTaskModalShow: setShow,
    data={
        id:'-1',
        img_url:'#',
        imgext_url:'#',
        type:'Не определен',
        deskription:'Не определено',
    }
}) => {

    const [taskType, setTaskType] = useState(0);
    const taskTypes = ['Исключить лишнее', 'Дополнить', 'Произвольный']; 

    function chengeSelect(event) {
        setTaskType(event.target.value);
    }

    if (!show.show) return ''
    return (
        <div 
            className={cl.wrapper} 
            onClick={(e)=>setShow({show: false, new: false, id: -1})}
        >
            <div 
                className={cl.content} 
                onClick={(e)=>e.stopPropagation()}
            >               
                <Title  id = {data.id}/>
                <Select id = {data.id} taskTypes={taskTypes}/>
                <Image  id = {data.id} 
                        img_url={data.img_url} 
                        imgext_url={data.imgext_url}
                />
                <Button id = {data.id}/>                                        
            </div>
            
        </div>
    );
};

export default Modal_AddEdit;