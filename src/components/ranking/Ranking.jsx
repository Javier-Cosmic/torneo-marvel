import React from 'react';

const Ranking = ({ character, index }) => (
    <tbody>
        <tr>
            <td className='td-number'>{index+1}</td>
            <td>
                <img
                    src={character.img}
                    className='img-table'
                    alt={character.name}
                />
            </td>
            <td>{character.name}</td>
            <td>{character.points}</td>
        </tr>
    </tbody>
);

export default Ranking;
