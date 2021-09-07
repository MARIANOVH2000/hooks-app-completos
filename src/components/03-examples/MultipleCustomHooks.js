import React from 'react'
import '../02-useEfect/effects.css'
import { useCouter } from '../hooks/useCouter'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCouter(1)
    const {loading,data}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
    `);
    console.log(loading);
    //doble negacion regresa false
    //entonces seria si es falso regresame la posicion 0
    const {author,quote}=!!data && data[0];
    console.log(author,quote);
    return (
        
        <div>
            <h1>BreakingBad  Quotes</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className='blockquote text-right'>
                            <p className='mb-0'>¨{quote}</p><br/>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }
            <button onClick={increment} className='btn btn-primary'>
                Siguiente Frase
            </button>
        </div>
    )
}
