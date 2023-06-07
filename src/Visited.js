import React from 'react'
import Home from './Home/Home'
import { Link } from 'react-router-dom'
import './App.css'
import { useParams } from 'react-router-dom'

function Visited(props) {
  return (
    <div className='visited-container'>
      <Link to="/"><button className='home-btn'>Home</button></Link>  
        <h1>Area he visted for marketing</h1>
        <h2>{props.area}</h2>
    </div>
  )
}

export default Visited
