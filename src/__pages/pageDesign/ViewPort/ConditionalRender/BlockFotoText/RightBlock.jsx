import React from 'react';
import settings from '../../../../../common/settings';
import StButton from '../common/StButton';



const RightBlock = ({cl, data}) => {



    let text = 
            <div className={cl.textComponent}>
                <h2>{data.text_title}</h2>
                <p>
                    {data.text_text}
                </p>
                <StButton 
                    text={data.text_link_title}
                    link={data.text_link}
                />
            </div>
       
    
    const image = 
            <div className={cl.picComponent}>
                <img 
                    src={`${settings.imageServer}image/${data.img_url}`} 
                />
            </div>   
    
    if (data.Position == 'right'){
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