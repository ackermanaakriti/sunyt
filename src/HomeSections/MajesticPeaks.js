import React from 'react'
import './HomeSection.css'
import img from '../images/dolpa.jpeg'
import { MajesticPeaksData } from '../Data/MajesticPeakData'
import {Container} from '@mui/material'
import Bluebutton from '../Components/Button/Bluebutton'


const MajesticPeaks = () => {
  return (
    <>
    <div className='majesticpeaks--container'>
        <Container>

        <h1 className='section--header'>Majestic Peaks,Safaris & More Category</h1>
        <div style={{display:'flex',gap:'50px' ,paddingTop:'50px'}}>

{MajesticPeaksData.map((item)=>(
    <div className='majesticpeaks--card'>
    <div className='majesticpeaks--card--img'>
        <img src={img} alt=''/>
        
    </div>
        <h3>{item.title}</h3>
        <div className='majesticpeaks--card--content'>
            <p> {item.content}</p>
        </div>

    
</div>
    
))}
</div>
<div style={{margin: "0 auto", display: "inline-block"}}>
 <Bluebutton value='Explore More'/>
 </div>
          
       </Container> 
    </div>
    </>
  )
}

export default MajesticPeaks