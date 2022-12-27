import React, {useEffect, useRef, useState} from 'react';
import Areas from './Areas/Areas';
import LastWork from './LastWork/LastWork';
import cl from './LessonPage.module.scss'
import Title from './Title/Title';
import settings from '../../common/settings';

// let save 
let draw = false
  let cx
  let cy 
  
const LessonPage = () => {

  const canvas = useRef(null)
  const [image, setImage] = useState(null)
  const [imageArr, setImageArr] = useState([])

  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')


  const [save, setSave] = useState(null)
  // const [ctxS, setctxS] = useState(null)
  const [coordinate, setCoordinate] = useState({x:0,y:0})



  const mouseObserver = (e) => { 
    setCoordinate({x:e.offsetX,y:e.offsetY})
  }

  const mouseDown =  (e) => {
    setSave(canvas.current.toDataURL()) 
    // save = canvas.current.toDataURL()
    console.log('mouseDown')
    cx = e.offsetX
    cy = e.offsetY
    draw = true
  }
  const mouseUp = (e) => { 
    draw = false
    console.log('mouseUp')
  }

  useEffect(()=>{
    if (draw) {

      console.log(
        Math.abs(coordinate.x-cx) , 
        Math.abs((coordinate.y-cy)),
        Math.abs(coordinate.x-cx)>0 || Math.abs((coordinate.y-cy)>0),
        '#',
        "cx=",
        cx,
        '|',
        "cy=",
        cy,
        '|',
        coordinate.x,
        coordinate.y,
      )

      let a = Math.abs(cx-coordinate.x)
      let b = Math.abs(cy-coordinate.y)

      if(a<2 && b<2){
      
      }else{
          const img = new Image()
          img.src = save;
          let c = canvas.current.getContext("2d")

          img.onload = () => {
            c.clearRect(0,0,     400, 400)          
            c.beginPath()
            c.moveTo(cx, cy)
            c.drawImage(img, 0,0,400, 400)
            c.lineTo(coordinate.x,coordinate.y)
            c.stroke()
            c.closePath();
            console.log('выполнено')
          }
          
        }     
    }    
  },[coordinate])


  useEffect(()=>{
    canvas.current.onmousemove = mouseObserver
    canvas.current.onmousedown = mouseDown
    canvas.current.onmouseup = mouseUp
  },[])

  useEffect(() => {
    const tempImage = new Image();
    tempImage.src = `${settings.imageServer}image/10`
    tempImage.crossOrigin='anonymous'
    tempImage.onload = () => setImage(tempImage)
    console.log('sdsds')
  }, [])

  useEffect(() => {
    if(image && canvas) {
      let ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      ctx.drawImage(image, 20, 20, 300, 300)

      ctx.font = "20px Comic Sans MS"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, (400 / 2), 25)
      ctx.fillText(bottomText, (400 / 2), 256 + 40 + 25)
    }
  }, [image, canvas, topText, bottomText])
  

    

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