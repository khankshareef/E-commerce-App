import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import React, { useEffect, useState } from 'react';

function Timer() {
    const [time,settime]=useState(new Date().toLocaleTimeString());
    useEffect(()=>{
        const timer=setInterval(()=>{
            settime(new Date().toLocaleTimeString());
        },1000);
        return()=>
            clearInterval(timer);
    },[])
  return (
    <div className='Timer'>
        <div className='content'>
            <div className='summers'>
            <span ><h2 >Get -50% from </h2></span>
            <span  ><h2 className='summer'>Summer Collection  </h2></span>
            </div>
            <div className='timer'>
            <span className='time'><h1 className='time'> 404: {time}</h1></span>
            </div>
            <div className='spans'>
            <span style={{marginRight:'30px',marginLeft:'50px',color:'purple'}}><h6>Days</h6> </span>
                <span style={{marginLeft:'3px',color:'purple'}}> <h6>Hours:</h6> </span> 
                <span style={{marginLeft:'5px',color:'purple'}}><h6>Minutes:</h6></span> 
                <span style={{marginLeft:'7px',color:'purple'}}><h6>Seconds</h6></span>
                </div>
                <button style={{bottom:'0px',backgroundColor:'black',color:'white',width:'150px',height:'50px'}}>Shop Now <ArrowForwardTwoToneIcon className='arrow'/></button>
        </div>
    </div>
  )
}

export default Timer