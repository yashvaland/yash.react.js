import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handledecrement, handleincrement } from '../Redux/Counter/Action'

const CounterButtons = () => {

    const dispatch = useDispatch()

    return (
        <>
            <div className='counter-btns mt-2'>
                <button className='m-2' onClick={() => dispatch(handleincrement())}>ADD</button>

                <button className='m-2' onClick={() => dispatch(handledecrement())}>REDUCE</button>
            </div>
        </>
    )
}

export default CounterButtons
