import React from 'react';

const Ranking = ({ character }) => {
    return (
        <tbody>
                <tr>
                    <td>{character.id}</td>
                    <td><img src={character.img} width='80px' alt='player' /></td>
                    <td>{character.name}</td>
                    <td>{character.points}</td>
                </tr>
        </tbody>
    );
};

export default Ranking;
