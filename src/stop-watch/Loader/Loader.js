import React,{useRef} from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Loader() {
    const divRef = useRef(null)
    const timerRef = useRef()
    // https://www.youtube.com/watch?v=067USwLpWIE
    const [cout,setCout] = useState(0)
        const [loader,setLoader] = useState()
        useEffect(()=>{
          timerRef.current =  setInterval(()=>{
                setCout((prev)=>prev + 50)
                divRef.current.style.width = `${cout+50}px`
                console.log("hello",cout,divRef.current.style.width)
            },1000)
            if(cout==300){
                console.log("I am calling here")
                alert("upLoaded sucess")
                clearInterval(timerRef.current)
            }
            return ()=>clearInterval(timerRef.current)
        },[cout])
        
  return (
    <div><h1>Loader{cout}</h1>
    <div style={{height:'20px',width:'300px',backgroundColor:'skyblue'}}>
        <div ref={divRef} style={{height:'20px',width:'0px',backgroundColor:'red'}}></div>
    </div>
        
    </div>
  )
}
// 
