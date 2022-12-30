import React, {useEffect, useRef, useState} from 'react';
import settings from '../../../../../common/settings';
import cl from './Slide.module.scss'

let currentCunvas = {
    dimensions:{
        width:  600,
        height: 600,
    }
}

const data = [

    {
        id       :74,
        imageID  :11,
        top      :20,
        left     :20,
        width    :100,
        height   :100,
        pairId   :55,
        img      :null
    },
    {
        id       :75,
        imageID  :13,
        top      :20,
        left     :20,
        width    :100,
        height   :100,
        pairId   :55,
        img      :null
    },
    {
        id       :76,
        imageID  :14,
        top      :20,
        left     :20,
        width    :100,
        height   :100,
        pairId   :55,
        img      :null
    },
    {
        id       :77,
        imageID  :15,
        top      :20,
        left     :20,
        width    :100,
        height   :100,
        pairId   :55,
        img      :null
    }
   
]

const Slide = ({lineStartCoordinate, setLineStartCoordinate,newObj,setNewObj}) => {

    const canvas = useRef(null)
    const [imageArr, setImageArr] = useState([])
    const [save, setSave] = useState(null)
    const [coordinate, setCoordinate] = useState({x:0,y:0})
    const [isDdrawingNow, setIsDrawingNow] = useState(false)
    const [finished, setFinished] = useState(false)


    const mouseDown =  (e) => {
        setSave(canvas.current.toDataURL()) 
        setLineStartCoordinate({x:e.offsetX,y:e.offsetY})
        setIsDrawingNow(true)
        
    }

    const mouseMove = (e) => { 
        setCoordinate({x:e.offsetX, y:e.offsetY})
    }

    const mouseUp = (e) => { 
        setIsDrawingNow(false)
        setFinished(true)
    }


    useEffect(()=>{
        if (isDdrawingNow && ( Math.abs(lineStartCoordinate.x-coordinate.x)<2 || Math.abs(lineStartCoordinate.y-coordinate.y) )) {
            drawingNowHandler(canvas,lineStartCoordinate,coordinate, currentCunvas, imageArr,isDdrawingNow, data) 
        }    
    },[coordinate])

    useEffect(()=>{
        answerMarking(lineStartCoordinate, coordinate, canvas)
        if (!isDdrawingNow,finished ){
            console.log(
                 lineStartCoordinate.x,
                 lineStartCoordinate.y,
                 coordinate.x,
                 coordinate.y
                )
            setFinished(false)
        }
    },[isDdrawingNow])

    useEffect(()=>{
        canvas.current.onmousemove = mouseMove
        canvas.current.onmousedown = mouseDown
        canvas.current.onmouseup = mouseUp
        imadeloader(setImageArr, data)
    },[])

    useEffect(() => {
        drawingNowHandler(canvas,lineStartCoordinate,coordinate, currentCunvas, imageArr,isDdrawingNow, data)
        console.log(data)
    // }, [imageArr])  
    }, [imageArr])  


return (
    <div className={cl.wrapper}>
        <canvas 
            className={cl.canva}
            width  = {currentCunvas.dimensions.width} 
            height = {currentCunvas.dimensions.height}
            ref={canvas}
        />
        <button
        onClick={()=> console.log(newObj )}
        >
            xdasd
        </button>
    </div>    
    );
};

export default Slide;


const drawingNowHandler = (canvas,lineStartCoordinate,coordinate,currentCunvas, imageArr,isDdrawingNow, data) =>{

    console.log(data)

    let c = canvas.current.getContext("2d")
    c.clearRect(0,0,     currentCunvas.dimensions.width, currentCunvas.dimensions.height) 
    imageArr.map((i,ind)=>{
        c.drawImage(i, 20, 20+110*ind, 100, 100)
       
    })

    if(!isDdrawingNow) return

    c.beginPath()
    c.moveTo(lineStartCoordinate.x,lineStartCoordinate.y)
    c.strokeStyle = "black"
    c.lineWidth = 5;
    c.lineTo(coordinate.x,coordinate.y)
    c.stroke()
    c.closePath();
}


const imadeloader = (setImageArr, data) => {
    const imgs=[]; // the loaded images will be placed in imgs[]
    
    let imagesOK=0;
    loadAllImages(start);
    
    function loadAllImages(callback){
        data.map((item, ind)=>{
            let img = new Image();
            imgs.push(img);
            img.onload = function(){ 
                imagesOK++; 
                if (imagesOK>=data.length ) {
                    callback();
                }
            };
            img.onerror=function(){ } 
            img.crossOrigin="anonymous";
            img.src = `${settings.imageServer}image/${item.imageID}`;
        })

    }
    
    function start(){
        setImageArr(imgs) // the imgs[] array now holds fully loaded images  
        
        
    }
}
  




const answerMarking = (lineStartCoordinate, coordinate, canvas) => {
if(
    lineStartCoordinate.x >=20 && lineStartCoordinate.x <=120 &&
    lineStartCoordinate.y >=20 && lineStartCoordinate.y <=120 &&
    coordinate.x >=200 && coordinate.x <=300 &&
    coordinate.y >=200 && coordinate.y <=300 
){
    let ctx = canvas.current.getContext("2d")
    ctx.beginPath()
    ctx.rect(20, 20, 100, 100);
    ctx.strokeStyle = "green"
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath()
}

if(
    lineStartCoordinate.x >=20 && lineStartCoordinate.x <=120 &&
    lineStartCoordinate.y >=20 && lineStartCoordinate.y <=120 &&
    coordinate.x >=20 && coordinate.x <=120 &&
    coordinate.y >=200 && coordinate.y <=300 
){
    let ctx = canvas.current.getContext("2d")
    ctx.beginPath()
    ctx.rect(20, 20, 100, 100);
    ctx.strokeStyle = "green"
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath()
}
}
  
  


























// const imadeloader = (setImageArr, data) => {
//     const imgs=[]; // the loaded images will be placed in imgs[]
    
//     let imagesOK=0;
//     loadAllImages(start);
    
//     function loadAllImages(callback){
//         data.map((item, ind)=>{
//             let img = new Image();
//             imgs.push(img);
//             img.onload = function(){ 
//                 imagesOK++; 
//                 if (imagesOK>=data.length ) {
//                     callback();
//                 }
//             };
//             img.onerror=function(){ } 
//             img.crossOrigin="anonymous";
//             img.src = `${settings.imageServer}image/${item.imageID}`;
//         })

//     }
    
//     function start(){
//         setImageArr(imgs) // the imgs[] array now holds fully loaded images  
        
        
//     }
// }