import React, { useState } from 'react';
import cl from './Modal.module.scss'
// import { useAddNewsMutation, useUpdateNewsMutation } from '../../../../API/pageAPI';
import { 
    useGetNewsQuery, 
    useAddNewsMutation, 
    useUpdateNewsMutation,
    useDeleteNewsMutation, 
} from '../../../../../../../../API/newsAPI';




const Modal = ({data, setEdit}) => {

    const [title, setTitle] = useState(data.title)
    const [body, setBody] = useState(data.body)
    const [addNewAction, {newsData}] = useAddNewsMutation()
    const [updateNewAction] = useUpdateNewsMutation()
    const [deleteNewAction] = useDeleteNewsMutation()

    // console.log(data)
    const handleAddNews = async () => {
        
        if (title && body) {
    
            let tempdata = {
                // id:      data.id,
                type:'111',
                body:body,
                title:title,
                img_url:'img_url',
            }
            await addNewAction(data)
            
        }
    }
    
    const handleUpdateNews = async () => {
       
        if (title && body) {
    
            let tempdata = {
                id:      data.id,
                type:    '111',
                body:    body,
                title:   title,
                img_url: 'img_url',
            }
            await updateNewAction(tempdata)
            
        }
    }
    
    const handleDeleteNews = async () => {
    
            let tempdata = {
                id:      data.id,
            }
            await deleteNewAction(tempdata)
    }

    return (
        <div 
            className={cl.wrapper}
            onClick={
                (e)=>{
                    setEdit(false)
                    e.stopPropagation()
                }
                
            }
        >
            <div 
            className={cl.content}
            onClick={(e)=>e.stopPropagation()}
            >
                <div> 
                    <input 
                        value={title}
                        onChange = {(e)=>setTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <textarea
                        value={body}
                        onChange = {(e)=>setBody(e.target.value)}
                    ></textarea>
                </div>
                
                 <button
                    onClick = {handleUpdateNews}
                >
                изменить текущий
                </button>

                <button
                    onClick = {handleAddNews}
                >
                добавить новый
                </button>

                <button
                    onClick = {()=>handleDeleteNews(data)}
                >
                Удалить
                </button>

                <button
                    onClick = {(e)=>{
                    setEdit(false)
                    e.stopPropagation();
                }}
                 >Закрыть</button>
            </div>
        </div>
    );
};



export default Modal;


