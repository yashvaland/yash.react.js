import './App.css'
import Navabar from './Components/Navabar'
import Midsection from './Components/Midsection'
import Button from './Components/Button'
import { useContext } from 'react'
import { themecontext } from './Context/Themecontext'


function App() {
  const {theme}=useContext(themecontext)
  return (
    <>
      <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white"}}>
      <Navabar />
      <Button />
      <Midsection />
      </div>
    </>
  )
}

export default App
