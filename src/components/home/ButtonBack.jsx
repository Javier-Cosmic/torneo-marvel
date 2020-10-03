import React from 'react';

const ButtonBack = () => (
    <div className='container-flex'>
        <button className='button-back' onClick={() => window.history.back()}>
            Volver
        </button>
    </div>
);
export default ButtonBack;
