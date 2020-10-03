import React from 'react';
import {Link} from 'react-router-dom';

const Character = ({ character }) => {
    return (
        <div className='card-character'>
            <img
                className='img-character'
                loading='lazy'
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt='character marvel'
            />
            <h1 className='title-character'>{character.name}</h1>
            <Link to={`/comic/${character.id}`}>Comics</Link>
        </div>
    );
};

export default Character;
