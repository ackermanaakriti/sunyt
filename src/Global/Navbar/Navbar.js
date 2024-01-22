import React from 'react'
import Topbar from './Topbar'
import Navlinks from './Navlinks'

const Navbar = () => {
  return (
   <>
   <div className='header--wrapper'>

   <Topbar/>
   <Navlinks/>
   </div>
   </>
  )
}

export default Navbar