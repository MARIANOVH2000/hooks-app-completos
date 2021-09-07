//para no llenar la memoria con archivos basura

import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords,setCoords]=useState({x:0, y:0});
    const {x,y}=coords;

    useEffect(() => {
       const mouseMove=(e)=>{
           const coors={x:e.x,y:e.y};
           setCoords(coors);
           //console.log(coors)
       }
       window.addEventListener('mousemove',mouseMove);

        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])
    return (
        <div>
            <br/>
            <h3>Eres GENIAL</h3>
            <p>
                x: {x}  y:{y}
            </p>
            
        </div>
    )
}
