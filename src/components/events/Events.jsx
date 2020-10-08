import React from 'react'

const Events = ({ event }) => (
    <div className='card-comic'>
        <div className='container-title'>
            <h1 className='title-comic'>{event.title}</h1>
        </div>
        <img
            className='img-comic'
            loading='lazy'
            src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
            alt={event.title}
        />
    </div>
);

export default Events
