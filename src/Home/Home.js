import React, { useState } from 'react'
import Visited from '../Visited';
import { Link } from 'react-router-dom';


function Home() {
    var [area,setArea]=useState("");
    const handleSubmit =(e)=>{
        setArea("")
        console.log(area)
}
  return (
    <div className='home-container'>
      <h1>Area he visited yesterday for marketing</h1>
      <input type="text" value = {area} onChange={(e)=>setArea(e.target.value)}/><br/>
      <Link to="/visited"><button className="submit-btn" onClick={()=>handleSubmit()}>Next</button></Link>
    </div>
  )
}

export default Home
