import React, {useState, useRef, useEffect} from 'react';
import settings from '../../../../../../../common/settings';
import { VscFolderOpened } from "react-icons/vsc";
import cl from './Image.module.scss'

const Image = ({id=-1, img_url, imgext_url}) => {

    const filePiker = useRef(null)
    const [uploaded, setUploaded] = useState(null)
    const [img, setImg] = useState(null)


    const handleChange = (e) => {
        handleUpload(e.target.files[0])
    }

    const handleUpload = async (file) => {

        const formData = new FormData()
        
        formData.append('img',file);

        const res = await fetch(settings.upload, {
            method:'POST',
            body:formData,
        })
        const data = await res.json();

        setUploaded(data)
    }

    const handlePick = () => {
        filePiker.current.click();
    }
    
    
    
    useEffect(()=>{
        // console.log('Зашли в useEfect')
        if (id >= 0 && uploaded==null) 
        {
            setImg ( `url(${settings.imageServer}image/${img_url})` ) 
            // console.log('Condition 1::',img, uploaded)
        }
            
        if (id < 0 && !uploaded) 
        {
            
            setImg ( `url(${settings.plug})` )
            // console.log('Condition 2::',img, uploaded)
        }
        
    
        if (uploaded) 
        {
            
            setImg ( `url(${settings.imageServer}file/get/${uploaded.id})` )
            // console.log('Condition 3::',img, uploaded)
        }
        
       
    },[uploaded])

    
    // console.log('Before return',img, uploaded)
    return (

        <div className={cl.wrapper}>
            <div className={cl.block}>
                <p>
                    Базовая иконка
                </p>
                <div className={cl.item}
                    style={{backgroundImage: img}}  
                >
                <VscFolderOpened 
                    className={cl.icon}
                    onClick={handlePick}
                />
                
                

                <input type="file" 
                    onChange={handleChange}
                    ref={filePiker}
                    className={cl.hidden}
                    accept='image/*,.png,.jpg,.jpeg,.gif,.web'
                />
                </div>
            </div>

            <div className={cl.block}>
                <p>
                    Лишняя иконка
                </p>
                <div      
                    style=
                    { 
                        id >= 0  
                            ? {backgroundImage: `url(${settings.imageServer}image/${imgext_url})`}  
                            : {backgroundImage: `url(${settings.plug})`}
                    }
                    className={cl.item}
                >
                <VscFolderOpened 
                    className={cl.icon}
                />
                </div>
            </div>  
        </div>
    );
};

export default Image;