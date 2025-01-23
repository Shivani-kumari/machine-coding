import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [activeColor,setActiveColor] = useState('red')
  useEffect(()=>{
    let timer
      switch (activeColor) {
        case 'red':
           timer =setTimeout(()=>setActiveColor('yellow'),2000)
          break;
          case 'yellow':
            timer = setTimeout(()=>setActiveColor('green'),2000)
            break;
          case 'green':
            timer =setTimeout(()=>setActiveColor(''),2000)
              break;
          case '':
              timer =setTimeout(()=>setActiveColor('red'),2000)
              break;
        default:
          break;
      }
      // return () => clearTimeout(timer);
  },[activeColor])
  
  const trafficLightStyle = {
    width:'100px',
    height:'100px', 
    borderRadius: "50%",
    backgroundColor:'black',
    marginTop:'10px'
  }
  
  return (
    <div className="App">
      <header className="App-header">
       <div>
        Traffic Light
       </div>
       
       <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor: "#f2f2f2"}}>
        {
          activeColor=='red' ? <div style={{...trafficLightStyle,backgroundColor: activeColor}}>
          Red
      </div>
      : <div style={{...trafficLightStyle}}>
      Red
  </div>
        }
        {
          activeColor == 'yellow' ? <div style={{...trafficLightStyle,backgroundColor:activeColor}}>
          Yellow
      </div>
      : 
      <div style={{...trafficLightStyle}}>
          Yellow
      </div>
        }
        {
          activeColor == 'green' ? <div style={{...trafficLightStyle,backgroundColor:activeColor}}>
          Green
      </div>
      : <div style={{...trafficLightStyle}}>
      Green
  </div>
        }
        
      </div>
      </header>
      
    </div>
  );
}

export default App;
