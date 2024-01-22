import React from 'react'
import './Bluebutton.css'

const Bluebutton = ({value}) => {
  return (
   <>
   <button className='btn--container'>
    <p> {value}</p>
   </button>
   </>
  )
}

export default Bluebutton