import React, { useContext, useState } from 'react';
import settings from '../../../../../settings';
import cl from "./BlockFixed.module.scss"

const BlockFixed = ({data}) => {

    const [edit, setEdit] = useState(false)
    const [moto, setMoto] = useState(data.motto)
    const [text, setText] = useState(data.text)

    let back = `url(${settings.imageServer}image/${data.fon})`


    // console.log(data)          
    

   
    return  <div style={{backgroundImage: back}} className = {cl.wrapper}> 

    <button onClick={()=>setEdit(!edit)}>Редактировать</button>

        <div className={cl.titleBlock}>
            <h1 className={cl.title}>                       
                <p style = {{color: 'rgb(216, 138, 13)',}}>{data.title}</p> 
                
                {edit 
                ? <input  
                    value = {moto} 
                    onChange = {(e)=>setMoto(e.target.value)}/>
                : <p>{moto}</p>
                }

            </h1>
            <div className={cl.moto}> 

                {edit 
                ? <input 
                    value = {text} 
                    onChange = {(e)=>setText(e.target.value)} 
                    className = {cl.textInput}
                  />
                : <p>{text}</p>
                }


            </div>
        </div>                                           
    </div>
       
    
      
};


const styles = {
    
    titleBlock:{
        contenteditable:"true ",
        paddingTop:'100px',
    },
    title: {
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        fontWeight:'600',
        fontSize:'60px',
        marginBottom:'80px',
    },
    moto:{
        contentEditable:"true ",
        fontSize:'35px'
    }
    
}

export default  BlockFixed;