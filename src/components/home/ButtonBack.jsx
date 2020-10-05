import React from 'react';

const ButtonBack = () => (
    <div className='container-flex'>
        <button className='button' onClick={() => window.history.back()}>
            Volver
        </button>
    </div>
);
export default ButtonBack;
