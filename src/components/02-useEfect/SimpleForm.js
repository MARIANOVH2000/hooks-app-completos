import React, { useEffect, useState } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState,setFormState]=useState({
        name:'',
        email:''
    });
    const {name,email}=formState;
    useEffect(()=>{
        // console.log('hey');
    },[]);

    useEffect(()=>{
        // console.log('FormState cambio');
    },[formState]);
    
    useEffect(()=>{
        // console.log('email cambio');
    },[email]);

    const habdleInputChange=({target})=>{
       setFormState({
           ...formState,
           [target.name]:target.value
       });
    }
    return (
        <>
            <h1>useEfect</h1>

            <hr/>
            <div className='form-goup'>
                <input type="text"
                name="name"
                className='form-control'
                placeholder='TU nombre'
                autoComplete='off'
                value={name}
                onChange={habdleInputChange} />

            </div><br/>
            <div className='form-goup'>
                <input type="text"
                name="email"
                className='form-control'
                placeholder='email@gmail.com'
                autoComplete='off'
                value={email}
                onChange={habdleInputChange} />

            </div>
            { (name==='123') && <Message />}
        </>
    )
}
