import React, {useEffect, useRef, useState} from 'react';
import Areas from './Areas/Areas';
import LastWork from './LastWork/LastWork';
import cl from './LessonPage.module.scss'
import Title from './Title/Title';
import settings from '../../common/settings';
 
  
  
const LessonPage = () => {

  const canvas = useRef(null)
  const [image, setImage] = useState(null)
  const [imageArr, setImageArr] = useState([])

  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  const [save, setSave] = useState(null)
  const [coordinate, setCoordinate] = useState({x:0,y:0})
  const [lineStartCoordinate, setLineStartCoordinate] = useState({x:0,y:0})
  const [drawingNow, setDrawingNow] = useState(false)

  const [needCheck, setNeedCheck] = useState(false)

  const mouseObserver = (e) => { 
    setCoordinate({x:e.offsetX,y:e.offsetY})
  }

  const mouseDown =  (e) => {
    setSave(canvas.current.toDataURL()) 
    setLineStartCoordinate({x:e.offsetX,y:e.offsetY})
    setDrawingNow(true)
    setNeedCheck(true)

  }
  const mouseUp = (e) => { 
    setDrawingNow(false)
  }

  useEffect(()=>{
    if (drawingNow && ( Math.abs(lineStartCoordinate.x-coordinate.x)<2 || Math.abs(lineStartCoordinate.y-coordinate.y) )) {
      drawingNowHandler(save,canvas,lineStartCoordinate,coordinate) 
    }    
  },[coordinate])


  useEffect(()=>{

    if (!drawingNow && needCheck)
    console.log(
      lineStartCoordinate,coordinate,needCheck
    )

    if(
      lineStartCoordinate.x >=20 && lineStartCoordinate.x <=120 &&
      lineStartCoordinate.y >=20 && lineStartCoordinate.y <=120 &&
      coordinate.x >=200 && coordinate.x <=300 &&
      coordinate.y >=200 && coordinate.y <=300 
    ){
        console.log('sdsdd')

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
        console.log('sdsdd')

        let ctx = canvas.current.getContext("2d")
        ctx.beginPath()
        ctx.rect(20, 20, 100, 100);
        ctx.strokeStyle = "green"
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.closePath()
    }


  },[drawingNow])


  useEffect(()=>{
    canvas.current.onmousemove = mouseObserver
    canvas.current.onmousedown = mouseDown
    canvas.current.onmouseup = mouseUp
  },[])

  useEffect(() => {
    const tempImage = new Image();
    tempImage.src = `${settings.imageServer}image/10`
    tempImage.crossOrigin='anonymous'


    const tempImage1 = new Image();
    tempImage1.src = `${settings.imageServer}image/11`
    tempImage1.crossOrigin='anonymous'

    const tempImage2 = new Image();
    tempImage2.src = `${settings.imageServer}image/13`
    tempImage2.crossOrigin='anonymous'

    let arr = []

    arr.push(tempImage,tempImage1,tempImage2)

    tempImage.onload = () => setImageArr(arr)
    // tempImage1.onload = () => setImageArr([...imageArr, tempImage1,])
    // tempImage2.onload = () => setImageArr([...imageArr, tempImage2])
  }, [])



  
  useEffect(() => {
    console.log(imageArr)
    if(imageArr.length==3 && canvas) {
      let ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      
      ctx.drawImage(imageArr[0], 20, 20, 100, 100)
      ctx.drawImage(imageArr[1], 200, 200, 100, 100)
      ctx.drawImage(imageArr[2], 20, 200, 100, 100)

      ctx.font = "20px Comic Sans MS"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, (400 / 2), 25)
      ctx.fillText(bottomText, (400 / 2), 256 + 40 + 25)
    }
  }, [imageArr, canvas, topText, bottomText])
  

    

  const test = () => {
    // // console.log(s)
    // ctxS.fillRect(180, 150, 200, 200);
    // const img = new Image();
    // const imgs = new Image();
    // img.src = `${settings.imageServer}image/${imageArr.length+17}`
    // img.crossOrigin='anonymous'
    // img.onload = () => setImageArr([...imageArr, img])
    
    }

  // const clickHandler = (e) => {
  //   // console.log(e)
  // }

  // useEffect(()=>{
  //   imageArr.map((i,n)=>{
  //     ctxS.drawImage(i, 100+n*50, 200, 50, 50)
      
  //   })
  // },[imageArr])


  // useEffect(()=>{

  // })


    // console.log(imageArr)
    
  
  return (
    <div className={cl.wrapper}>
      <div className={cl.content}>
        <Title />                
        <Areas></Areas>
        <div className={cl.block}>
                
          <button
          onClick={test}
          >sds</button>
          <canvas 
            // onClick={(e)=>clickHandler(e)}
            className={cl.canva}
            id="tutorial" 
            width="400" 
            height="400"
            ref={canvas}
          />

              <div 
                onClick={()=>console.log("Hsdsdsds")}
                className={cl.screen}
                >
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>
                  <div>asa</div>

              </div>  
          </div>
            

            <LastWork ></LastWork>
            
            
        </div>

    </div>
    );
};

export default LessonPage;


const drawingNowHandler = (save,canvas,lineStartCoordinate,coordinate) =>{
  const img = new Image()
  img.src = save;
  let c = canvas.current.getContext("2d")

  img.onload = () => {
    c.clearRect(0,0,     400, 400)          
    c.beginPath()
    c.moveTo(lineStartCoordinate.x,lineStartCoordinate.y)
    c.drawImage(img, 0,0,400, 400)
    c.lineTo(coordinate.x,coordinate.y)
    c.stroke()
    c.closePath();
}}




/*
Entrys
1. Lesson
  1.1 Description  - Lesson settings and identification data
  1.2 Slide        - Structural element of lesson
  1.3 Finisher     - final element of lesson

2. Slide
id
type



3. Student

4. Teacher


*/



  // const onDraw=(x,y)=>{
   

  //   if (x!=cx && y!=cy){


  //     let img = new Image()
  //     img.src = save;
  //     // console.log(save)
      
  //     console.log('dfdf')
  //     ctxS.clearRect(0,0,     400, 400)
  //     ctxS.drawImage(img, 0,0,400, 400)
  //     ctxS.beginPath()
  //     ctxS.moveTo(cx, cy)
  //     ctxS.lineTo(x,y)
  //     ctxS.stroke()
  //     // console.log('canvas.current.width, canvas.current.height')
  //     ctxS.closePath();

  //   }

   
    
  // }