import React from 'react';
import settings from '../../../settings';
import StButton from '../../common/StButton';



const RightBlock = ({cl, data}) => {

    let text = 
            <div className={cl.textComponent}>
                <h2>{data.text.title}</h2>
                <p>
                    {data.text.text}
                </p>
                <StButton 
                    text={data.text.linkTitle}
                    link={data.text.link}
                />
            </div>
       
    
    const image = 
            <div className={cl.picComponent}>
                <img 
                    src={`${settings.server}image/${data.img.url}`} 
                />
            </div>   
    
    if (data.position == 'right'){
        return   (
                <div className={cl.components}> 
                        {text}
                        {image}
                 </div>   
        )
    }else{
        return (
            <div className={cl.components}> 
             {image}
                        {text}
                       
                 </div>
        )
    }                       
            
                      
                    
    
                
           
        
            
    
};

export default RightBlock;