import React, { useLayoutEffect, useRef, useState } from 'react'
import './layout.css'
import { useCouter } from '../hooks/useCouter'
import { useFetch } from '../hooks/useFetch'

export const Layout = () => {
    const {counter, increment} = useCouter(1)
    const {data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
    `);
    //console.log(loading);
    //doble negacion regresa false
    //entonces seria si es falso regresame la posicion 0
    const {quote}=!!data && data[0];

    const pTag=useRef();
    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
   
    return (
        
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            
            
            <blockquote className='blockquote text-right'>
                <p className='mb-0' ref={pTag}>¨{quote}</p><br/>
              
            </blockquote>
            <pre>
                {JSON.stringify(boxSize,null,3)}</pre>     
            
            <button onClick={increment} className='btn btn-primary'>
                Siguiente Frase
            </button>
        </div>
    )
}
