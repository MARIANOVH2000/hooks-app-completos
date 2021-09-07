import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import '../02-useEfect/effects.css';
import { useCouter } from '../hooks/useCouter';


export const MemoHook= () => {
    const {counter,increment} =useCouter(5000);
    const [show,setShow]=useState(true);
    
    const memoProcesoPesado= useMemo(()=>procesoPesado(counter),[counter])
    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter:<small>{counter}</small></h3>
            <hr/>
            <p>{ memoProcesoPesado}</p>
            <button className="btn btn-primary"
            onClick={
                increment
            }>
                +1
            </button>  
            <button
            className="btn btn-outline-primary"
            onClick={()=>{
                setShow(!show)
            }}>
                  Mostrar/Ocultar { JSON.stringify(show)}
            </button>
        </div>
    )
}
