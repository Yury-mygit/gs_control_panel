import React, { useState } from 'react';
import settings from '../../../../../common/settings';
import cl from './blockReviews.module.scss'

const BlockReviews = ({data}) => {

    // console.log(data)

    let [slide, setSlide] = useState(2)

    let layers = data.layers
    let title  = data.title

    // console.log(slide, layers)

    return (
        <div className={cl.wrapper}>   
            <h3> 
                {title} 
            </h3> 
           
            <div className={cl.galary__wrapper}>

                <div className={cl.galary__slide}> 
                    
                    <img src={`${settings.imageServer}image/${data.layers[slide].img_url}`}></img>
                    
                    <div className={cl.galary__slide_text}>
                        <p>
                            {data.layers[slide].text}        
                        </p>
                        <p>
                            <strong>
                                {data.layers[slide].author}
                            </strong>
                        </p>     
                    </div>    
                </div>

            </div>

            <div className={cl.point_list}>
                {layers.map((i)=>{
                    return (
                    
                    <button 
                        className={cl.point} 
                        key = {i.id}
                        onClick={()=>setSlide(i.id)}
                    ></button>
                    
                    )
                })}
            </div>
           
            
        </div>
    );
};

export default BlockReviews;