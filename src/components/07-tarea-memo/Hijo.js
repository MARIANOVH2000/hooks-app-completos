import React from 'react'
import '../02-useEfect/effects.css';

export const Hijo = React.memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3 hijo"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
