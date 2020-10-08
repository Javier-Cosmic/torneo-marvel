import React from 'react';

const Comic = ({ comic }) => (
    <div className='card-comic'>
        <div className='container-title'>
            <h1 className='title-comic'>{comic.title}</h1>
        </div>
        <img
            className='img-comic'
            loading='lazy'
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
        />
    </div>
);

export default Comic;
