import React from 'react'
import CounterButtons from './CounterButtons'
import { useSelector } from 'react-redux'

const Counter = () => {

    const { counter } = useSelector((store) => store.counterReducer)
    const { theme } = useSelector((store) => store.themeReducer)

    return (
        <>
            <div className={theme === 'light' ? 'light_theme' : 'dark_theme'} style={{height:"300px",width:"500px"}}>
                <div  style={{ border: "2px solid black",padding:"10%",display:"flex",justifyContent:"center",textAlign:"center",flexDirection:"column" }}>
                    <h1>Counter</h1>
                    <h1>{counter}</h1>
                    <CounterButtons />
                </div>
            </div>
        </>
    )
}

export default Counter