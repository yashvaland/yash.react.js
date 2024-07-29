import React, { useContext } from 'react'
import { themecontext } from '../Context/Themecontext'

const Navabar = () => {
  const{theme}=useContext(themecontext)
  return (
    <div>
      <h1>Navabar</h1>
      <h3>The Theme Is {theme}</h3>
    </div>
  )
}

export default Navabar
