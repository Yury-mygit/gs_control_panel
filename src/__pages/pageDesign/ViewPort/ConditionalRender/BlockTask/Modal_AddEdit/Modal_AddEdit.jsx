import React, {useState, useRef, useEffect} from 'react';
import settings from '../../../../../../common/settings';
import {useUpdateTasksMutation} from '../../../../../../API/tasksAPI'
import Title  from './Title/Title';
import Select from './Select/Select';
import Image from './Image/Image';
import Button from './Button/Button';


import cl from './Modal_AddEdit.module.scss'
import { upload } from '@testing-library/user-event/dist/upload';

const Modal_AddEdit = 
({
    editTaskModalShow: show, 
    setEditTaskModalShow: setShow,
    data=defaultData
}) => {

    const [state, setState] = useState({})
    const [uploaded, setUploaded] = useState({id:-1, status:-1})

    const [prev, setPrev] = useState(-1)
    const [taskType, setTaskType] = useState(0);
    const [updateTask] = useUpdateTasksMutation()

    const [img, setImg] = useState(null)
    const [imgExt, setImgExt] = useState(null)
    
    const inputImg = useRef(-1)
    const inputEXTImg = useRef(-1)
    
    // console.log(state)

    useEffect(()=>{
        setState({...data, imgChanged: false, newimg_url:-1, imgExtChanged: false, newimgExt_url:-1})
        
    },[data])

    // useEffect(()=>{
    //   log(state)
    // },[state])


    useEffect(()=>{

       
        if (state.id == -1) {
            setImg(`url(${settings.plug})`)
            setImgExt(`url(${settings.plug})`)
        } else{

            setImg(  state.imgChanged 
                ? `url(${settings.imageServer}image/${state.newimg_url})` 
                : `url(${settings.imageServer}image/${state.img_url})` 
            )
            setImgExt(  state.imgExtChanged 
                ? `url(${settings.imageServer}image/${state.newimgExt_url})` 
                : `url(${settings.imageServer}image/${state.imgext_url})` 
            )
        }

        

        // if (data.id >= 0 && uploaded.status==-1)  setImg ( `url(${settings.imageServer}image/${data.img_url})` )     
        // if (data.id < 0 && uploaded.status==-1)   setImg ( `url(${settings.plug})` )

        // if (uploaded.status!=-1)                  setImg ( `url(${settings.imageServer}image/${uploaded.id})` )
        
        // console.log('img',img)
    },[uploaded,show,state])




    

    //=======LOGIC======
    const save = async () => {
        let requestData = {
            id: state.id,
            deskription:state.deskription,

            img_url: state.imgChanged ? state.newimg_url : state.img_url,
            imgext_url: state.imgExtChanged ? state.newimgExt_url: imgExtChanged,

            type:state.type,
        }

        await updateTask(requestData)
        console.log(requestData)
    }

    const imgUpload = async (e) => {

        const formData = new FormData()
        formData.append('img',e.target.files[0]);

        const res = await fetch(settings.upload, {
            method:'POST',
            body:formData,
        })
        const ansver = await res.json();
        
        setState({...state, imgChanged: true, newimg_url:ansver.id })
    }



    const imgEXTUpload = async(e) => {
        
        const formData = new FormData()
        formData.append('img',e.target.files[0]);

        const res = await fetch(settings.upload, {
            method:'POST',
            body:formData,
        })
        const ansver = await res.json();
        
        setState({...state, imgExtChanged: true, newimgExt_url:ansver.id })
        
    }


    const ChoseImage = () => {      
        inputImg.current.click();
    }
    const ChoseEXTImage = () => {      
        inputEXTImg.current.click();
    }

    //=========================================



   

    // console.log('data', data)
    // console.log('uploaded',uploaded)

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

                <Image  
                      
                        img = {img}
                        imgExt = {imgExt}
                        
                        inputImg = {inputImg}
                        inputEXTImg = {inputEXTImg}
                        imgUpload={imgUpload}
                        imgEXTUpload={imgEXTUpload}
                        ChoseImage={ChoseImage}
                        ChoseEXTImage={ChoseEXTImage}


                        // uploaded = {uploaded}
                        // setUploaded= {setUploaded}

                         // id = {data.id} 
                        // img_url={data.img_url} 
                        // imgext_url={data.imgext_url}


                        
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