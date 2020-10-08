import React from 'react';
import {Link} from 'react-router-dom';

const Character = ({ character }) => (
        <div className='card'>
            <img
                className='img'
                loading='lazy'
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt='character marvel'
            />
            <div className='div-title'><h1 className='title'>{character.name}</h1></div>
            <div className='links-character'>
                <Link className='link-comic color-link1' to={`/comic/${character.id}`}>Comics</Link>
                <Link className='link-comic color-link2' to={`/series/${character.id}`}>Series</Link>
                <Link className='color-link3' to={`/events/${character.id}`}>Eventos</Link>
            </div>
        </div>
    );

export default Character;
