import React, { useState } from 'react'
import '../02-useEfect/effects.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
    const [show,setShow]=useState(false);
    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr/>
            {show &&  <MultipleCustomHooks />}
            <button className='btn btn-primary mt-3'
            onClick={
                ()=>{
                    setShow(!show)
                }
            }>
                Mostrar/Ocultar
            </button>
        </div>
    )
}
