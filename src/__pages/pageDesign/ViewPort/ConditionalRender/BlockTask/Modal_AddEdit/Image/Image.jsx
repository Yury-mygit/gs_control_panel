import React, {useState, useEffect} from 'react';
import settings from '../../../../../../../common/settings';
import { VscFolderOpened } from "react-icons/vsc";
import cl from './Image.module.scss'

const Image = ({id=-1, img_url, imgext_url, uploaded, setUploaded, filePiker, setPrev}) => {

    // console.log(id, img_url, imgext_url, uploaded)

    
    const [img, setImg] = useState(null)

    const handlePick = (img) => {
        
        setPrev(img)
        filePiker.current.click();
    }

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
        const ansver = await res.json();
        
        setUploaded({status:1, id:ansver.id})
        // console.log('After ----',uploaded)
    }


    
    // imageServer:'http://factory/api/staging/',
    // console.log(id >= 0, uploaded.status==-1)
    useEffect(()=>{
        if (id >= 0 && uploaded.status==-1) setImg ( `url(${settings.imageServer}image/${img_url})` )     
        if (id < 0 && uploaded.status==-1) setImg ( `url(${settings.plug})` )
        if (uploaded.status!=-1)  setImg ( `url(${settings.imageServer}image/${uploaded.id})` )
      
    },[uploaded])

    // console.log(img, id , uploaded)
    
    // console.log('Before return', uploaded)
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
                    onClick={()=>handlePick(img_url)}
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
                    onClick={()=>handlePick(imgext_url)}
                />
                </div>
            </div>  
            <input type="file" 
                    onChange={handleChange}
                    ref={filePiker}
                    className={cl.hidden}
                    accept='image/*,.png,.jpg,.jpeg,.gif,.web'
                />
        </div>
    );
};

export default Image;