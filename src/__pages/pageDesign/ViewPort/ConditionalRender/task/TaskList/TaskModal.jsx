import React from 'react';
import cl from '../Styles/Tasks.module.scss'
import { useState } from 'react';
import settings from '../../../../../../settings';


let random = -1

const TaskModal = ({taskModal, setTask, data}) => {

    console.log(data)

    const [answerGiven, setAnswerGiven] = useState(false)
    const [answerCorrect, setAnswerCorrect] = useState(false)

    random = random<0 ? Math.round(Math.random() * 3) : random
    let mass = []

    for (let i = 0; i<4 ; i++){
        mass.push( i==random 
            ? 
              {back: data.imgext_url, id:i, correct:true } 
            : 
              {back: data.img_url, id:i, correct:false }  
        )
    }

    let mergedClassName

    if (!answerGiven) mergedClassName = cl.modal__content
    else if (answerCorrect) mergedClassName = [cl.modal__content, cl.modal__content_correct].join(' ')
    else mergedClassName = [cl.modal__content, cl.modal__content_uncorrect].join(' ')

    

    console.log(mergedClassName)
    return (
        <div 
            className={cl.modal__wrapper}
            onClick={ (e)=>{e.stopPropagation(); setTask(-1); random=-1 }}
        >
            <div 
                className={mergedClassName}
                onClick={ (e)=>{e.stopPropagation()}}
            >
                <h3>{data.deskription}  </h3>


                <div className={cl.modal__content_list}>
                    {mass.map((item,index)=>{
                        return (
                            <div  
                                key={item.id}
                                className={cl.modal__port}
                                style={{backgroundImage: `url(${settings.imageServer}image/${item.back})`}}
                                onClick={()=>{
                                    console.log(item.correct)
                                    if (item.correct) setAnswerCorrect(true)
                                    else setAnswerCorrect(false)
                                    setAnswerGiven(true)
                                }}
                            > 
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    );
};

export default TaskModal;