import React from 'react';

const ButtonBack = ({ comic }) => (
    <div className='container-flex'>
        <button
            className={comic ? 'button btnfixed' : 'button'}
            onClick={() => window.history.back()}
        >
            Volver
        </button>
    </div>
);
export default ButtonBack;
