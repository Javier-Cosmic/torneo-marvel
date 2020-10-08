import React from 'react'

const Series = ({ serie }) => (
    <div className='card-comic'>
        <div className='container-title'>
            <h1 className='title-comic'>{serie.title}</h1>
        </div>
        <img
            className='img-comic'
            loading='lazy'
            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            alt={serie.title}
        />
    </div>
);

export default Series
