import React, { useContext } from 'react'
import { themecontext } from '../Context/Themecontext'
import { LuSun } from "react-icons/lu";
import { AiFillSun } from "react-icons/ai";
const Button = () => {
    const {themeupdaterfunction,theme}=useContext(themecontext)

  return (
    <div>
      <button style={{backgroundColor:theme=="light"?"black":"white",color:theme=="light"?"white":"black"}} onClick={themeupdaterfunction}>{theme=="light"?<LuSun />:<AiFillSun />}</button>
    </div>
  )
}

export default Button
 