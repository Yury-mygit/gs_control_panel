import React, {useState, useEffect} from 'react';
import settings from '../../../../../../../common/settings';
import { VscFolderOpened } from "react-icons/vsc";
import cl from './Image.module.scss'

const Image = ({
    
    img,
    imgExt,
    ChoseImage,
    ChoseEXTImage,


    imgUpload,
    imgEXTUpload,

    inputImg,
    inputEXTImg

}) => {

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
                    onClick={()=>ChoseImage()}
                />
                </div>
            </div>

            <div className={cl.block}>
                <p>
                    Лишняя иконка
                </p>
                <div      
                    style={{backgroundImage: imgExt}}
                    className={cl.item}
                >
                <VscFolderOpened 
                    className={cl.icon}
                    onClick={()=>ChoseEXTImage()}
                />
                </div>
            </div>  


            <input type="file" 
                    onChange={imgUpload}
                    ref={inputImg}
                    className={cl.hidden}
                    accept='image/*,.png,.jpg,.jpeg,.gif,.web'
            />

            <input type="file" 
                    onChange={imgEXTUpload}
                    ref={inputEXTImg}
                    className={cl.hidden}
                    accept='image/*,.png,.jpg,.jpeg,.gif,.web'
            />
        </div>
    );
};

export default Image;