import React from 'react'
import { useState,useRef,useEffect } from 'react'

export default function Timer() {
  const [count,setCount] = useState(100)
  const [isRanning,setIsRanning]= useState('start')
   let intervalRef = useRef()

  useEffect(() => {
    
  if(isRanning=='start'){
   intervalRef.current= setInterval(()=>setCount((prev)=>prev-1),1000)
  }
  if(isRanning=='stop'){
    clearInterval(intervalRef.current)
      setCount(0)
  }
  if(isRanning=='pause'){
    clearInterval(intervalRef.current)
  }
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [isRanning])
  // https://www.youtube.com/watch?v=iEznEzIfUb0
  
  return (
    <div><h1>stopWatch</h1>
      <div>{count}</div>
      <button onClick={()=>setIsRanning('start')}>Start</button>
      <button onClick={()=>setIsRanning('stop')}>Stop</button>
      <button onClick={()=>setIsRanning('pause')}>Pause</button>
    </div>
  )
}
