import React, {useState, useRef} from 'react';
import settings from '../../../../../../common/settings';
import {useUpdateTasksMutation} from '../../../../../../API/tasksAPI'
import Title  from './Title/Title';
import Select from './Select/Select';
import Image from './Image/Image';
import Button from './Button/Button';


import cl from './Modal_AddEdit.module.scss'

const Modal_AddEdit = 
({
    editTaskModalShow: show, 
    setEditTaskModalShow: setShow,
    data=defaultData
}) => {


    const [uploaded, setUploaded] = useState({id:-1, status:-1})
    const [prev, setPrev] = useState(-1)
    const [taskType, setTaskType] = useState(0);
    const [updateTask] = useUpdateTasksMutation()
    
    const filePiker = useRef(null)
    // console.log(data)




    //===LOGIC======
    const save = async () => {
        

        let requestData = {
            id: data.id,
            deskription:data.deskription,
            img_url: data.img_url==prev ? uploaded.id : data.img_url,
            imgext_url: data.imgext_url==prev ? uploaded.id : data.imgext_url,
            type:data.type,
        }

        await updateTask(requestData)
        console.log(requestData)
    }
    //=========================================







    //===VIEW=====
    if (!show.show) return ''
    return (
        <div 
            className={cl.wrapper} 
            onClick={(e)=>{
                setShow({show: false, new: false, id: -1})
                setUploaded({id:-1, status:-1})
                
            }}
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

                        uploaded = {uploaded}
                        setUploaded= {setUploaded}
                        filePiker = {filePiker}
                        
                        setPrev = {setPrev}
                />
                <Button 
                    id = {data.id}
                    uploaded = {uploaded}
                    setUploaded= {setUploaded}
                    save = {save}
                />                                        
            </div>
            
        </div>
    );
};

export default Modal_AddEdit;




let defaultData = {
    id:'-1',
    img_url:'#',
    imgext_url:'#',
    type:'Не определен',
    deskription:'Не определено',
}

const taskTypes = ['Исключить лишнее', 'Дополнить', 'Произвольный']; 